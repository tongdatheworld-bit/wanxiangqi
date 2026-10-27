// ========== 阵容大全页面逻辑 lineup.html ==========
let lineupData = [];
// 当前筛选状态
const filterState = {
    player: "all",
    rank: "all",
    camp: "all",
    keyword: ""
};

const lineupListDom = document.getElementById("lineupList");
const searchInput = document.getElementById("searchInput");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const resetFilterBtn = document.getElementById("resetFilter");
const filterChips = document.querySelectorAll(".filter-chip");

// 加载 lineup.json
async function loadLineupData() {
    try {
        const res = await fetch("./lineup.json");
        lineupData = await res.json();
        renderLineupList();
    } catch (err) {
        console.error("阵容数据加载失败：", err);
        lineupListDom.innerHTML = "<p style='text-align:center;color:#9aa0b0;padding:30px;'>数据加载失败，请检查 lineup.json 文件路径</p>";
    }
}

// 渲染阵容卡片
function renderLineupList() {
    let arr = [...lineupData];

    // 1. 棋手筛选
    if (filterState.player !== "all") {
        arr = arr.filter(item => item.player === filterState.player);
    }
    // 2. 强度筛选
    if (filterState.rank !== "all") {
        arr = arr.filter(item => item.rank === filterState.rank);
    }
    // 3. 阵营筛选（camp 匹配 ban位数组里面的值）
    if (filterState.camp !== "all") {
        arr = arr.filter(item => item["ban位"].includes(filterState.camp));
    }
    // 4. 搜索关键词
    const kw = filterState.keyword.trim().toLowerCase();
    if (kw) {
        arr = arr.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(kw);
            const heroMatch = item.heroList.some(h => h.name.toLowerCase().includes(kw));
            return nameMatch || heroMatch;
        });
    }

    lineupListDom.innerHTML = "";
    if (arr.length === 0) {
        lineupListDom.innerHTML = "<p style='text-align:center;color:#9aa0b0;padding:30px;'>没有匹配到的阵容</p>";
        return;
    }

    arr.forEach(item => {
        // ban位标签
        const banHtml = item["ban位"].map(b => `<span class="tag">${b}</span>`).join("");
        // 英雄图标行
        const heroHtml = item.heroList.map(h => `
            <div class="mini-hero ${h.isCore ? "core" : ""}">
                <img src="${h.img}" alt="${h.name}" />
            </div>
        `).join("");

        const card = document.createElement("div");
        card.className = "lineup-card";
        card.innerHTML = `
            <div class="lineup-avatar">
                <img src="images/players/${item.player}.png" alt="${item.player}" />
            </div>
            <div class="lineup-rank">${item.rank}</div>
            <div class="lineup-main">
                <div class="lineup-top">
                    <div class="lineup-name">${item.name}</div>
                    ${banHtml}
                </div>
                <div class="lineup-meta">
                    棋手：${item.player} · 成型难度：${item.hard} · 阵容码：${item.lineupCode}
                </div>
                <div class="hero-row">
                    ${heroHtml}
                </div>
            </div>
            <span class="arrow">></span>
        `;
        card.onclick = () => openLineupModal(item);
        lineupListDom.appendChild(card);
    })
}

// 打开详情弹窗
function openLineupModal(item) {
    const banText = item["ban位"].join("、");
    const heroHtml = item.heroList.map(h => `
        <div class="mini-hero ${h.isCore ? "core" : ""}">
            <img src="${h.img}" alt="${h.name}" />
        </div>
    `).join("");
    const equipHtml = item.equip.map(e => `
        <div class="mini-hero">
            <img src="${e.img}" alt="${e.name}" />
        </div>
    `).join("");

    modalBody.innerHTML = `
        <h2>${item.name}</h2>
        <div class="modal-sub">棋手：${item.player}｜强度：${item.rank}｜成型难度：${item.hard}｜阵容码：${item.lineupCode}</div>

        <div class="modal-block">
            <h4>Ban阵营</h4>
            <p>${banText}</p>
        </div>
        <div class="modal-block">
            <h4>英雄组件</h4>
            <div class="hero-row" style="flex-wrap:wrap;">
                ${heroHtml || "<p>暂未录入</p>"}
            </div>
        </div>
        <div class="modal-block">
            <h4>推荐装备</h4>
            <div class="hero-row" style="flex-wrap:wrap;">
                ${equipHtml || "<p>暂未录入</p>"}
            </div>
        </div>
    `;
    detailModal.style.display = "flex";
}

// 关闭弹窗
closeModal.onclick = () => {
    detailModal.style.display = "none";
};
detailModal.onclick = (e) => {
    if (e.target === detailModal) {
        detailModal.style.display = "none";
    }
};

// Chip筛选点击事件
filterChips.forEach(chip => {
    chip.onclick = () => {
        const filterKey = chip.dataset.filter;
        const val = chip.dataset.val;
        // 同组全部取消active
        document.querySelectorAll(`[data-filter="${filterKey}"]`).forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        filterState[filterKey] = val;
        renderLineupList();
    }
})

// 搜索输入
searchInput.oninput = (e) => {
    filterState.keyword = e.target.value;
    renderLineupList();
}

// 重置筛选按钮
resetFilterBtn.onclick = () => {
    filterState.player = "all";
    filterState.rank = "all";
    filterState.camp = "all";
    filterState.keyword = "";
    searchInput.value = "";
    filterChips.forEach(c => c.classList.remove("active"));
    document.querySelector(`[data-filter="player"][data-val="all"]`).classList.add("active");
    document.querySelector(`[data-filter="rank"][data-val="all"]`).classList.add("active");
    document.querySelector(`[data-filter="camp"][data-val="all"]`).classList.add("active");
    renderLineupList();
}

// 页面加载完成后自动执行加载
loadLineupData();
