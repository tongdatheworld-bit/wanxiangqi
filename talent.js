// 天赋数据数组，在这里填你的天赋
const talentList = [
    {
        name: "示例天赋",
        tier: "1",
        img: "talent-demo.png",
        desc: "这里填写天赋效果描述文本",
    }
];

const talentCardList = document.getElementById("talentCardList");
const talentSearch = document.getElementById("talentSearch");
const talentTierFilter = document.getElementById("talentTierFilter");
const talentModal = document.getElementById("talentModal");
const talentModalBody = document.getElementById("talentModalBody");

// 渲染列表
function render() {
    const kw = talentSearch.value.trim().toLowerCase();
    const filterTier = talentTierFilter.value;
    talentCardList.innerHTML = "";

    talentList.forEach(item => {
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);
        const matchTier = filterTier === "all" || item.tier === filterTier;
        if (!(matchKw && matchTier)) return;

        const div = document.createElement("div");
        div.className = "effect-card-item";
        div.innerHTML = `
            <div class="effect-card-cover">
                <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
            </div>
        `;
        div.onclick = () => openModal(item);
        talentCardList.appendChild(div);
    })
}

// 打开弹窗
function openModal(item) {
    const tierClass = `tag-stage-${item.tier}`;
    const tierText = {1:"一阶",2:"二阶",3:"三阶"}[item.tier];
    talentModalBody.innerHTML = `
        <div class="effect-header-bar">
            <div class="effect-icon-wrap">
                <img class="effect-main-icon" src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
                <div class="effect-name-title">
                    <div class="effect-name-large">${item.name}</div>
                    <div class="effect-tags-top">
                        <span class="tag-stage ${tierClass}">${tierText}</span>
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
// 点击遮罩关闭
talentModal.onclick = (e) => {
    if(e.target === talentModal) closeModal();
}
// 搜索、筛选变更刷新
talentSearch.oninput = render;
talentTierFilter.onchange = render;

render();
