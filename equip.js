const equipList = [
    {
        id:1,
        name:"风暴巨剑",
        type:"基础装备",
        pos:"物理装备",
        smallImg:"images/equip/fengbaojujian.png",
        img:"images/equip/fengbaojujian.png",
        desc:"穿戴给英雄，可以铸造成1件输出型普通装备。",
        source:"该卡通过商店购买、效果锦囊、拍卖等渠道获得。",
        combine:[
            {name:"纯净苍穹",desc:"唯一。每2秒获得10点法术攻击力，同时清除自身负面状态。",smallImg:"images/equip/chunjingcangqiong.png"},
            {name:"铸梦·逐风",desc:"唯一。战斗开始及之后每过8秒，快速进行4次普通攻击。",smallImg:"images/equip/zhumengzhufeng.png"},
            {name:"无尽巨剑",desc:"暴击率+30%，暴击效果+60%。暴击效果不可叠加。",smallImg:"images/equip/wujinjian.png"},
            {name:"制裁之剑",desc:"唯一。造成伤害时降低目标30%生命恢复及护盾效果，持续10秒，不可叠加。若为普通攻击，效果提升至70%。",smallImg:"images/equip/zhicaijian.png"}
        ]
    }
];

const equipCardList = document.getElementById("equipCardList");
const searchInput = document.getElementById("searchInput");
const equipTypeFilter = document.getElementById("equipTypeFilter");
const equipPosFilter = document.getElementById("equipPosFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function renderList() {
    const searchVal = searchInput.value.trim().toLowerCase();
    const typeVal = equipTypeFilter.value;
    const posVal = equipPosFilter.value;

    const filtered = equipList.filter(item => {
        const matchSearch = !searchVal ||
            item.name.toLowerCase().includes(searchVal) ||
            item.desc.toLowerCase().includes(searchVal) ||
            item.source.toLowerCase().includes(searchVal);
        const matchType = typeVal === "all" || item.type === typeVal;
        const matchPos = posVal === "all" || item.pos === posVal;
        return matchSearch && matchType && matchPos;
    });

    equipCardList.innerHTML = "";
    filtered.forEach(equip => {
        const card = document.createElement("div");
        // 和英雄卡片class对齐！
        card.className = "equip-card-item";
        card.innerHTML = `
            <div class="equip-card-cover">
                <img src="${equip.smallImg}" alt="${equip.name}">
            </div>
        `;
        card.onclick = () => {
            let combineHtml = "";
            equip.combine.forEach(ce => {
                combineHtml += `
                <div class="skill-row">
                    <img class="skill-icon" src="${ce.smallImg}" alt="${ce.name}">
                    <div>
                        <div class="skill-name">${ce.name}</div>
                        <div class="skill-text">${ce.desc}</div>
                    </div>
                </div>
                `
            })

            modalBody.innerHTML = `
                <div class="hero-header-bar">
                    <div class="hero-icon-wrap">
                        <img class="hero-main-icon" src="${equip.img}" alt="${equip.name}">
                        <div class="hero-name-title">
                            <div class="hero-name-large">${equip.name}</div>
                            <div class="hero-tags-top">
                                <span class="tag-camp">${equip.type}</span>
                                <span class="tag-camp">${equip.pos}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-block">
                    <p>${equip.desc}</p>
                </div>
                <div class="modal-block">
                    <h4>来源</h4>
                    <p>${equip.source}</p>
                </div>

                <div class="split-line"></div>

                <h4>可铸造成装</h4>
                ${combineHtml}
            `;
            detailModal.style.display = "flex";
        };
        equipCardList.appendChild(card);
    });
}

closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
    if (e.target === detailModal) detailModal.style.display = "none";
};

searchInput.addEventListener("input", renderList);
equipTypeFilter.addEventListener("change", renderList);
equipPosFilter.addEventListener("change", renderList);

renderList();
