const effectList = [
    // ========== 一阶 ==========
    {
        id: 1,
        name: "吸纳人才",
        type: "一阶",
        pos: "通用",
        desc: "卡牌 4 选 1（英雄牌）。",
        source: "该卡通过效果锦囊等渠道获得。",
        img: "images/effectcard/xiyinrencai.png",
    },
    {
        id: 2,
        name: "1阶英雄兑换券",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/1jieyingxiongduihuanquan.png",
    },
    {
        id: 3,
        name: "研读会",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/yanduhui.png",
    },
    {
        id: 4,
        name: "高级人才",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/gaojirencai.png",
    },
    {
        id: 5,
        name: "援护战术",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/yuanhuzhanshu.png",
    },
    {
        id: 6,
        name: "古币",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/gubi.png",
    },
    {
        id: 7,
        name: "惊喜补贴",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/jingxibutie.png",
    },
    {
        id: 8,
        name: "招兵买马",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/zhaobingmaima.png",
    },
    {
        id: 9,
        name: "1阶英雄",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/1jieyingxiong.png",
    },
    // ========== 二阶 ==========
    {
        id: 10,
        name: "跳级",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/tiaoji.png",
    },
    {
        id: 11,
        name: "图腾仪式",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/tutengyishi.png",
    },
    {
        id: 12,
        name: "2阶英雄",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/2jieyingxiong.png",
    },
    {
        id: 13,
        name: "古币多多",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/gubiduoduo.png",
    },
    {
        id: 14,
        name: "弦音",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/xianyin.png",
    },
    {
        id: 15,
        name: "2阶英雄兑换券",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/2jieyingxiongduihuanquan.png",
    },
    // 修复第16条断裂语法
    {
        id: 16,
        name: "军械库",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/junxieku.png",
    },
    {
        id: 87,
        name: "众星拱月",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/zhongxinggongyue.png",
    },
    {
        id: 88,
        name: "神兵天降",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/shenbingtianjiang.png",
    },
    {
        id: 89,
        name: "呼风唤雨",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/hufenghuanyu.png",
    },
    {
        id: 90,
        name: "破境之证",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/pojingzhizheng.png",
    },
    {
        id: 91,
        name: "天籁琴音",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/tianlaiqinyin.png",
    },
    {
        id: 92,
        name: "绝处逢生",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/juechufengsheng.png",
    },
    {
        id: 93,
        name: "化铁为金",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/huatieweijin.png",
    },
    {
        id: 94,
        name: "超级复印机",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/chaojifuyinji.png",
    },
    {
        id: 95,
        name: "一线生机",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/yixianshengji.png",
    },
    {
        id: 96,
        name: "能量超新星",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/nengliangchaoxinxing.png",
    },
    {
        id: 97,
        name: "扶摇直上",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/fuyaozhishang.png",
    },
    {
        id: 98,
        name: "狂飙三倍速",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/kuangbiaosanbeisu.png",
    },
    {
        id: 99,
        name: "四人同行",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/sirentongxing.png",
    },
    {
        id: 100,
        name: "新生力量",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/xinshenglliang.png",
    },
    {
        id: 101,
        name: "沧海拾遗",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/canghai-shiyi.png",
    },
];
const effectCardList = document.getElementById("effectCardList");
const searchInput = document.getElementById("effectSearchInput");
const effectTierFilter = document.getElementById("effectTierFilter");
const effectCampFilter = document.getElementById("effectCampFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// 通过名字打开弹窗（预留，以后牌之间跳转用）
function openEffectByName(name){
    const target = effectList.find(e=>e.name === name);
    if(!target) return;
    renderModal(target);
}

// 弹窗渲染，样式结构对齐装备弹窗
function renderModal(item){
    let sourceHtml = `<p class="equip-modal-source">来源：${item.source || '暂无'}</p>`;
    modalBody.innerHTML = `
    <div class="equip-modal-wrap">
        <div class="equip-modal-left">
            <div class="equip-modal-card">
                <img src="${item.img}" alt="${item.name}">
                <div class="equip-modal-card-name">${item.name}</div>
            </div>
        </div>
        <div class="equip-modal-right">
            <h2 class="equip-modal-title">${item.name}<span class="equip-modal-tag">${item.type} · ${item.pos}</span></h2>
            <p class="equip-modal-desc">${item.desc || '暂无描述'}</p>
            ${sourceHtml}
        </div>
    </div>`;
    detailModal.style.display = "flex";
}

function render() {
    const kw = searchInput.value.trim().toLowerCase();
    const filterTier = effectTierFilter.value;
    const filterCamp = effectCampFilter.value;
    effectCardList.innerHTML = "";

    effectList.forEach(item => {
        // 搜索：名称、描述
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);
        // 品阶筛选 type
        const matchTier = filterTier === "all" || item.type === filterTier;
        // 阵营筛选 pos
        const matchCamp = filterCamp === "all" || item.pos === filterCamp;

        if (!(matchKw && matchTier && matchCamp)) return;

        const div = document.createElement("div");
        div.className = "equip-card-item";
        div.innerHTML = `<div class="equip-card-cover"><img src="${item.img}" alt="${item.name}"></div>`;
        div.onclick = () => renderModal(item);
        effectCardList.appendChild(div);
    });
}

// 弹窗关闭逻辑，和装备保持一致
closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
    if (e.target === detailModal) detailModal.style.display = "none";
};

// 绑定事件
searchInput.addEventListener("input", render);
effectTierFilter.addEventListener("change", render);
effectCampFilter.addEventListener("change", render);

render();
