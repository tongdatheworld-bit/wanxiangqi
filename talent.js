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
        effectType: "资源类天赋",
        camp: "通用",
        img: "lichengbei.png",
        desc: "棋手到达5级时，获得6能量、1张装备箱。",
        source: "棋手升级时概率选择获取天赋。",
        relatedProduct: {name:"无", url:null},
        fitHero: {name:"无", url:null},
        fitPlayer: {name:"无", url:null},
        fitTeam: {name:"无", url:null}
    },
    {
        id: 2,
        name: "整装待发",
        rank: "铜天赋",
        effectType: "资源类天赋",
        camp: "通用",
        img: "zhengzhuangdaifa.png",
        desc: "若回合内没有打出英雄牌，下回合开始时，获得2能量。",
        source: "棋手升级时概率选择获取天赋。",
        relatedProduct: {name:"无", url:null},
        fitHero: {name:"嬴政", url:"#hero-yingzheng"},
        fitPlayer: {name:"明先生", url:"#player-ming"},
        fitTeam: {name:"明先生雷霆战机", url:"#team-mingleiting"}
    },
    {
        id: 3,
        name: "先苦后甜",
        rank: "铜天赋",
        effectType: "资源类天赋",
        camp: "通用",
        img: "xiankuhoutian.png",
        desc: "选取天赋后，当你输掉2场战斗时，获得6棋手经验。",
        source: "棋手升级时概率选择获取天赋。",
        relatedProduct: {name:"无", url:null},
        fitHero: {name:"无", url:null},
        fitPlayer: {name:"无", url:null},
        fitTeam: {name:"无", url:null}
    },
    {
        id: 4,
        name: "防御领域",
        rank: "铜天赋",
        effectType: "战力类天赋",
        camp: "通用",
        img: "fangyulingyu.png",
        desc: "棋手每次受到的伤害减少2点。",
        source: "棋手升级时概率选择获取天赋。",
        relatedProduct: {name:"无", url:null},
        fitHero: {name:"无", url:null},
        fitPlayer: {name:"无", url:null},
        fitTeam: {name:"无", url:null}
    },
    {
        id: 5,
        name: "三十而立",
        rank: "铜天赋",
        effectType: "资源类天赋",
        camp: "通用",
        img: "sanshierli.png",
        desc: "备战阶段中，英雄总等级到达30级时，获得6棋手经验。",
        source: "棋手升级时概率选择获取天赋。",
        relatedProduct: {name:"无", url:null},
        fitHero: {name:"无", url:null},
        fitPlayer: {name:"无", url:null},
        fitTeam: {name:"无", url:null}
    },
    {
        id: 6,
        name: "双人游",
        rank: "铜天赋",
        effectType: "资源类天赋",
        camp: "通用",
        img: "shuangrenyou.png",
        desc: "随机获得2张2~3阶英雄牌。",
        source: "棋手升级时概率选择获取天赋。",
        relatedProduct: {name:"无", url:null},
        fitHero: {name:"无", url:null},
        fitPlayer: {name:"无", url:null},
        fitTeam: {name:"无", url:null}
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
        const matchBoostType = filterBoostType === "all" || (item.boostType && item.boostType === filterBoostType);
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
    const fullImgPath = `images/talent/${item.img}`;

    const linkNode = (info) => {
        if (!info || !info.name) return "无";
        if (info.url) {
            return `<a href="${info.url}" class="modal-link">${info.name}</a>`;
        } else {
            return info.name;
        }
    };

    talentModalBody.innerHTML = `
        <div class="talent-modal-wrap">
            <div class="modal-left">
                <img class="talent-card-img" src="${fullImgPath}" alt="${item.name}" onerror="this.style.display='none'">
            </div>
            <div class="modal-right">
                <div class="rank-tag ${item.rank === '铜天赋' ? 'copper' : item.rank === '银天赋' ? 'silver' : 'gold'}">
                    ${item.rank}
                </div>
                <h2 class="talent-title">${item.name}</h2>
                <div class="type-tag ${item.effectType.includes('资源') ? 'resource' : 'combat'}">
                    ${item.effectType}
                </div>
                <p class="effect-desc">${item.desc}</p>
                <p class="source-line">来源：${item.source || "未知"}</p>
                <div class="info-row">
                    <span class="label">相关产物：</span>
                    <span>${linkNode(item.relatedProduct)}</span>
                </div>
                <div class="info-row">
                    <span class="label">适配英雄：</span>
                    <span>${linkNode(item.fitHero)}</span>
                </div>
                <div class="info-row">
                    <span class="label">适配棋手：</span>
                    <span>${linkNode(item.fitPlayer)}</span>
                </div>
                <div class="info-row">
                    <span class="label">适配阵容：</span>
                    <span>${linkNode(item.fitTeam)}</span>
                </div>
            </div>
        </div>
    `;
    talentModal.style.display = "block";
}

function closeModal() {
    talentModal.style.display = "none";
}
// 点击遮罩空白关闭
talentModal.onclick = function(e){
    if(e.target === talentModal){
        closeModal();
    }
}
// 绑定事件
talentSearch.oninput = render;
rankFilter.onchange = render;
effectTypeFilter.onchange = render;
campFilter.onchange = render;
boostTypeFilter.onchange = render;

render();
