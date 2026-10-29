const effectList = [
    {
        id: 1,
        name: "惊喜补贴",
        type: "一阶",
        pos: "日落海",
        desc: "获得3次免费刷新。",
        source: "",
        img: "images/effectcard/jingxibutie.png"
    },
    {
        id: 2,
        name: "跳级",
        type: "一阶",
        pos: "日落海",
        desc: "使1名英雄夺取阿科米亚核心至多5级。",
        source: "",
        img: "images/effectcard/tiaoji.png"
    },
    {
        id: 3,
        name: "弦音",
        type: "二阶",
        pos: "河洛",
        desc: "指定1名1-3阶英雄，觉醒进度+1。",
        source: "",
        img: "images/effectcard/xianyin.png"
    },
    {
        id: 4,
        name: "破境之证",
        type: "二阶",
        pos: "日落海",
        desc: "指定1名英雄立即提升20级，之后每回合提升10级。",
        source: "",
        img: "images/effectcard/pojingzhizheng.png"
    },
    {
        id: 5,
        name: "四人同行",
        type: "三阶",
        pos: "逐鹿",
        desc: "",
        source: "",
        img: "images/effectcard/sirentongxing.png"
    }
];

const effectCardList = document.getElementById("effectCardList");
const searchInput = document.getElementById("effectSearchInput");
const effectTierFilter = document.getElementById("effectTierFilter");
const effectCampFilter = document.getElementById("effectCampFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// 通过名字打开弹窗（预留跳转）
function openEffectByName(name){
    const target = effectList.find(e=>e.name === name);
    if(!target) return;
    renderModal(target);
}

// 弹窗渲染【完全对标英雄弹窗头部样式】
function renderModal(item){
    // 品阶tag class映射
    let stageClass = "";
    if(item.type === "一阶") stageClass = "tag-stage-1";
    if(item.type === "二阶") stageClass = "tag-stage-2";
    if(item.type === "三阶") stageClass = "tag-stage-3";
    if(item.type === "四阶") stageClass = "tag-stage-4";
    if(item.type === "五阶") stageClass = "tag-stage-5";
    if(item.type === "六阶") stageClass = "tag-stage-6";

    modalBody.innerHTML = `
    <div class="effect-header-bar">
        <div class="effect-icon-wrap">
            <img class="effect-main-icon" src="${item.img}" alt="${item.name}">
            <div class="effect-name-title">
                <div class="effect-name-large">${item.name}</div>
                <div class="effect-subtitle">效果牌</div>
                <div class="effect-tags-top">
                    <span class="tag-camp">${item.pos}</span>
                    <span class="tag-stage ${stageClass}">${item.type}</span>
                </div>
            </div>
        </div>
        <div class="effect-card-tag">效果</div>
    </div>
    <div class="modal-block">
        <h4>效果描述</h4>
        <p>${item.desc || "暂无描述"}</p>
    </div>
    <div class="modal-block">
        <h4>获取来源</h4>
        <p>${item.source || "暂无"}</p>
    </div>
    `;
    detailModal.style.display = "flex";
}

function render() {
    const kw = searchInput.value.trim().toLowerCase();
    const filterTier = effectTierFilter.value;
    const filterCamp = effectCampFilter.value;
    effectCardList.innerHTML = "";

    effectList.forEach(item => {
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);
        const matchTier = filterTier === "all" || item.type === filterTier;
        const matchCamp = filterCamp === "all" || item.pos === filterCamp;

        if (!(matchKw && matchTier && matchCamp)) return;

        const div = document.createElement("div");
        div.className = "effect-card-item";

        // 只保留图片，删除卡片下方文字
        div.innerHTML = `
            <div class="effect-card-cover">
                <img src="${item.img}" alt="${item.name}">
            </div>
        `;

        div.onclick = () => renderModal(item);
        effectCardList.appendChild(div);
    });
}

closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
    if (e.target === detailModal) detailModal.style.display = "none";
};

searchInput.addEventListener("input", render);
effectTierFilter.addEventListener("change", render);
effectCampFilter.addEventListener("change", render);

render();
