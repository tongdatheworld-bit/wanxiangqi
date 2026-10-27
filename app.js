let allLineupData = [];
let currentFilterPlayer = 'all';
let currentFilterRank = 'all';
let currentFilterCamp = 'all';

const lineupWrap = document.getElementById('lineupList');
if (lineupWrap) {
    fetch('./lineup.json')
        .then(res => {
            if (!res.ok) throw new Error('json读取失败');
            return res.json();
        })
        .then(data => {
            allLineupData = data;
            renderList();
        })
        .catch(err => {
            console.error('数据加载失败：', err);
            lineupWrap.innerHTML = `<div style="text-align:center;color:red;padding:40px">数据加载失败，请检查 lineup.json</div>`;
        })
}

function renderList() {
    const wrap = document.getElementById('lineupList');
    if (!wrap) return;
    let filterArr = [...allLineupData];

    // 棋手筛选
    if (currentFilterPlayer !== 'all') {
        filterArr = filterArr.filter(item => item.player === currentFilterPlayer)
    }
    // 强度筛选
    if (currentFilterRank !== 'all') {
        filterArr = filterArr.filter(item => item.rank === currentFilterRank)
    }
    // BAN阵营筛选，容错判断数组
    if (currentFilterCamp !== 'all') {
        filterArr = filterArr.filter(item => Array.isArray(item["ban位"]) && item["ban位"].includes(currentFilterCamp))
    }

    if (!filterArr.length) {
        wrap.innerHTML = `<div style="text-align:center;color:#686e7c;padding:40px">没有匹配的阵容</div>`
        return
    }

    wrap.innerHTML = filterArr.map(item => `
    <div class="lineup-card" data-id="${item.id}">
        <div class="lineup-avatar">
            <img src="${item.playerImg}" alt="${item.player}">
        </div>
        <div class="lineup-rank">${item.rank}</div>
        <div class="lineup-main">
            <div class="lineup-top">
                <div class="lineup-name">${item.name}</div>
                <span class="ban-first-tag">BAN位</span>
                ${Array.isArray(item["ban位"]) ? item["ban位"].map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
            </div>
            <div class="lineup-meta">
                <span>成型难度：${item.hard}</span>
                <span class="copy-code" onclick="event.stopPropagation();copyCode('${item.lineupCode}')">阵容码：${item.lineupCode}</span>
            </div>
            <div class="hero-row">
                ${
                    item.heroList && Array.isArray(item.heroList) && item.heroList.length
                    ? item.heroList.map(h => `
                        <div class="mini-hero ${h.isCore ? 'core' : ''}">
                            <img src="${h.img}" alt="${h.name}">
                        </div>
                    `).join('')
                    : `<span style=" color:#686e7c; font-size:13px;">暂无英雄</span>`
                }
            </div>
        </div>
    </div>
    `).join('')

    bindCardClick();
}

// 卡片点击弹窗
function bindCardClick() {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');
    if (!modal || !modalBody) return;

    document.querySelectorAll('.lineup-card').forEach(card => {
        card.onclick = () => {
            const id = Number(card.dataset.id);
            const find = allLineupData.find(x => x.id === id);
            if (!find) return;

            modalBody.innerHTML = `
                <h2>${find.name}</h2>
                <div class="modal-sub">强度：${find.rank}｜难度：${find.hard}</div>
                <div class="modal-block">
                    <h4>BAN阵营</h4>
                    <p>${Array.isArray(find["ban位"]) ? find["ban位"].join('、') : '无'}</p>
                </div>
                <div class="modal-block">
                    <h4>英雄</h4>
                    <p>${Array.isArray(find.heroList) ? find.heroList.map(h => h.isCore ? `【核】${h.name}` : h.name).join('、') : '无'}</p>
                </div>
                <div class="modal-block">
                    <h4>装备</h4>
                    <p>${Array.isArray(find.equip) && find.equip.length ? find.equip.map(e => e.name).join('、') : '无'}</p>
                </div>
                <div class="modal-block">
                    <h4>阵容码</h4>
                    <p style="font-family:monospace">${find.lineupCode}</p>
                </div>
            `
            modal.style.display = 'flex';
        }
    })

    if (closeModalBtn) {
        closeModalBtn.onclick = () => modal.style.display = 'none';
    }
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    }
}

// 筛选点击事件
const filterChips = document.querySelectorAll('.filter-chip');
if (filterChips.length > 0) {
    filterChips.forEach(el => {
        el.addEventListener('click', () => {
            const type = el.dataset.filter;
            const val = el.dataset.val;
            el.parentElement.querySelectorAll('.filter-chip').forEach(i => i.classList.remove('active'))
            el.classList.add('active')
            if (type === 'player') currentFilterPlayer = val
            if (type === 'rank') currentFilterRank = val
            if (type === 'camp') currentFilterCamp = val
            renderList()
        })
    })
}

// 搜索框
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchKw = e.target.value.trim().toLowerCase();
        renderList();
    })
}

// 复制阵容码函数
async function copyCode(code) {
    try {
        await navigator.clipboard.writeText(code)
        alert("阵容码已复制！")
    } catch (e) {
        alert("复制失败，请手动复制：" + code)
    }
}
