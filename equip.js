// 装备数据源，先4个样例
const equipList = [
  {
    name: "基础长剑",
    type: "基础装备",
    desc: "+10攻击力",
    keyword: ["攻击"],
    detail: "最基础的武器，简单直接提升攻击力，是合成高级装备的素材。"
  },
  {
    name: "铁甲盾",
    type: "普通装备",
    desc: "+15护甲",
    keyword: ["防御"],
    detail: "厚实铁甲打造的盾牌，装备后提升生存能力。"
  },
  {
    name: "吸血圣杯",
    type: "特殊装备",
    desc: "造成伤害时，回复伤害20%的血量",
    keyword: ["续航"],
    detail: "独特的吸血特效装备，适合持续输出的英雄。"
  },
  {
    name: "觉醒宝珠",
    type: "天赋装备",
    desc: "登场：本英雄获得额外1级临时等级",
    keyword: ["特效"],
    detail: "天赋专属装备，拥有特殊登场效果，联动英雄天赋机制。"
  }
];

// DOM
const equipCardList = document.getElementById("equipCardList");
const searchInput = document.getElementById("searchInput");
const equipTypeFilter = document.getElementById("equipTypeFilter");
const keywordFilter = document.getElementById("keywordFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// 渲染卡片
function renderList() {
  const searchVal = searchInput.value.trim().toLowerCase();
  const typeVal = equipTypeFilter.value;
  const keywordVal = keywordFilter.value;

  let filtered = equipList.filter(item => {
    const matchSearch = !searchVal || 
      item.name.toLowerCase().includes(searchVal) || 
      item.desc.toLowerCase().includes(searchVal) ||
      item.detail.toLowerCase().includes(searchVal);
    const matchType = typeVal === "all" || item.type === typeVal;
    const matchKey = keywordVal === "all" || item.keyword.includes(keywordVal);
    return matchSearch && matchType && matchKey;
  });

  equipCardList.innerHTML = "";
  filtered.forEach(equip => {
    const card = document.createElement("div");
    card.className = "equip-card";
    card.innerHTML = `
      <div class="equip-type-tag">${equip.type}</div>
      <h3 class="equip-name">${equip.name}</h3>
      <div class="equip-desc">${equip.desc}</div>
    `;
    card.onclick = () => {
      modalBody.innerHTML = `
        <h2>${equip.name}</h2>
        <div class="modal-type">类型：${equip.type}</div>
        <div class="modal-desc">效果：${equip.desc}</div>
        <div class="modal-detail">${equip.detail}</div>
      `;
      detailModal.style.display = "block";
    };
    equipCardList.appendChild(card);
  });
}

// 关闭弹窗
closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === detailModal) detailModal.style.display = "none";
};

// 绑定筛选事件
searchInput.addEventListener("input", renderList);
equipTypeFilter.addEventListener("change", renderList);
keywordFilter.addEventListener("change", renderList);

// 初始化渲染
renderList();
// 装备数据源，先4个样例
const equipList = [
  {
    name: "基础长剑",
    type: "基础装备",
    desc: "+10攻击力",
    keyword: ["攻击"],
    detail: "最基础的武器，简单直接提升攻击力，是合成高级装备的素材。"
  },
  {
    name: "铁甲盾",
    type: "普通装备",
    desc: "+15护甲",
    keyword: ["防御"],
    detail: "厚实铁甲打造的盾牌，装备后提升生存能力。"
  },
  {
    name: "吸血圣杯",
    type: "特殊装备",
    desc: "造成伤害时，回复伤害20%的血量",
    keyword: ["续航"],
    detail: "独特的吸血特效装备，适合持续输出的英雄。"
  },
  {
    name: "觉醒宝珠",
    type: "天赋装备",
    desc: "登场：本英雄获得额外1级临时等级",
    keyword: ["特效"],
    detail: "天赋专属装备，拥有特殊登场效果，联动英雄天赋机制。"
  }
];

// DOM
const equipCardList = document.getElementById("equipCardList");
const searchInput = document.getElementById("searchInput");
const equipTypeFilter = document.getElementById("equipTypeFilter");
const keywordFilter = document.getElementById("keywordFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// 渲染卡片
function renderList() {
  const searchVal = searchInput.value.trim().toLowerCase();
  const typeVal = equipTypeFilter.value;
  const keywordVal = keywordFilter.value;

  let filtered = equipList.filter(item => {
    const matchSearch = !searchVal || 
      item.name.toLowerCase().includes(searchVal) || 
      item.desc.toLowerCase().includes(searchVal) ||
      item.detail.toLowerCase().includes(searchVal);
    const matchType = typeVal === "all" || item.type === typeVal;
    const matchKey = keywordVal === "all" || item.keyword.includes(keywordVal);
    return matchSearch && matchType && matchKey;
  });

  equipCardList.innerHTML = "";
  filtered.forEach(equip => {
    const card = document.createElement("div");
    card.className = "equip-card";
    card.innerHTML = `
      <div class="equip-type-tag">${equip.type}</div>
      <h3 class="equip-name">${equip.name}</h3>
      <div class="equip-desc">${equip.desc}</div>
    `;
    card.onclick = () => {
      modalBody.innerHTML = `
        <h2>${equip.name}</h2>
        <div class="modal-type">类型：${equip.type}</div>
        <div class="modal-desc">效果：${equip.desc}</div>
        <div class="modal-detail">${equip.detail}</div>
      `;
      detailModal.style.display = "block";
    };
    equipCardList.appendChild(card);
  });
}

// 关闭弹窗
closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === detailModal) detailModal.style.display = "none";
};

// 绑定筛选事件
searchInput.addEventListener("input", renderList);
equipTypeFilter.addEventListener("change", renderList);
keywordFilter.addEventListener("change", renderList);

// 初始化渲染
renderList();
