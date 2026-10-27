let allLineupData = [];
let currentFilterPlayer = 'all';
let currentFilterRank = 'all';
let currentFilterCamp = 'all';

// 只在阵容列表存在时加载数据
const lineupWrap = document.getElementById('lineupList');
if(lineupWrap){
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        allLineupData = data;
        renderList();
    })
}

function renderList(){
    const wrap = document.getElementById('lineupList');
    if(!wrap) return;
    let filterArr = [...allLineupData];

    // 棋手筛选
    if(currentFilterPlayer !== 'all'){
        filterArr = filterArr.filter(item => item.player === currentFilterPlayer)
    }
    // 强度筛选
    if(currentFilterRank !== 'all'){
        filterArr = filterArr.filter(item => item.rank === currentFilterRank)
    }
    // 阵营筛选
    if(currentFilterCamp !== 'all'){
        filterArr = filterArr.filter(item => item.ban位.includes(currentFilterCamp))
    }

    if (!filterArr.length) {
        wrap.innerHTML = `<div style="text-align:center;color:#686e7c;padding:40px">没有匹配的阵容</div>`
        return
    }

    wrap.innerHTML = filterArr.map(item=>`
    <div class="lineup-card">
        <div class="card-top">
            <div class="lineup-rank">${item.rank}</div>
            <div class="hero-row">
                ${
                    item.heroList && item.heroList.length
                    ? item.heroList.map(h=>`
                        <div class="mini-hero ${h.isCore?'core':''}">
                            <img src="${h.img}" alt="${h.name}">
                        </div>
                    `).join('')
                    : `<span style=" color:#686e7c; font-size:13px;">暂无英雄</span>`
                }
            </div>
        </div>
        <div class="card-bottom">
            <div class="lineup-top">
                <div class="lineup-name">${item.name}</div>
                ${item.ban位.map(tag=>`<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="lineup-meta">
                <span>棋手：${item.player}</span>
                <span>成型难度：${item.hard}</span>
                <span>阵容码：${item.lineupCode}</span>
            </div>
        </div>
    </div>
    `).join('')
}

// 筛选点击事件（只在筛选标签存在时绑定）
const filterChips = document.querySelectorAll('.filter-chip');
if(filterChips.length > 0){
    filterChips.forEach(el=>{
        el.addEventListener('click',()=>{
            const type = el.dataset.filter;
            const val = el.dataset.val;
            // 同组取消active
            el.parentElement.querySelectorAll('.filter-chip').forEach(i=>i.classList.remove('active'))
            el.classList.add('active')
            if(type === 'player') currentFilterPlayer = val
            if(type === 'rank') currentFilterRank = val
            if(type === 'camp') currentFilterCamp = val
            renderList()
        })
    })
}

// 重置按钮，先判断元素是否存在！！
const resetBtn = document.getElementById('resetFilter');
if(resetBtn){
    resetBtn.addEventListener('click',()=>{
        currentFilterPlayer = 'all';
        currentFilterRank = 'all';
        currentFilterCamp = 'all';
        document.querySelectorAll('.filter-chip').forEach(i=>i.classList.remove('active'))
        document.querySelectorAll('.filter-chip[data-val="all"]').forEach(x=>x.classList.add('active'))
        renderList()
    })
}
