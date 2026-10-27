let allHeroCardData = [];
let currentStage = 'all';
let currentCamp = 'all';
let currentKeyword = 'all';
let searchKw = '';

document.addEventListener('DOMContentLoaded', function () {
    const heroCardWrap = document.getElementById('heroCardList');
    if (!heroCardWrap) return;

    fetch('./hero-card.json')
        .then(res => {
            if (!res.ok) throw new Error('json读取失败');
            return res.json();
        })
        .then(data => {
            allHeroCardData = data;
            renderHeroCardList();
        })
        .catch(err => {
            console.error('数据加载失败：', err);
            heroCardWrap.innerHTML = `<div style="text-align:center;color:red;padding:40px">数据加载失败，请检查 hero-card.json</div>`;
        });

    document.getElementById('stageFilter').addEventListener('change', e => {
        currentStage = e.target.value;
        renderHeroCardList();
    });

    document.getElementById('campFilter').addEventListener('change', e => {
        currentCamp = e.target.value;
        renderHeroCardList();
    });

    document.getElementById('keywordFilter').addEventListener('change', e => {
        currentKeyword = e.target.value;
        renderHeroCardList();
    });

    document.getElementById('searchInput').addEventListener('input', e => {
        searchKw = e.target.value.trim().toLowerCase();
        renderHeroCardList();
    });
});

function renderHeroCardList() {
    const wrap = document.getElementById('heroCardList');
    if (!wrap) return;
    let filterArr = [...allHeroCardData];

    if (currentStage !== 'all') {
        filterArr = filterArr.filter(item => item.stage == currentStage);
    }
    if (currentCamp !== 'all') {
        filterArr = filterArr.filter(item => item.camp === currentCamp);
    }
    if (currentKeyword !== 'all') {
        filterArr = filterArr.filter(item =>
            Array.isArray(item.keywords) && item.keywords.includes(currentKeyword)
        );
    }
    if (searchKw) {
        filterArr = filterArr.filter(item => {
            const name = item.name?.toLowerCase() || '';
            const desc = item.desc?.toLowerCase() || '';
            const keywords = Array.isArray(item.keywords) ? item.keywords.join(' ').toLowerCase() : '';
            return name.includes(searchKw) || desc.includes(searchKw) || keywords.includes(searchKw);
        })
    }

    if (!filterArr.length) {
        wrap.innerHTML = `<div style="text-align:center;color:#686e7c;padding:40px">没有匹配的英雄牌</div>`;
        return;
    }

    wrap.innerHTML = filterArr.map(item => `
        <div class="hero-card-item" data-id="${item.id}">
            <div class="hero-card-cover">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="hero-card-body">
                <div class="hero-card-name">${item.name}</div>
                <div class="hero-card-meta">
                    <span>${item.stage}阶</span>
                    <span>${item.camp}</span>
                </div>
                <div class="hero-card-desc">${item.desc}</div>
            </div>
        </div>
    `).join('');

    bindHeroCardClick();
}

function bindHeroCardClick() {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');
    if (!modal || !modalBody) return;

    document.querySelectorAll('.hero-card-item').forEach(card => {
        card.onclick = () => {
            const id = Number(card.dataset.id);
            const find = allHeroCardData.find(x => x.id === id);
            if (!find) return;

            modalBody.innerHTML = `
                <h2>${find.name}</h2>
                <div class="modal-sub">${find.stage}阶 · ${find.camp}</div>
                <div class="modal-block">
                    <h4>登场描述</h4>
                    <p>${find.desc}</p>
                </div>
                <div class="modal-block">
                    <h4>基础属性</h4>
                    <p>生命值：${find.hp || 0}</p>
                    <p>法力值：${find.mp || 0}</p>
                    <p>物理攻击：${find.physicalAtk || 0}</p>
                    <p>法术攻击：${find.magicAtk || 0}</p>
                </div>
                <div class="modal-block">
                    <h4>关键词</h4>
                    <p>${Array.isArray(find.keywords) ? find.keywords.join('、') : '无'}</p>
                </div>
            `;
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
