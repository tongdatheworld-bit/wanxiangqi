// ========== 英雄名单（85个，按阶，以后增删只改这里） ==========
const heroRaw = {
    "1阶": ["干将莫邪", "狂铁", "李元芳", "牛魔", "苏烈", "孙膑", "孙尚香", "曜", "弈星"],
    "2阶": ["百里守约", "百里玄策", "蔡文姬", "曹操", "大乔", "盾山", "公孙离", "鬼谷子", "廉颇", "马可波罗", "蒙恬", "梦奇", "米莱狄", "芈月", "墨子", "沈梦溪", "项羽", "亚连", "虞姬", "赵云"],
    "3阶": ["阿轲", "安琪拉", "白起", "苍", "程咬金", "狄仁杰", "貂蝉", "朵莉亚", "姬小满", "镜", "铠", "老夫子", "刘禅", "马超", "明世隐", "裴擒虎", "少司缘", "西施", "亚瑟", "瑶", "云中君", "张良", "钟馗", "猪八戒"],
    "4阶": ["艾琳", "扁鹊", "大司命", "韩信", "莱西奥", "李白", "李信", "刘邦", "蒙犽", "上官婉儿", "孙悟空", "太乙真人", "小乔", "雅典娜", "嬴政", "甄姬", "诸葛亮", "庄周"],
    "5阶": ["敖隐", "东皇太一", "海诺", "海月", "花木兰", "姜子牙", "鲁班大师", "鲁班七号", "露娜", "吕布", "司空震", "武则天", "杨玉环", "周瑜"]
};

let allHeroCardData = [];
let currentStage = 'all';
let currentCamp = 'all';
let currentKeyword = 'all';
let searchKw = '';

document.addEventListener('DOMContentLoaded', function () {
    // 自动根据名单生成和你样板结构一致的数据
    let idCounter = 1;
    for (const tierName of ["1阶", "2阶", "3阶", "4阶", "5阶"]) {
        const tierNum = parseInt(tierName);
        const heroList = heroRaw[tierName];
        for (const name of heroList) {
            allHeroCardData.push({
                "id": idCounter++,
                "name": name,
                "stage": tierNum,
                "camp": "", // ✅ 阵营这里先空着，后面你逐个补
                "avatarImg": `images/heroes/${name}.png`,
                "img": `images/herocard/${name}.png`,
                "awakeningImg": `images/herocard/awakening/${name}.png`,
                "skillImg": `images/herocard/skills/${name}.png`,
                "desc": "",
                "source": "该卡牌通过商店购买、拍卖等渠道获得",
                "keywords": [],
                "hp": 0,
                "mp": 0,
                "mpMax": 0,
                "physicalAtk": 0,
                "magicAtk": 0,
                "physicalDef": 0,
                "magicDef": 0,
                "atkSpeed": 1.00,
                "critRate": "0%",
                "critDmg": "40%",
                "atkRange": 0,
                "skillName": "",
                "skillDesc": "",
                "skillLv10": "",
                "skillLv40": "",
                "skillLv100": "",
                "awakeningDesc": "",
                "equipList": [],
                "teamList": []
            })
        }
    }

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

// ========== 下面你原来的 renderHeroCardList、bindHeroCardClick 完全原样保留，不用改 ==========
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
        <img class="hero-main-icon" src="${find.avatarImg}" alt="${find.name}">
        <div class="hero-name-title">
            <div class="hero-name-main">
                <span class="hero-name-large">${find.name}</span>
            </div>
            <div class="hero-tags-top">
                <span class="tag-camp">${find.camp}</span>
                <span class="tag-stage tag-stage-${find.stage}">${find.stage}阶</span>
            </div>
        </div>

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

<div class="modal-block">
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
</div>

<div class="split-line"></div>

<div class="modal-block">
    <h4>英雄技能</h4>
    <div class="skill-row">
        <img class="skill-icon" src="${find.skillImg}" alt="${find.skillName}">
        <div class="skill-info">
            <div class="skill-name">${find.skillName}</div>
            <div class="skill-text" style="font-size:18px; line-height:1.6;">${find.skillDesc}</div>
            <div class="skill-level" style="font-size:18px; line-height:1.6;">Lv.10 ${find.skillLv10}</div>
            <div class="skill-level" style="font-size:18px; line-height:1.6;">Lv.40 ${find.skillLv40}</div>
            <div class="skill-level" style="font-size:18px; line-height:1.6;">Lv.100 ${find.skillLv100}</div>
        </div>
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
