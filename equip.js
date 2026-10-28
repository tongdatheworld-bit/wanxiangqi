// 装备数据源
const equipList = [
    {id:1,name:"大棒",type:"基础装备",pos:"法术装备",smallImg:"images/equip/dabang.png",img:"images/equip/dabang.png",desc:"",source:""},
    {id:2,name:"风暴巨剑",type:"基础装备",pos:"物理装备",smallImg:"images/equip/fengbaojujian.png",img:"images/equip/fengbaojujian.png",desc:"",source:""},
    {id:3,name:"雷鸣刃",type:"基础装备",pos:"物理装备",smallImg:"images/equip/leimingren.png",img:"images/equip/leimingren.png",desc:"",source:""},
    {id:4,name:"力量腰带",type:"基础装备",pos:"防御装备",smallImg:"images/equip/liliangyaodai.png",img:"images/equip/liliangyaodai.png",desc:"",source:""},
    {id:5,name:"破碎圣杯",type:"基础装备",pos:"法术装备",smallImg:"images/equip/posuishengbei.png",img:"images/equip/posuishengbei.png",desc:"",source:""},
    {id:6,name:"圣者法典",type:"基础装备",pos:"法术装备",smallImg:"images/equip/shengzhedianfa.png",img:"images/equip/shengzhedianfa.png",desc:"",source:""},
    {id:7,name:"守护者之铠",type:"基础装备",pos:"防御装备",smallImg:"images/equip/shuhuzhezhikai.png",img:"images/equip/shuhuzhezhikai.png",desc:"",source:""},
    {id:8,name:"速击之枪",type:"基础装备",pos:"物理装备",smallImg:"images/equip/sujizhiqiang.png",img:"images/equip/sujizhiqiang.png",desc:"",source:""},
    {id:9,name:"霸者重铠",type:"普通装备",pos:"防御装备",smallImg:"images/equip/bazhezhongkai.png",img:"images/equip/bazhezhongkai.png",desc:"",source:""},
    {id:10,name:"不死鸟之眼",type:"普通装备",pos:"防御装备",smallImg:"images/equip/businiaozhiyan.png",img:"images/equip/businiaozhiyan.png",desc:"",source:""},
    {id:11,name:"不祥征兆",type:"普通装备",pos:"防御装备",smallImg:"images/equip/buxiangzhengzhao.png",img:"images/equip/buxiangzhengzhao.png",desc:"",source:""},
    {id:12,name:"炽热支配者",type:"普通装备",pos:"法术装备",smallImg:"images/equip/chirezhipeizhe.png",img:"images/equip/chirezhipeizhe.png",desc:"",source:""},
    {id:13,name:"纯净苍穹",type:"普通装备",pos:"物理装备",smallImg:"images/equip/chunjingcangqiong.png",img:"images/equip/chunjingcangqiong.png",desc:"",source:""},
    {id:14,name:"法源之杯",type:"普通装备",pos:"法术装备",smallImg:"images/equip/fayuanzhibei.png",img:"images/equip/fayuanzhibei.png",desc:"",source:""},
    {id:15,name:"反伤重甲",type:"普通装备",pos:"防御装备",smallImg:"images/equip/fanshangzhongjia.png",img:"images/equip/fanshangzhongjia.png",desc:"",source:""},
    {id:16,name:"寒霜侵袭",type:"普通装备",pos:"物理装备",smallImg:"images/equip/hanhanqinxi.png",img:"images/equip/hanhanqinxi.png",desc:"",source:""},
    {id:17,name:"红莲炎甲",type:"普通装备",pos:"防御装备",smallImg:"images/equip/honglianyanjia.png",img:"images/equip/honglianyanjia.png",desc:"",source:""},
    {id:18,name:"红魔",type:"普通装备",pos:"法术装备",smallImg:"images/equip/hongmo.png",img:"images/equip/hongmo.png",desc:"",source:""},
    {id:19,name:"极寒风暴",type:"普通装备",pos:"防御装备",smallImg:"images/equip/jihanfengbao.png",img:"images/equip/jihanfengbao.png",desc:"",source:""},
    {id:20,name:"金色圣剑",type:"普通装备",pos:"法术装备",smallImg:"images/equip/jinseshengjian.png",img:"images/equip/jinseshengjian.png",desc:"",source:""},
    {id:21,name:"近卫荣耀",type:"普通装备",pos:"防御装备",smallImg:"images/equip/jinweirongyao.png",img:"images/equip/jinweirongyao.png",desc:"",source:""},
    {id:22,name:"聚灵水晶",type:"普通装备",pos:"法术装备",smallImg:"images/equip/julingshuijing.png",img:"images/equip/julingshuijing.png",desc:"",source:""},
    {id:23,name:"名刀・司命",type:"普通装备",pos:"物理装备",smallImg:"images/equip/mingdaosiming.png",img:"images/equip/mingdaosiming.png",desc:"",source:""},
    {id:24,name:"冥王",type:"普通装备",pos:"法术装备",smallImg:"images/equip/mingwang.png",img:"images/equip/mingwang.png",desc:"",source:""},
    {id:25,name:"魔律之刃",type:"普通装备",pos:"法术装备",smallImg:"images/equip/molvzhiren.png",img:"images/equip/molvzhiren.png",desc:"",source:""},
    {id:26,name:"魔女斗篷",type:"普通装备",pos:"防御装备",smallImg:"images/equip/monudoupeng.png",img:"images/equip/monudoupeng.png",desc:"",source:""},
    {id:27,name:"凝渊",type:"普通装备",pos:"法术装备",smallImg:"images/equip/ningyuan.png",img:"images/equip/ningyuan.png",desc:"",source:""},
    {id:28,name:"破茧之衣",type:"普通装备",pos:"法术装备",smallImg:"images/equip/pojianzhiyi.png",img:"images/equip/pojianzhiyi.png",desc:"",source:""},
    {id:29,name:"破晓",type:"普通装备",pos:"物理装备",smallImg:"images/equip/poxiao.png",img:"images/equip/poxiao.png",desc:"",source:""},
    {id:30,name:"日渊",type:"普通装备",pos:"物理装备",smallImg:"images/equip/riyuan.png",img:"images/equip/riyuan.png",desc:"",source:""},
    {id:31,name:"生命魔典",type:"普通装备",pos:"法术装备",smallImg:"images/equip/shengmingmodian.png",img:"images/equip/shengmingmodian.png",desc:"",source:""},
    {id:32,name:"痛苦面具",type:"普通装备",pos:"法术装备",smallImg:"images/equip/tongkumianju.png",img:"images/equip/tongkumianju.png",desc:"",source:""},
    {id:33,name:"无尽巨剑",type:"普通装备",pos:"物理装备",smallImg:"images/equip/wujinjujian.png",img:"images/equip/wujinjujian.png",desc:"",source:""},
    {id:34,name:"贤者之书",type:"普通装备",pos:"法术装备",smallImg:"images/equip/xianzhezhishu.png",img:"images/equip/xianzhezhishu.png",desc:"",source:""},
    {id:35,name:"虚无法杖",type:"普通装备",pos:"法术装备",smallImg:"images/equip/xuwufazhang.png",img:"images/equip/xuwufazhang.png",desc:"",source:""},
    {id:36,name:"影牙",type:"普通装备",pos:"物理装备",smallImg:"images/equip/yingya.png",img:"images/equip/yingya.png",desc:"",source:""},
    {id:37,name:"御灵之纱",type:"普通装备",pos:"防御装备",smallImg:"images/equip/yulingzhisha.png",img:"images/equip/yulingzhisha.png",desc:"",source:""},
    {id:38,name:"制裁之剑",type:"普通装备",pos:"物理装备",smallImg:"images/equip/zacaizhijian.png",img:"images/equip/zacaizhijian.png",desc:"",source:""},
    {id:39,name:"铸梦・逐风",type:"普通装备",pos:"物理装备",smallImg:"images/equip/zhumengzhufeng.png",img:"images/equip/zhumengzhufeng.png",desc:"",source:""},
    {id:40,name:"自然法杖",type:"普通装备",pos:"法术装备",smallImg:"images/equip/ziranfazhang.png",img:"images/equip/ziranfazhang.png",desc:"",source:""},
    {id:41,name:"不屈意志",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/buquyizhi.png",img:"images/equip/buquyizhi.png",desc:"",source:""},
    {id:42,name:"断念",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/duannian.png",img:"images/equip/duannian.png",desc:"",source:""},
    {id:43,name:"法潮灵杖",type:"天赋装备",pos:"法术装备",smallImg:"images/equip/fachaolingzhang.png",img:"images/equip/fachaolingzhang.png",desc:"",source:""},
    {id:44,name:"根源之力",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/genyuanzhili.png",img:"images/equip/genyuanzhili.png",desc:"",source:""},
    {id:45,name:"鼓舞之戒",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/guwuzhijie.png",img:"images/equip/guwuzhijie.png",desc:"",source:""},
    {id:46,name:"光辉圣铠",type:"天赋装备",pos:"防御装备",smallImg:"images/equip/guanghuishengkai.png",img:"images/equip/guanghuishengkai.png",desc:"",source:""},
    {id:47,name:"护命灵珠",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/huminglingzhu.png",img:"images/equip/huminglingzhu.png",desc:"",source:""},
    {id:48,name:"魂祭绝刃",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/hunjijueren.png",img:"images/equip/hunjijueren.png",desc:"",source:""},
    {id:49,name:"魂灭灵冠",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/hunmielingguan.png",img:"images/equip/hunmielingguan.png",desc:"",source:""},
    {id:50,name:"灵泉法杖",type:"天赋装备",pos:"法术装备",smallImg:"images/equip/lingquanfazhang.png",img:"images/equip/lingquanfazhang.png",desc:"",source:""},
    {id:51,name:"灵泉项链",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/lingquanxianglian.png",img:"images/equip/lingquanxianglian.png",desc:"",source:""},
    {id:52,name:"梦魇之牙",type:"天赋装备",pos:"法术装备",smallImg:"images/equip/mengyanzhiya.png",img:"images/equip/mengyanzhiya.png",desc:"",source:""},
    {id:53,name:"末世",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/moshi.png",img:"images/equip/moshi.png",desc:"",source:""},
    {id:54,name:"怒神项链",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/nushenxianglian.png",img:"images/equip/nushenxianglian.png",desc:"",source:""},
    {id:55,name:"破妄之刃",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/powangzhiren.png",img:"images/equip/powangzhiren.png",desc:"",source:""},
    {id:56,name:"破阵战芒",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/pozhenzhanmang.png",img:"images/equip/pozhenzhanmang.png",desc:"",source:""},
    {id:57,name:"强敌克星",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/qiangdikexing.png",img:"images/equip/qiangdikexing.png",desc:"",source:""},
    {id:58,name:"三分旗帜",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/sanfenqizhi.png",img:"images/equip/sanfenqizhi.png",desc:"",source:""},
    {id:59,name:"阿科米亚之子",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/akemiyazhizi.png",img:"images/equip/akemiyazhizi.png",desc:"",source:""},
    {id:60,name:"百锻刀",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/baiduandao.png",img:"images/equip/baiduandao.png",desc:"",source:""},
    {id:61,name:"捕能手套",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/bunengshoutao.png",img:"images/equip/bunengshoutao.png",desc:"",source:""},
    {id:62,name:"分身镜",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/fenshenjing.png",img:"images/equip/fenshenjing.png",desc:"",source:""},
    {id:63,name:"机器头",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/jiqitou.png",img:"images/equip/jiqitou.png",desc:"",source:""},
    {id:64,name:"静谧之铃",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/jingmizhiling.png",img:"images/equip/jingmizhiling.png",desc:"",source:""},
    {id:65,name:"聚灵法杖",type:"特殊装备",pos:"法术装备",smallImg:"images/equip/julingfazhang.png",img:"images/equip/julingfazhang.png",desc:"",source:""},
    {id:66,name:"怒莲之刺",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/nulianzhici.png",img:"images/equip/nulianzhici.png",desc:"",source:""},
    {id:67,name:"磐石之心",type:"特殊装备",pos:"防御装备",smallImg:"images/equip/panshizhixin.png",img:"images/equip/panshizhixin.png",desc:"",source:""},
    {id:68,name:"青莲剑谱",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/qinglianjianpu.png",img:"images/equip/qinglianjianpu.png",desc:"",source:""},
    {id:69,name:"驱雷",type:"特殊装备",pos:"法术装备",smallImg:"images/equip/qulei.png",img:"images/equip/qulei.png",desc:"",source:""},
    {id:70,name:"热血拳套",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/rexuequantao.png",img:"images/equip/rexuequantao.png",desc:"",source:""},
    {id:71,name:"盛华",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/shenghua.png",img:"images/equip/shenghua.png",desc:"",source:""},
    {id:72,name:"噬神之书",type:"特殊装备",pos:"法术装备",smallImg:"images/equip/shishenzhishu.png",img:"images/equip/shishenzhishu.png",desc:"",source:""},
    {id:73,name:"套娃枪",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/taowaqiang.png",img:"images/equip/taowaqiang.png",desc:"",source:""},
    {id:74,name:"小鹿的庇护",type:"特殊装备",pos:"防御装备",smallImg:"images/equip/xiaoludebihu.png",img:"images/equip/xiaoludebihu.png",desc:"",source:""},
    {id:75,name:"学识宝石",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/xueshibaoshi.png",img:"images/equip/xueshibaoshi.png",desc:"",source:""},
    {id:76,name:"银莲庇佑",type:"特殊装备",pos:"防御装备",smallImg:"images/equip/yinlianbiyou.png",img:"images/equip/yinlianbiyou.png",desc:"",source:""},
    {id:77,name:"征服之剑",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/zhengfuzhijian.png",img:"images/equip/zhengfuzhijian.png",desc:"",source:""},
];

// DOM
const virtualWrap = document.getElementById('virtualWrap');
const virtualPhantom = document.getElementById('virtualPhantom');
const virtualList = document.getElementById('virtualList');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const posFilter = document.getElementById('posFilter');
const modal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// 虚拟滚动配置
const config = {
    cardHeight: 290,
    buffer: 4,
    rowCount: 4
};
let filterResult = [];
let debounceTimer = null;

// 筛选
function filterData() {
    const kw = searchInput.value.trim().toLowerCase();
    const type = typeFilter.value;
    const pos = posFilter.value;
    filterResult = equipList.filter(item => {
        const matchType = type === 'all' || item.type === type;
        const matchPos = pos === 'all' || item.pos === pos;
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || (item.desc && item.desc.toLowerCase().includes(kw));
        return matchType && matchPos && matchKw;
    })
    renderVirtual();
}

// 网格虚拟渲染核心
function renderVirtual(){
    const wrapTop = virtualWrap.scrollTop;
    const wrapH = virtualWrap.clientHeight;
    const total = filterResult.length;
    if(total === 0){
        virtualPhantom.style.height = '0px';
        virtualList.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#888;padding:60px 0;">没有匹配装备</div>`;
        return;
    }
    const rows = Math.ceil(total / config.rowCount);
    const totalHeight = rows * config.cardHeight;
    virtualPhantom.style.height = totalHeight + 'px';

    let startRow = Math.floor(wrapTop / config.cardHeight) - config.buffer;
    let endRow = Math.ceil((wrapTop + wrapH) / config.cardHeight) + config.buffer;
    startRow = Math.max(0, startRow);
    endRow = Math.min(rows, endRow);

    const startIndex = startRow * config.rowCount;
    const endIndex = Math.min(endRow * config.rowCount, total);
    const showList = filterResult.slice(startIndex, endIndex);

    virtualList.style.transform = `translateY(${startRow * config.cardHeight}px)`;
    const frag = document.createDocumentFragment();
    showList.forEach(item=>{
        const card = document.createElement('div');
        card.className = 'equip-card';
        card.innerHTML = `
            <div class="equip-card__img">
                <img src="${item.smallImg}" alt="${item.name}" loading="lazy">
            </div>
            <div class="equip-card__info">
                <div class="equip-card__name">${item.name}</div>
                <div class="equip-card__tag">
                    <span>${item.type}</span>
                    <span>${item.pos}</span>
                </div>
            </div>
        `;
        card.onclick = ()=>openModal(item);
        frag.appendChild(card);
    })
    virtualList.innerHTML = '';
    virtualList.appendChild(frag);
}

// 弹窗
function openModal(item) {
    modalBody.innerHTML = `
    <div style="display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;">
        <div style="width:220px;flex-shrink:0;text-align:center;">
            <img src="${item.img}" style="width:180px;height:180px;border-radius:16px;object-fit:contain;border:2px solid #c9a258;background:#1c170f;padding:16px;" />
        </div>
        <div style="flex:1;min-width:260px;">
            <h2 style="color:#ffd369;font-size:30px;margin-bottom:10px;">${item.name}</h2>
            <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
                <span class="equip-card__tag" style="padding:4px 10px;">${item.type}</span>
                <span class="equip-card__tag" style="padding:4px 10px;">${item.pos}</span>
            </div>
            <div class="modal-block">
                <h4>装备效果</h4>
                <p>${item.desc || '暂无效果描述'}</p>
            </div>
            <div class="modal-block">
                <h4>获取途径</h4>
                <p>${item.source || '暂无'}</p>
            </div>
        </div>
    </div>
    `
    modal.classList.add('show');
}
function closeModalFunc() {
    modal.classList.remove('show');
}

// 防抖搜索
function onSearchInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterData,200);
}

// 绑定事件
searchInput.addEventListener('input', onSearchInput);
typeFilter.addEventListener('change', filterData);
posFilter.addEventListener('change', filterData);
closeModal.addEventListener('click', closeModalFunc);
modal.addEventListener('click', e=>{
    if(e.target === modal) closeModalFunc();
})
virtualWrap.addEventListener('scroll', renderVirtual);
window.addEventListener('resize', renderVirtual);

// 初始化
filterData();
