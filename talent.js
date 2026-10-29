// 字段说明
// rank: copper铜天赋 / silver银天赋 / gold金天赋
// effectType: resource资源类 / combat战力类
// camp: sand三分之地 / river大河流域 / sunset日落海 / heluo河洛 / battle逐鹿 / none无阵营
// boostType: link联动强化天赋 / single单体英雄强化天赋 / equip天赋装备
// img：只填文件名，代码自动拼接前缀 images/talent/
const talentList = [
    {
        id: 1,
        name: "里程碑",
        rank: "铜天赋",
        effectType: "资源类",
        camp: "通用",
        img: "images/talent/lichengbei.png",
        desc: "棋手到达5级时，获得6能量、1张装备箱。"
    },
    {
        id: 2,
        name: "整装待发",
        rank: "铜天赋",
        effectType: "资源类",
        camp: "通用",
        img: "images/talent/zhengzhuangdaifa.png",
        desc: "若回合内没有打出英雄牌，下回合开始时，获得2能量。"
    },
    {
        id: 3,
        name: "先苦后甜",
        rank: "铜天赋",
        effectType: "资源类",
        camp: "通用",
        img: "images/talent/xiankuhoutian.png",
        desc: "选取天赋后，当你输掉2场战斗时，获得6棋手经验。"
    },
    {
        id: 4,
        name: "防御领域",
        rank: "铜天赋",
        effectType: "战力类",
        camp: "通用",
        img: "images/talent/fangyulingyu.png",
        desc: "棋手每次受到的伤害减少2点。"
    },
    {
        id: 5,
        name: "三十而立",
        rank: "铜天赋",
        effectType: "资源类",
        camp: "通用",
        img: "images/talent/sanshierli.png",
        desc: "备战阶段中，英雄总等级到达30级时，获得6棋手经验。"
    },
    {
        id: 6,
        name: "双人游",
        rank: "铜天赋",
        effectType: "资源类",
        camp: "通用",
        img: "images/talent/shuangrenyou.png",
        desc: "随机获得2张2~3阶英雄牌。"
    }
];

const talentCardList = document.getElementById("talentCardList");
const talentSearch = document.getElementById("talentSearch");
const rankFilter = document.getElementById("rankFilter");
const effectTypeFilter = document.getElementById("effectTypeFilter");
const campFilter = document.getElementById("campFilter");
const boostTypeFilter = document.getElementById("boostTypeFilter");
const talentModal = document.getElementById("talentModal");
const talentModalBody = document.getElementById("talentModalBody");

// 渲染列表
function render() {
    const kw = talentSearch.value.trim().toLowerCase();
    const filterRank = rankFilter.value;
    const filterEffectType = effectTypeFilter.value;
    const filterCamp = campFilter.value;
    const filterBoostType = boostTypeFilter.value;

    talentCardList.innerHTML = "";

    talentList.forEach(item => {
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);
        const matchRank = filterRank === "all" || item.rank === filterRank;
        const matchEffectType = filterEffectType === "all" || item.effectType === filterEffectType;
        const matchCamp = filterCamp === "all" || item.camp === filterCamp;
        const matchBoostType = filterBoostType === "all" || item.boostType === filterBoostType;

        if (!(matchKw && matchRank && matchEffectType && matchCamp && matchBoostType)) return;

        const div = document.createElement("div");
        div.className = "effect-card-item";
        // 拼接完整图片路径
        const fullImgPath = `images/talent/${item.img}`;
        div.innerHTML = `
            <div class="effect-card-cover">
                <img src="${fullImgPath}" alt="${item.name}" onerror="this.style.display='none'">
            </div>
        `;
        div.onclick = () => openModal(item);
        talentCardList.appendChild(div);
    })
}

// 弹窗打开
function openModal(item) {
    const rankTextMap = {
        copper: "铜天赋",
        silver: "银天赋",
        gold: "金天赋"
    };
    const effectTypeTextMap = {
        resource: "资源类",
        combat: "战力类"
    };
    const campTextMap = {
        sand: "三分之地",
        river: "大河流域",
        sunset: "日落海",
        heluo: "河洛",
        battle: "逐鹿",
        none: "无阵营"
    };
    const boostTypeTextMap = {
        link: "联动强化天赋",
        single: "单体英雄强化天赋",
        equip: "天赋装备"
    };

    const rankText = rankTextMap[item.rank];
    const effectTypeText = effectTypeTextMap[item.effectType];
    const campText = campTextMap[item.camp];
    const boostTypeText = boostTypeTextMap[item.boostType];
    const fullImgPath = `images/talent/${item.img}`;

    talentModalBody.innerHTML = `
        <div class="effect-header-bar">
            <div class="effect-icon-wrap">
                <img class="effect-main-icon" src="${fullImgPath}" alt="${item.name}" onerror="this.style.display='none'">
                <div class="effect-name-title">
                    <div class="effect-name-large">${item.name}</div>
                    <div class="effect-tags-top">
                        <span class="tag-rank ${item.rank}">${rankText}</span>
                        <span class="tag-normal">${effectTypeText}</span>
                        <span class="tag-normal">${campText}</span>
                        <span class="tag-normal">${boostTypeText}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-block">
            <p>${item.desc}</p>
        </div>
    `
    talentModal.style.display = "flex";
}

// 关闭弹窗
function closeModal() {
    talentModal.style.display = "none";
}
talentModal.onclick = (e) => {
    if(e.target === talentModal) closeModal();
}
// 绑定事件
talentSearch.oninput = render;
rankFilter.onchange = render;
effectTypeFilter.onchange = render;
campFilter.onchange = render;
boostTypeFilter.onchange = render;

render();
