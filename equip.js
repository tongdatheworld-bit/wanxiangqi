const equipList = [
    {
        id: 1,
        name: "风暴巨剑",
        tag: "基础装备",
        descSource: "该卡牌通过商店购买、拍卖等渠道获得",
        normalDesc: "穿戴给英雄，可以铸造成1件输出型普通装备。",
        combineList: [
            {
                name: "纯净苍穹",
                desc: "唯一。每2秒获得10点法术攻击力，同时清除自身负面状态。",
                smallImg: "images/equip/chunjingcangqiong.png"
            },
            {
                name: "铸梦·逐风",
                desc: "唯一。战斗开始及之后每过8秒，快速进行4次普通攻击。",
                smallImg: "images/equip/zhumengzhufeng.png"
            },
            {
                name: "无尽巨剑",
                desc: "暴击率+30%，暴击效果+60%。暴击效果不可叠加。",
                smallImg: "images/equip/wujinjian.png"
            },
            {
                name: "制裁之剑",
                desc: "唯一。造成伤害时降低目标30%生命恢复及护盾效果，持续10秒，不可叠加。若为普通攻击，效果提升至70%。",
                smallImg: "images/equip/zhicaijian.png"
            }
        ],
        smallImg: "images/equip/fengbaojujian.png",
        img: "images/equip/fengbaojujian.png"
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
            item.normalDesc.toLowerCase().includes(searchVal);
        const matchType = typeVal === "all" || item.tag === typeVal;
        const matchPos = posVal === "all" || item.tag === posVal;
        return matchSearch && matchType && matchPos;
    });

    equipCardList.innerHTML = "";
    filtered.forEach(equip => {
        const card = document.createElement("div");
        card.className = "equip-card-item";
        card.innerHTML = `
            <div class="equip-card-cover">
                <img src="${equip.smallImg}" alt="${equip.name}">
            </div>
        `;
        card.onclick = function () {
            let combineHtml = "";
            equip.combineList.forEach(cb => {
                combineHtml += `<div class="skill-item">
                    <img class="skill-icon" src="${cb.smallImg}" alt="${cb.name}">
                    <div class="skill-info">
                        <div class="skill-name">${cb.name}</div>
                        <div class="skill-desc">${cb.desc}</div>
                    </div>
                </div>`
            })

            modalBody.innerHTML = `
                <div class="modal-header">
                    <div class="modal-avatar">
                        <img src="${equip.img}" alt="${equip.name}">
                    </div>
                    <div class="modal-title-wrap">
                        <h2>${equip.name}</h2>
                        <div class="modal-sub-text">${equip.descSource}</div>
                        <div class="tag-group">
                            <span class="tag">${equip.tag}</span>
                        </div>
                        <div class="card-label">卡牌详情</div>
                    </div>
                </div>

                <div class="form-block">
                    <div class="form-title">普通形态</div>
                    <div class="form-desc">${equip.normalDesc}</div>
                </div>

                <div class="section-title">可合成装备</div>
                <div class="skill-block">
                    ${combineHtml}
                </div>
            `;
            detailModal.style.display = "flex";
        };
        equipCardList.appendChild(card);
    })
}

closeModal.onclick = function () {
    detailModal.style.display = "none";
};
window.onclick = function (e) {
    if (e.target === detailModal) {
        detailModal.style.display = "none";
    }
};

searchInput.addEventListener("input", renderList);
equipTypeFilter.addEventListener("change", renderList);
equipPosFilter.addEventListener("change", renderList);
renderList();
