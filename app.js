// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", function () {
    initNavActive();
    renderCurrentPage();
});

// 导航栏高亮当前页
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

// 根据当前页面渲染对应内容
function renderCurrentPage() {
    const path = location.pathname.split("/").pop() || "index.html";

    if (path === "hero.html") {
        renderHeroList();
    } else if (path === "lineup.html") {
        renderLineupList();
    }
}

// 渲染英雄列表
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

// 渲染阵容列表
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
            <p>英雄：${lineup.heroes ? lineup.heroes.join("、") : "-"}</p>
            <p>阵容码：${lineup.code || "-"}</p>
        `;
        list.appendChild(card);
    });
}
// 加载 data.json 全局数据
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
