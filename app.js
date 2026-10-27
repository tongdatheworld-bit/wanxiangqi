document.addEventListener("DOMContentLoaded", function () {
    initNavActive();
    renderCurrentPage();
});

function initNavActive() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a").forEach(function (link) {
        link.classList.remove("active");
        const href = link.getAttribute("href") || "";
        if (href === "./" + path || href === path) {
            link.classList.add("active");
        }
    });
}

function renderCurrentPage() {
    const path = location.pathname.split("/").pop() || "index.html";
    if (path === "hero.html") {
        renderHeroList();
    } else if (path === "lineup.html") {
        renderLineupList();
    }
}

// 英雄页面渲染
function renderHeroList() {
    const list = document.getElementById("hero-list");
    if (!list) return;
    if (!window.gameData || !window.gameData.heroes) {
        list.innerHTML = '<p class="empty-tip">暂无英雄数据，请检查 data.json 是否加载。</p>';
        return;
    }
    list.innerHTML = "";
    gameData.heroes.forEach(function (hero) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${hero.name || "未知英雄"}</h4>
            <p>阵营：${hero.faction || "-"}</p>
            <p>技能：${hero.skill || "-"}</p>
        `;
        list.appendChild(card);
    });
}

// 阵容页面：棋手 + 强度 双筛选
function renderLineupList() {
    const list = document.getElementById("lineup-list");
    const playerSelect = document.getElementById("playerFilter");
    const levelSelect = document.getElementById("levelFilter");
    const countDom = document.getElementById("resultCount");
    if (!list || !playerSelect || !levelSelect) return;

    if (!window.gameData || !window.gameData.lineups) {
        list.innerHTML = '<p class="empty-tip">暂无阵容数据，请检查 data.json 是否加载。</p>';
        return;
    }

    // 自动收集所有棋手、去重填充下拉
    const playerSet = new Set();
    gameData.lineups.forEach(item => {
        if (item.player) playerSet.add(item.player);
    });
    playerSelect.innerHTML = `<option value="">全部棋手</option>`;
    playerSet.forEach(p => {
        playerSelect.innerHTML += `<option value="${p}">${p}</option>`;
    });

    // 渲染卡片函数，两个条件叠加过滤
    function renderCards(filterPlayer, filterLevel) {
        list.innerHTML = "";
        let arr = gameData.lineups;
        if (filterPlayer) {
            arr = arr.filter(x => x.player === filterPlayer);
        }
        if (filterLevel) {
            arr = arr.filter(x => x.level === filterLevel);
        }
        countDom.innerText = `共 ${arr.length} 套阵容`;
        arr.forEach(function (lineup) {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h4>${lineup.name || "未知阵容"}</h4>
                <p>阵容强度：${lineup.level || "-"}</p>
                <p>棋手：${lineup.player || "-"}</p>
                <p>成型难度：${lineup.hard || "-"}</p>
                <p>阵容码：${lineup.code || "-"}</p>
                <p>联动天赋：${lineup.talent || "-"}</p>
                <p>禁图：${lineup.ban || "-"}</p>
                ${lineup.url ? `<p><a href="${lineup.url}" target="_blank">查看详情</a></p>` : ""}
            `;
            list.appendChild(card);
        });
    }

    // 初始渲染全部
    renderCards("", "");

    // 切换筛选触发重渲染
    function onChange() {
        renderCards(playerSelect.value, levelSelect.value);
    }
    playerSelect.onchange = onChange;
    levelSelect.onchange = onChange;
}

fetch("./data.json")
    .then(res => {
        if (!res.ok) throw new Error("json加载失败");
        return res.json();
    })
    .then(data => {
        window.gameData = data;
        renderCurrentPage();
    })
    .catch(err => {
        console.error("data.json 读取错误：", err);
    })
