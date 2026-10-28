const equipList = [
    {
        id: 1,
        name: "风暴巨剑",
        type: "基础装备",
        pos: "物理装备",
        desc: "穿戴给英雄，可以铸造成1件输出型普通装备。",
        source: "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
        img: "images/equip/fengbaojujian.png",
        castList: [
            {
                name: "纯净苍穹",
                effect: "唯一。每2秒获得10点法术攻击力，同时清除自身负面状态。",
                icon: "images/equip/equipsmall/chunjingcangqiong.png"
            },
            {
                name: "铸梦·逐风",
                effect: "唯一。战斗开始及之后每过8秒，快速进行4次普通攻击。",
                icon: "images/equip/equipsmall/zhumengzhufeng.png"
            },
            {
                name: "无尽巨剑",
                effect: "暴击率+30%，暴击效果+60%。暴击效果不可叠加。",
                icon: "images/equip/equipsmall/wujinjian.png"
            },
            {
                name: "制裁之剑",
                effect: "唯一。造成伤害时降低目标30%生命恢复及护盾效果，持续10秒，不可叠加。若为普通攻击，效果提升至70%。",
                icon: "images/equip/equipsmall/zhicaijian.png"
            }
        ]
    },
    {
        id: 2,
        name: "纯净苍穹",
        type: "普通装备",
        pos: "法术装备",
        desc: "每2秒获得10点法术攻击力，同时清除自身负面状态。",
        source: "由风暴巨剑铸造而成",
        sourceImg: "images/equip/equipsmall/fengbaojujian.png",
        img: "images/equip/chunjingcangqiong.png",
        castList: []
    },
    {
        id: 3,
        name: "铸梦·逐风",
        type: "普通装备",
        pos: "物理装备",
        desc: "战斗开始及之后每过8秒，快速进行4次普通攻击。",
        source: "由风暴巨剑铸造而成",
        sourceImg: "images/equip/equipsmall/fengbaojujian.png",
        img: "images/equip/zhumengzhufeng.png",
        castList: []
    },
    {
        id: 4,
        name: "无尽巨剑",
        type: "普通装备",
        pos: "物理装备",
        desc: "暴击率+30%，暴击效果+60%。暴击效果不可叠加。",
        source: "由风暴巨剑铸造而成",
        sourceImg: "images/equip/equipsmall/fengbaojujian.png",
        img: "images/equip/wujinjujian.png",
        castList: []
    },
    {
        id: 5,
        name: "制裁之剑",
        type: "普通装备",
        pos: "物理装备",
        desc: "造成伤害时降低目标30%生命恢复及护盾效果，持续10秒，不可叠加。若为普通攻击，效果提升至70%。",
        source: "由风暴巨剑铸造而成",
        sourceImg: "images/equip/equipsmall/fengbaojujian.png",
        img: "images/equip/zhicaizhiren.png",
        castList: []
    }
];
const equipCardList = document.getElementById("equipCardList");
const searchInput = document.getElementById("searchInput");
const equipTypeFilter = document.getElementById("equipTypeFilter");
const equipPosFilter = document.getElementById("equipPosFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
function render() {
    const kw = searchInput.value.trim().toLowerCase();
    const filterType = equipTypeFilter.value;
    const filterPos = equipPosFilter.value;
    equipCardList.innerHTML = "";
    equipList.forEach(item => {
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);
        const matchT = filterType === "all" || item.type === filterType;
        const matchP = filterPos === "all" || item.pos === filterPos;
        if (!(matchKw && matchT && matchP)) return;
        const div = document.createElement("div");
        div.className = "equip-card-item";
        // 【修改点1】卡片html改为单行模板，删掉源码换行
        div.innerHTML = `<div class="equip-card-cover"><img src="${item.img}" alt="${item.name}"></div>`;
        div.onclick = () => {
            let castHtml = "";
            if (item.castList.length > 0) {
                item.castList.forEach(c => {
                    // 【修改点2】铸造条目单行
                    castHtml += `<div class="cast-item"><img class="cast-icon" src="${c.icon}" alt=""><div class="cast-text"><span class="cast-name">${c.name}</span><span class="cast-effect">${c.effect}</span></div></div>`;
                });
            } else {
                castHtml = `<div style="color:#888;">该装备无法继续铸造</div>`;
            }
            // 【修改点3】弹窗主体全部压缩单行！！核心解决报错！
            modalBody.innerHTML = `<div class="equip-modal-wrap"><div class="equip-modal-left"><div class="equip-modal-card"><img src="${item.img}" alt="${item.name}"><div class="equip-modal-card-name">${item.name}</div></div></div><div class="equip-modal-right"><h2 class="equip-modal-title">${item.name}<span class="equip-modal-tag">${item.type} · ${item.pos}</span></h2><p class="equip-modal-desc">${item.desc}</p><p class="equip-modal-source">来源：${item.source}</p><hr class="equip-divider"><h3 class="equip-cast-title">可铸造成装</h3><div class="cast-list">${castHtml}</div></div></div>`;
            detailModal.style.display = "flex";
        };
        equipCardList.appendChild(div);
    });
}
closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
    if (e.target === detailModal) detailModal.style.display = "none";
};
searchInput.addEventListener("input", render);
equipTypeFilter.addEventListener("change", render);
equipPosFilter.addEventListener("change", render);
render();
