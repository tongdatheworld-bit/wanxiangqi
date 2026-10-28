const equipList = [
    {id:1,name:"大棒",type:"基础装备",pos:"法术装备",smallImg:"images/equip/dabang.png",img:"images/equip/dabang.png",desc:"",source:"",combine:""},
    {id:2,name:"风暴巨剑",type:"基础装备",pos:"物理装备",smallImg:"images/equip/fengbaojujian.png",img:"images/equip/fengbaojujian.png",desc:"",source:"",combine:""},
    {id:3,name:"雷鸣刃",type:"基础装备",pos:"物理装备",smallImg:"images/equip/leimingren.png",img:"images/equip/leimingren.png",desc:"",source:"",combine:""},
    {id:4,name:"力量腰带",type:"基础装备",pos:"防御装备",smallImg:"images/equip/liliangyaodai.png",img:"images/equip/liliangyaodai.png",desc:"",source:"",combine:""},
    {id:5,name:"破碎圣杯",type:"基础装备",pos:"法术装备",smallImg:"images/equip/posuishengbei.png",img:"images/equip/posuishengbei.png",desc:"",source:"",combine:""},
    {id:6,name:"圣者法典",type:"基础装备",pos:"法术装备",smallImg:"images/equip/shengzhedianfa.png",img:"images/equip/shengzhedianfa.png",desc:"",source:"",combine:""},
    {id:7,name:"守护者之铠",type:"基础装备",pos:"防御装备",smallImg:"images/equip/shuhuzhezhikai.png",img:"images/equip/shuhuzhezhikai.png",desc:"",source:"",combine:""},
    {id:8,name:"速击之枪",type:"基础装备",pos:"物理装备",smallImg:"images/equip/sujizhiqiang.png",img:"images/equip/sujizhiqiang.png",desc:"",source:"",combine:""},
    {id:9,name:"霸者重铠",type:"普通装备",pos:"防御装备",smallImg:"images/equip/bazhezhongkai.png",img:"images/equip/bazhezhongkai.png",desc:"",source:"",combine:""},
    {id:10,name:"不死鸟之眼",type:"普通装备",pos:"防御装备",smallImg:"images/equip/businiaozhiyan.png",img:"images/equip/businiaozhiyan.png",desc:"",source:"",combine:""},
    {id:11,name:"不祥征兆",type:"普通装备",pos:"防御装备",smallImg:"images/equip/buxiangzhengzhao.png",img:"images/equip/buxiangzhengzhao.png",desc:"",source:"",combine:""},
    {id:12,name:"炽热支配者",type:"普通装备",pos:"法术装备",smallImg:"images/equip/chirezhipeizhe.png",img:"images/equip/chirezhipeizhe.png",desc:"",source:"",combine:""},
    {id:13,name:"纯净苍穹",type:"普通装备",pos:"物理装备",smallImg:"images/equip/chunjingcangqiong.png",img:"images/equip/chunjingcangqiong.png",desc:"",source:"",combine:""},
    {id:14,name:"法源之杯",type:"普通装备",pos:"法术装备",smallImg:"images/equip/fayuanzhibei.png",img:"images/equip/fayuanzhibei.png",desc:"",source:"",combine:""},
    {id:15,name:"反伤重甲",type:"普通装备",pos:"防御装备",smallImg:"images/equip/fanshangzhongjia.png",img:"images/equip/fanshangzhongjia.png",desc:"",source:"",combine:""},
    {id:16,name:"寒霜侵袭",type:"普通装备",pos:"物理装备",smallImg:"images/equip/hanhanqinxi.png",img:"images/equip/hanhanqinxi.png",desc:"",source:"",combine:""},
    {id:17,name:"红莲炎甲",type:"普通装备",pos:"防御装备",smallImg:"images/equip/honglianyanjia.png",img:"images/equip/honglianyanjia.png",desc:"",source:"",combine:""},
    {id:18,name:"红魔",type:"普通装备",pos:"法术装备",smallImg:"images/equip/hongmo.png",img:"images/equip/hongmo.png",desc:"",source:"",combine:""},
    {id:19,name:"极寒风暴",type:"普通装备",pos:"防御装备",smallImg:"images/equip/jihanfengbao.png",img:"images/equip/jihanfengbao.png",desc:"",source:"",combine:""},
    {id:20,name:"金色圣剑",type:"普通装备",pos:"法术装备",smallImg:"images/equip/jinseshengjian.png",img:"images/equip/jinseshengjian.png",desc:"",source:"",combine:""},
    {id:21,name:"近卫荣耀",type:"普通装备",pos:"防御装备",smallImg:"images/equip/jinweirongyao.png",img:"images/equip/jinweirongyao.png",desc:"",source:"",combine:""},
    {id:22,name:"聚灵水晶",type:"普通装备",pos:"法术装备",smallImg:"images/equip/julingshuijing.png",img:"images/equip/julingshuijing.png",desc:"",source:"",combine:""},
    {id:23,name:"名刀・司命",type:"普通装备",pos:"物理装备",smallImg:"images/equip/mingdaosiming.png",img:"images/equip/mingdaosiming.png",desc:"",source:"",combine:""},
    {id:24,name:"冥王",type:"普通装备",pos:"法术装备",smallImg:"images/equip/mingwang.png",img:"images/equip/mingwang.png",desc:"",source:"",combine:""},
    {id:25,name:"魔律之刃",type:"普通装备",pos:"法术装备",smallImg:"images/equip/molvzhiren.png",img:"images/equip/molvzhiren.png",desc:"",source:"",combine:""},
    {id:26,name:"魔女斗篷",type:"普通装备",pos:"防御装备",smallImg:"images/equip/monudoupeng.png",img:"images/equip/monudoupeng.png",desc:"",source:"",combine:""},
    {id:27,name:"凝渊",type:"普通装备",pos:"法术装备",smallImg:"images/equip/ningyuan.png",img:"images/equip/ningyuan.png",desc:"",source:"",combine:""},
    {id:28,name:"破茧之衣",type:"普通装备",pos:"法术装备",smallImg:"images/equip/pojianzhiyi.png",img:"images/equip/pojianzhiyi.png",desc:"",source:"",combine:""},
    {id:29,name:"破晓",type:"普通装备",pos:"物理装备",smallImg:"images/equip/poxiao.png",img:"images/equip/poxiao.png",desc:"",source:"",combine:""},
    {id:30,name:"日渊",type:"普通装备",pos:"物理装备",smallImg:"images/equip/riyuan.png",img:"images/equip/riyuan.png",desc:"",source:"",combine:""},
    {id:31,name:"生命魔典",type:"普通装备",pos:"法术装备",smallImg:"images/equip/shengmingmodian.png",img:"images/equip/shengmingmodian.png",desc:"",source:"",combine:""},
    {id:32,name:"痛苦面具",type:"普通装备",pos:"法术装备",smallImg:"images/equip/tongkumianju.png",img:"images/equip/tongkumianju.png",desc:"",source:"",combine:""},
    {id:33,name:"无尽巨剑",type:"普通装备",pos:"物理装备",smallImg:"images/equip/wujinjujian.png",img:"images/equip/wujinjujian.png",desc:"",source:"",combine:""},
    {id:34,name:"贤者之书",type:"普通装备",pos:"法术装备",smallImg:"images/equip/xianzhezhishu.png",img:"images/equip/xianzhezhishu.png",desc:"",source:"",combine:""},
    {id:35,name:"虚无法杖",type:"普通装备",pos:"法术装备",smallImg:"images/equip/xuwufazhang.png",img:"images/equip/xuwufazhang.png",desc:"",source:"",combine:""},
    {id:36,name:"影牙",type:"普通装备",pos:"物理装备",smallImg:"images/equip/yingya.png",img:"images/equip/yingya.png",desc:"",source:"",combine:""},
    {id:37,name:"御灵之纱",type:"普通装备",pos:"防御装备",smallImg:"images/equip/yulingzhisha.png",img:"images/equip/yulingzhisha.png",desc:"",source:"",combine:""},
    {id:38,name:"制裁之剑",type:"普通装备",pos:"物理装备",smallImg:"images/equip/zacaizhijian.png",img:"images/equip/zacaizhijian.png",desc:"",source:"",combine:""},
    {id:39,name:"铸梦・逐风",type:"普通装备",pos:"物理装备",smallImg:"images/equip/zhumengzhufeng.png",img:"images/equip/zhumengzhufeng.png",desc:"",source:"",combine:""},
    {id:40,name:"自然法杖",type:"普通装备",pos:"法术装备",smallImg:"images/equip/ziranfazhang.png",img:"images/equip/ziranfazhang.png",desc:"",source:"",combine:""},
    {id:41,name:"不屈意志",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/buquyizhi.png",img:"images/equip/buquyizhi.png",desc:"",source:"",combine:""},
    {id:42,name:"断念",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/duannian.png",img:"images/equip/duannian.png",desc:"",source:"",combine:""},
    {id:43,name:"法潮灵杖",type:"天赋装备",pos:"法术装备",smallImg:"images/equip/fachaolingzhang.png",img:"images/equip/fachaolingzhang.png",desc:"",source:"",combine:""},
    {id:44,name:"根源之力",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/genyuanzhili.png",img:"images/equip/genyuanzhili.png",desc:"",source:"",combine:""},
    {id:45,name:"鼓舞之戒",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/guwuzhijie.png",img:"images/equip/guwuzhijie.png",desc:"",source:"",combine:""},
    {id:46,name:"光辉圣铠",type:"天赋装备",pos:"防御装备",smallImg:"images/equip/guanghuishengkai.png",img:"images/equip/guanghuishengkai.png",desc:"",source:"",combine:""},
    {id:47,name:"护命灵珠",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/huminglingzhu.png",img:"images/equip/huminglingzhu.png",desc:"",source:"",combine:""},
    {id:48,name:"魂祭绝刃",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/hunjijueren.png",img:"images/equip/hunjijueren.png",desc:"",source:"",combine:""},
    {id:49,name:"魂灭灵冠",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/hunmielingguan.png",img:"images/equip/hunmielingguan.png",desc:"",source:"",combine:""},
    {id:50,name:"灵泉法杖",type:"天赋装备",pos:"法术装备",smallImg:"images/equip/lingquanfazhang.png",img:"images/equip/lingquanfazhang.png",desc:"",source:"",combine:""},
    {id:51,name:"灵泉项链",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/lingquanxianglian.png",img:"images/equip/lingquanxianglian.png",desc:"",source:"",combine:""},
    {id:52,name:"梦魇之牙",type:"天赋装备",pos:"法术装备",smallImg:"images/equip/mengyanzhiya.png",img:"images/equip/mengyanzhiya.png",desc:"",source:"",combine:""},
    {id:53,name:"末世",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/moshi.png",img:"images/equip/moshi.png",desc:"",source:"",combine:""},
    {id:54,name:"怒神项链",type:"天赋装备",pos:"通用装备",smallImg:"images/equip/nushenxianglian.png",img:"images/equip/nushenxianglian.png",desc:"",source:"",combine:""},
    {id:55,name:"破妄之刃",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/powangzhiren.png",img:"images/equip/powangzhiren.png",desc:"",source:"",combine:""},
    {id:56,name:"破阵战芒",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/pozhenzhanmang.png",img:"images/equip/pozhenzhanmang.png",desc:"",source:"",combine:""},
    {id:57,name:"强敌克星",type:"天赋装备",pos:"物理装备",smallImg:"images/equip/qiangdikexing.png",img:"images/equip/qiangdikexing.png",desc:"",source:"",combine:""},
    {id:58,name:"三分旗帜",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/sanfenqizhi.png",img:"images/equip/sanfenqizhi.png",desc:"",source:"",combine:""},
    {id:59,name:"阿科米亚之子",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/akemiyazhizi.png",img:"images/equip/akemiyazhizi.png",desc:"",source:"",combine:""},
    {id:60,name:"百锻刀",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/baiduandao.png",img:"images/equip/baiduandao.png",desc:"",source:"",combine:""},
    {id:61,name:"捕能手套",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/bunengshoutao.png",img:"images/equip/bunengshoutao.png",desc:"",source:"",combine:""},
    {id:62,name:"分身镜",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/fenshenjing.png",img:"images/equip/fenshenjing.png",desc:"",source:"",combine:""},
    {id:63,name:"机器头",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/jiqitou.png",img:"images/equip/jiqitou.png",desc:"",source:"",combine:""},
    {id:64,name:"静谧之铃",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/jingmizhiling.png",img:"images/equip/jingmizhiling.png",desc:"",source:"",combine:""},
    {id:65,name:"聚灵法杖",type:"特殊装备",pos:"法术装备",smallImg:"images/equip/julingfazhang.png",img:"images/equip/julingfazhang.png",desc:"",source:"",combine:""},
    {id:66,name:"怒莲之刺",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/nulianzhici.png",img:"images/equip/nulianzhici.png",desc:"",source:"",combine:""},
    {id:67,name:"磐石之心",type:"特殊装备",pos:"防御装备",smallImg:"images/equip/panshizhixin.png",img:"images/equip/panshizhixin.png",desc:"",source:"",combine:""},
    {id:68,name:"青莲剑谱",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/qinglianjianpu.png",img:"images/equip/qinglianjianpu.png",desc:"",source:"",combine:""},
    {id:69,name:"驱雷",type:"特殊装备",pos:"法术装备",smallImg:"images/equip/qulei.png",img:"images/equip/qulei.png",desc:"",source:"",combine:""},
    {id:70,name:"热血拳套",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/rexuequantao.png",img:"images/equip/rexuequantao.png",desc:"",source:"",combine:""},
    {id:71,name:"盛华",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/shenghua.png",img:"images/equip/shenghua.png",desc:"",source:"",combine:""},
    {id:72,name:"噬神之书",type:"特殊装备",pos:"法术装备",smallImg:"images/equip/shishenzhishu.png",img:"images/equip/shishenzhishu.png",desc:"",source:"",combine:""},
    {id:73,name:"套娃枪",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/taowaqiang.png",img:"images/equip/taowaqiang.png",desc:"",source:"",combine:""},
    {id:74,name:"小鹿的庇护",type:"特殊装备",pos:"防御装备",smallImg:"images/equip/xiaoludebihu.png",img:"images/equip/xiaoludebihu.png",desc:"",source:"",combine:""},
    {id:75,name:"学识宝石",type:"特殊装备",pos:"通用装备",smallImg:"images/equip/xueshibaoshi.png",img:"images/equip/xueshibaoshi.png",desc:"",source:"",combine:""},
    {id:76,name:"银莲庇佑",type:"特殊装备",pos:"防御装备",smallImg:"images/equip/yinlianbiyou.png",img:"images/equip/yinlianbiyou.png",desc:"",source:"",combine:""},
    {id:77,name:"征服之剑",type:"特殊装备",pos:"物理装备",smallImg:"images/equip/zhengfuzhijian.png",img:"images/equip/zhengfuzhijian.png",desc:"",source:"",combine:""},
];

const equipCardList = document.getElementById('equipCardList');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const posFilter = document.getElementById('posFilter');
const modal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// 渲染卡片，类名完全沿用hero那套
function renderList(list) {
    equipCardList.innerHTML = '';
    if (list.length === 0) {
        equipCardList.innerHTML = `<div style="grid-column: 1/-1;text-align:center;color:#888;padding:60px 0;">没有匹配的装备</div>`;
        return;
    }
    list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'hero-card-item';
        card.innerHTML = `
            <div class="hero-card-cover">
                <img src="${item.smallImg}" alt="${item.name}" loading="lazy">
            </div>
        `;
        card.onclick = () => openModal(item);
        equipCardList.appendChild(card);
    })
}

function filterData() {
    let kw = searchInput.value.trim().toLowerCase();
    let t = typeFilter.value;
    let p = posFilter.value;

    const result = equipList.filter(item => {
        const matchType = t === 'all' || item.type === t;
        const matchPos = p === 'all' || item.pos === p;
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || (item.desc && item.desc.toLowerCase().includes(kw));
        return matchType && matchPos && matchKw;
    })
    renderList(result);
}

// 【装备专属弹窗面板，样式风格参照hero，但板块是装备的】
function openModal(item) {
    modalBody.innerHTML = `
        <div class="hero-header-bar">
            <div class="hero-icon-wrap">
                <img class="hero-main-icon" src="${item.img}" alt="${item.name}" />
                <div class="hero-name-title">
                    <div class="hero-name-large">${item.name}</div>
                    <div class="hero-tags-top">
                        <span class="tag-camp">${item.type}</span>
                        <span class="tag-camp">${item.pos}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-block">
            <h4>装备效果</h4>
            <p>${item.desc || '暂无效果描述'}</p>
        </div>

        <div class="modal-block">
            <h4>合成路线</h4>
            <p>${item.combine || '不可合成 / 暂无合成信息'}</p>
        </div>

        <div class="modal-block">
            <h4>获取途径</h4>
            <p>${item.source || '暂无'}</p>
        </div>
    `
    modal.style.display = 'flex';
}

function closeModalFunc() {
    modal.style.display = 'none';
}

searchInput.addEventListener('input', filterData);
typeFilter.addEventListener('change', filterData);
posFilter.addEventListener('change', filterData);
closeModal.addEventListener('click', closeModalFunc);
modal.addEventListener('click', e=>{
    if(e.target === modal) closeModalFunc();
})

filterData();
