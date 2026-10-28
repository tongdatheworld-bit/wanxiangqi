let allHeroCardData = [
    {
        "id": 1,
        "name": "孙尚香",
        "stage": 1,
        "camp": "三分之地",
        "tag": "万象大赛",
        "img": "images/herocard/sunshangxiang.png",
        "awakeningImg": "images/herocard/awakening/sunshangxiang.png",
        "skillImg": "images/herocard/skills/honglianbaodan.png",
        "desc": "登场：获得1次免费刷新。",
        "source": "该卡牌通过商店购买、拍卖等渠道获得",
        "keywords": ["登场", "刷新"],
        "hp": 210,
        "mp": 15,
        "mpMax": 50,
        "physicalAtk": 40,
        "magicAtk": 0,
        "physicalDef": 14,
        "magicDef": 14,
        "atkSpeed": 1.00,
        "critRate": "0%",
        "critDmg": "40%",
        "atkRange": 4,
        "skillName": "红莲爆弹",
        "skillDesc": "孙尚香朝目标敌人发射1发弩炮，造成100+100%物理攻击力的物理伤害，并降低命中敌人50%物理防御，持续5秒。",
        "skillLv10": "弩炮伤害提升至150+150%物理攻击力",
        "skillLv40": "弩炮会在命中后爆炸，对附近敌人造成60%的技能伤害",
        "skillLv100": "会额外发射1发更强力的弩炮，造成1.5倍的伤害",
        "awakeningDesc": "登场：获得2次免费刷新。",
        "equipList": ["e1", "e2"],
        "teamList": ["t1"]
    }
];
let currentStage = 'all';
let currentCamp = 'all';
let currentKeyword = 'all';
let searchKw = '';

document.addEventListener('DOMContentLoaded', function () {
    const heroCardWrap = document.getElementById('heroCardList');
    if (!heroCardWrap) return;

    document.getElementById('stageFilter').addEventListener('change', e => {
        currentStage = e.target.value;
        renderHeroCardList();
    });

    document.getElementById('campFilter').addEventListener('change', e => {
        currentCamp = e.target.value;
        renderHeroCardList();
    });

    document.getElementById('keywordFilter').addEventListener('change', e => {
        currentKeyword = e.target.value;
        renderHeroCardList();
    });

    document.getElementById('searchInput').addEventListener('input', e => {
        searchKw = e.target.value.trim().toLowerCase();
        renderHeroCardList();
    });

    renderHeroCardList();
});

function renderHeroCardList() {
    const wrap = document.getElementById('heroCardList');
    if (!wrap) return;
    let filterArr = [...allHeroCardData];

    if (currentStage !== 'all') {
        filterArr = filterArr.filter(item => item.stage == currentStage);
    }
    if (currentCamp !== 'all') {
        filterArr = filterArr.filter(item => item.camp === currentCamp);
    }
    if (currentKeyword !== 'all') {
        filterArr = filterArr.filter(item =>
            Array.isArray(item.keywords) && item.keywords.includes(currentKeyword)
        );
    }
    if (searchKw) {
        filterArr = filterArr.filter(item => {
            const name = item.name?.toLowerCase() || '';
            const desc = item.desc?.toLowerCase() || '';
            const keywords = Array.isArray(item.keywords) ? item.keywords.join(' ').toLowerCase() : '';
            return name.includes(searchKw) || desc.includes(searchKw) || keywords.includes(searchKw);
        })
    }

    if (!filterArr.length) {
        wrap.innerHTML = `<div style="text-align:center;color:#68707c;padding:40px">没有匹配的英雄牌</div>`;
        return;
    }

    wrap.innerHTML = filterArr.map(item => `
    <div class="hero-card-item" data-id="${item.id}">
        <div class="hero-card-cover">
            <img src="${item.img}" alt="${item.name}">
        </div>
    </div>
    `).join('');

    bindHeroCardClick();
}

function bindHeroCardClick() {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');
    if (!modal || !modalBody) return;

    document.querySelectorAll('.hero-card-item').forEach(card => {
        card.onclick = () => {
            const id = Number(card.dataset.id);
            const find = allHeroCardData.find(x => x.id === id);
            if (!find) return;

            let equipHtml = '';
            if (Array.isArray(find.equipList)) {
                equipHtml = find.equipList.map(eId => `
                    <div class="item-card" onclick="openItemModal('${eId}')">
                        <img src="images/equip/${eId}.png" alt="">
                        <div class="item-name">装备${eId}</div>
                    </div>
                `).join('');
            }
            let teamHtml = '';
            if (Array.isArray(find.teamList)) {
                teamHtml = find.teamList.map(tId => `
                    <div class="item-card" onclick="openTeamModal('${tId}')">
                        <img src="images/team/${tId}.png" alt="">
                        <div class="item-name">阵容${tId}</div>
                    </div>
                `).join('');
            }

            modalBody.innerHTML = `
<!-- 弹窗头部：英雄图标 + 标签 -->
<div class="hero-header-bar">
    <div class="hero-icon-wrap">
        <img class="hero-main-icon" src="${find.skillImg}" alt="${find.name}">
        <div class="hero-name-title">
            <div class="hero-name-large">${find.name}</div>
            <div class="hero-subtitle">英雄牌</div>
        </div>
    </div>

    <div class="hero-tags-top">
        <span class="tag-camp">${find.camp}</span>
        <span class="tag-stage tag-stage-${find.stage}">${find.stage}阶</span>
        <span class="tag-small">${find.tag}</span>
    </div>
</div>

<div class="card-compare-row">
    <div class="card-compare-item">
        <img class="compare-card-img" src="${find.img}" alt="${find.name}">
        <div class="compare-label">普通效果</div>
        <div class="awaken-desc-text">${find.desc}</div>
    </div>
    <div class="card-compare-item">
        <img class="compare-card-img" src="${find.awakeningImg}" alt="觉醒${find.name}">
        <div class="compare-label">觉醒效果</div>
        <div class="awaken-desc-text">${find.awakeningDesc}</div>
    </div>
</div>

<div class="split-line"></div>

<h4>基础属性</h4>
<div class="attr-grid">
    <div class="attr-item"><div class="attr-label">生命值</div><div class="attr-val">${find.hp}</div></div>
    <div class="attr-item"><div class="attr-label">法力值</div><div class="attr-val">${find.mp} / ${find.mpMax}</div></div>
    <div class="attr-item"><div class="attr-label">物理攻击</div><div class="attr-val">${find.physicalAtk}</div></div>
    <div class="attr-item"><div class="attr-label">法术攻击</div><div class="attr-val">${find.magicAtk}</div></div>
    <div class="attr-item"><div class="attr-label">攻击速度</div><div class="attr-val">${find.atkSpeed}</div></div>

    <div class="attr-item"><div class="attr-label">物理防御</div><div class="attr-val">${find.physicalDef}</div></div>
    <div class="attr-item"><div class="attr-label">法术防御</div><div class="attr-val">${find.magicDef}</div></div>
    <div class="attr-item"><div class="attr-label">暴击率</div><div class="attr-val">${find.critRate}</div></div>
    <div class="attr-item"><div class="attr-label">暴击效果</div><div class="attr-val">${find.critDmg}</div></div>
    <div class="attr-item"><div class="attr-label">攻击距离</div><div class="attr-val">${find.atkRange}</div></div>
</div>

<div class="split-line"></div>

<h4>英雄技能</h4>
<div class="skill-row">
    <img class="skill-icon" src="${find.skillImg}" alt="${find.skillName}">
    <div class="skill-info">
        <div class="skill-name">${find.skillName}</div>
        <div class="skill-text">${find.skillDesc}</div>
        <div class="skill-level">Lv.10 ${find.skillLv10}</div>
        <div class="skill-level">Lv.40 ${find.skillLv40}</div>
        <div class="skill-level">Lv.100 ${find.skillLv100}</div>
    </div>
</div>

<div class="split-line"></div>

<div class="recommend-wrap">
    <div class="recommend-title">适配装备</div>
    <div class="item-grid">
        ${equipHtml}
    </div>
</div>

<div class="split-line"></div>

<div class="recommend-wrap">
    <div class="recommend-title">适配阵容</div>
    <div class="item-grid">
        ${teamHtml}
    </div>
</div>
`;
            modal.style.display = 'flex';
        }
    })

    if (closeModalBtn) {
        closeModalBtn.onclick = () => modal.style.display = 'none';
    }
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    }
}

function openItemModal(id) {
    console.log("打开装备，id：", id);
    itemModal.style.display = "flex";
}
function openTeamModal(id) {
    console.log("打开阵容，id：", id);
    teamModal.style.display = "flex";
}
