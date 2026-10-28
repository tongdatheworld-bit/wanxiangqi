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
        "awakeningDesc": "登场：获得2次免费刷新。"
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
        wrap.innerHTML = `<div style="text-align:center;color:#686e7c;padding:40px">没有匹配的英雄牌</div>`;
        return;
    }

    wrap.innerHTML = filterArr.map(item => `
        <div class="hero-card-item" data-id="${item.id}">
            <div class="hero-card-cover">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="hero-card-body">
                <div class="hero-card-name">${item.name}</div>
                <div class="hero-card-meta">
                    <span>${item.stage}阶</span>
                    <span>${item.camp}</span>
                </div>
                <div class="hero-card-desc">${item.desc}</div>
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

            modalBody.innerHTML = `
            <div class="hero-modal-layout">
                <!-- 左侧卡牌预览 -->
                <div class="modal-card-preview">
                    <img class="modal-hero-img" src="${find.img}" alt="${find.name}">
                    <div class="modal-card-label">${find.stage}阶 · 英雄牌</div>
                </div>
                <!-- 右侧详情 -->
                <div class="modal-info-area">
                    <div class="modal-tag-row">
                        <span class="tag-small">${find.tag}</span>
                        <span class="tag-small">${find.camp}</span>
                    </div>
                    <h2>${find.name}</h2>
                    <p class="modal-hero-desc">${find.desc}</p>
                    <p class="modal-source">来源：${find.source}</p>
                    <div class="keyword-tags">
                        ${find.keywords.map(k=>`<span class="keyword-tag">${k}</span>`).join('')}
                    </div>

                    <div class="split-line"></div>

                    <h4>基础属性</h4>
                    <div class="attr-grid">
                        <div class="attr-item"><div class="attr-label">生命值</div><div class="attr-val">${find.hp}</div></div>
                        <div class="attr-item"><div class="attr-label">法力值</div><div class="attr-val">${find.mp} / ${find.mpMax}</div></div>
                        <div class="attr-item"><div class="attr-label">物理攻击</div><div class="attr-val">${find.physicalAtk}</div></div>

                        <div class="attr-item"><div class="attr-label">法术攻击</div><div class="attr-val">${find.magicAtk}</div></div>
                        <div class="attr-item"><div class="attr-label">物理防御</div><div class="attr-val">${find.physicalDef}</div></div>
                        <div class="attr-item"><div class="attr-label">法术防御</div><div class="attr-val">${find.magicDef}</div></div>

                        <div class="attr-item"><div class="attr-label">攻击速度</div><div class="attr-val">${find.atkSpeed}</div></div>
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

                    <h4>觉醒效果</h4>
                    <div class="awaken-row">
                        <img class="awaken-card-img" src="${find.awakeningImg}" alt="觉醒${find.name}">
                        <div class="awaken-desc">${find.awakeningDesc}</div>
                    </div>
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
