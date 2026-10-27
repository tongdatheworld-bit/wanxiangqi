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

// 阵容页面渲染，完全对齐你的表格所有列
function renderLineupList() {
    const list = document.getElementById("lineup-list");
    if (!list) return;
    if (!window.gameData || !window.gameData.lineups) {
        list.innerHTML = '<p class="empty-tip">暂无阵容数据，请检查 data.json 是否加载。</p>';
        return;
    }
    list.innerHTML = "";
    gameData.lineups.forEach(function (lineup) {
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

// 加载 json
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
