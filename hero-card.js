const heroList = [
    {
        "id": 1,
        "name": "孙尚香",
        "stage": 1,
        "camp": "三分之地",
        "avatarImg": "images/heroes/sunshangxiang.png",
        "img": "images/herocard/sunshangxiang.png",
        "awakeningImg": "images/herocard/awakening/sunshangxiang.png",
        "skillImg": "images/herocard/skills/honglianbaodan.png",
        "desc": "登场：获得1次免费刷新。",
        "source": "该卡牌通过商店购买、拍卖等渠道获得",
        "keywords": ["登场"],
        "hp": 210,
        "mp": 15,
        "mpMax": 50,
        "physicalAtk": 40,
        "magicAtk": 0,
        "physicalDef": 14,
        "magicDef": 14,
        "atkSpeed": 1.00,
        "critRate": "0%",
        "critDmg": "40%",
        "atkRange": 4,
        "skillName": "红莲爆弹",
        "skillDesc": "孙尚香朝目标敌人发射1发弩炮，造成100+100%物理攻击力的物理伤害，并降低命中敌人50%物理防御，持续5秒。",
        "skillLv10": "弩炮伤害提升至150+150%物理攻击力",
        "skillLv40": "弩炮会在命中后爆炸，对附近敌人造成60%的技能伤害",
        "skillLv100": "会额外发射1发更强力的弩炮，造成1.5倍的伤害",
        "awakeningDesc": "登场：获得2次免费刷新。",
        "equipList": ["e1", "e2"],
        "teamList": ["t1"]
    },
    // 下面是模板，后续你复制上面的结构填充其他英雄
    {
    "id": 2,
    "name": "孙膑",
    "stage": 1,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/sunbin.png",
    "img": "images/herocard/sunbin.png",
    "awakeningImg": "images/herocard/awakening/sunbin.png",
    "skillImg": "images/herocard/skills/shikongzhadan.png",
    "desc": "你的英雄每释放3次技能，该英雄等级永久+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["技能触发", "永久等级"],
    "hp": 240,
    "mp": 10,
    "mpMax": 25,
    "physicalAtk": 24,
    "magicAtk": 40,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "时空爆弹",
    "skillDesc": "孙膑向目标敌人投掷1枚定时炸弹，2秒后爆炸对其及附近1格内的敌人造成100+100%法术攻击力的法术伤害。",
    "skillLv10": "炸弹伤害提升至125+175%法术攻击力",
    "skillLv40": "每第3次施放技能，会对生命值最高的3个敌人投掷炸弹",
    "skillLv100": "炸弹附着在敌人身上时沉默该目标",
    "awakeningDesc": "你的英雄每释放3次技能，该英雄等级永久+2。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,
    {
    "id": 3,
    "name": "牛魔",
    "stage": 1,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/niumo.png",
    "img": "images/herocard/niumo.png",
    "awakeningImg": "images/herocard/awakening/niumo.png",
    "skillImg": "images/herocard/skills/shanbendilie.png",
    "desc": "凯旋：获得1能量。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["凯旋"],
    "hp": 330,
    "mp": 50,
    "mpMax": 60,
    "physicalAtk": 32,
    "magicAtk": 0,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "山崩地裂",
    "skillDesc": "牛魔短暂蓄力后以巨斧猛力劈向当前的目标敌人，自身获得持续4秒的80点护盾并造成30+100%物理攻击力的物理伤害。",
    "skillLv10": "技能伤害提升至30+120%物理攻击力",
    "skillLv40": "将目标击飞并眩晕1秒",
    "skillLv100": "击飞眩晕延长至3秒",
    "awakeningDesc": "凯旋：获得2能量。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
    ，
    {
    "id": 4,
    "name": "李元芳",
    "stage": 1,
    "camp": "河洛",
    "avatarImg": "images/heroes/liyuanfang.png",
    "img": "images/herocard/liyuanfang.png",
    "awakeningImg": "images/herocard/awakening/liyuanfang.png",
    "skillImg": "images/herocard/skills/dieyingchongchong.png",
    "desc": "整备：对距离最近的【河洛】英雄使用1张古币。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["整备"],
    "hp": 210,
    "mp": 20,
    "mpMax": 60,
    "physicalAtk": 36,
    "magicAtk": 0,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 1.00,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "谍影重重",
    "skillDesc": "被动：李元芳技能造成伤害会叠加印记，叠满3层引爆印记造成100%物理攻击力的物理伤害。主动：李元芳丢出飞镖造成150%物理攻击力的物理伤害。",
    "skillLv10": "印记引爆伤害提升至150%物理攻击力",
    "skillLv40": "普攻也会叠加1层印记",
    "skillLv100": "印记引爆后，提升25%攻击速度，最多叠加5层",
    "awakeningDesc": "整备：对距离最近的【河洛】英雄使用2张古币。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，{
    "id": 5,
    "name": "干将莫邪",
    "stage": 1,
    "camp": "大河流域",
    "avatarImg": "images/heroes/ganjiangmoye.png",
    "img": "images/herocard/ganjiangmoye.png",
    "awakeningImg": "images/herocard/awakening/ganjiangmoye.png",
    "skillImg": "images/herocard/skills/xiongweishuangjian.png",
    "desc": "干将莫邪在场时，获得普通装备双剑·雄。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["在场"],
    "hp": 240,
    "mp": 15,
    "mpMax": 25,
    "physicalAtk": 24,
    "magicAtk": 40,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "雌雄双剑",
    "skillDesc": "干将莫邪释放1对飞剑，对敌人造成100+50%法术攻击力的法术伤害。",
    "skillLv10": "飞剑伤害提升至150+100%法术攻击力",
    "skillLv40": "每第2次施法会额外释放1对飞剑",
    "skillLv100": "飞剑伤害提升至150+200%法术攻击力",
    "awakeningDesc": "干将莫邪在场时，获得普通装备双剑·雄及双剑·雌。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
{
    "id": 6,
    "name": "苏烈",
    "stage": 1,
    "camp": "河洛",
    "avatarImg": "images/heroes/sulie.png",
    "img": "images/herocard/sulie.png",
    "awakeningImg": "images/herocard/awakening/sulie.png",
    "skillImg": "images/herocard/skills/haoliewanjun.png",
    "desc": "牺牲：苏烈的等级永久+2。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["牺牲"],
    "hp": 330,
    "mp": 20,
    "mpMax": 40,
    "physicalAtk": 32,
    "magicAtk": 0,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "豪烈万军",
    "skillDesc": "苏烈旋转1周，对周围敌人造成80+80%物理攻击力的物理伤害，并降低其4点物理防御，持续5秒。",
    "skillLv10": "技能伤害提升至造成80+120%物理攻击力，减少的物理防御提升至8点",
    "skillLv40": "战斗中首次被击败后复生，并且拥有50%最大生命值",
    "skillLv100": "复生后拥有100%最大生命值，击飞眩晕周围1格敌方1秒并造成10%最大生命值的物理伤害",
    "awakeningDesc": "牺牲：苏烈的等级永久+4。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
{
    "id": 7,
    "name": "弈星",
    "stage": 1,
    "camp": "",
    "avatarImg": "images/heroes/yixing.png",
    "img": "images/herocard/yixing.png",
    "awakeningImg": "images/herocard/awakening/yixing.png",
    "skillImg": "images/herocard/skills/wanbianzhiju.png",
    "desc": "棋手升级时，棋手经验+2。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["棋手升级"],
    "hp": 240,
    "mp": 40,
    "mpMax": 60,
    "physicalAtk": 24,
    "magicAtk": 40,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "万变之局",
    "skillDesc": "弈星选择敌人最多的1排，画出1个虚空棋盘，1.5秒后棋盘完全成型，对范围内的敌人造成100+50%法术攻击力的法术伤害。",
    "skillLv10": "棋盘伤害提升至100+100%法术攻击力",
    "skillLv40": "棋盘持续期间，内外的敌人无法进出",
    "skillLv100": "棋盘持续时间延长至5.5秒",
    "awakeningDesc": "棋手升级时，棋手经验+4。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
{
    "id": 8,
    "name": "狂铁",
    "stage": 1,
    "camp": "日落海",
    "avatarImg": "images/heroes/kuangtie.png",
    "img": "images/herocard/kuangtie.png",
    "awakeningImg": "images/herocard/awakening/kuangtie.png",
    "skillImg": "images/herocard/skills/suiliezhiji.png",
    "desc": "整备：阿科米亚核心的等级+2。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["整备", "阿科米亚核心"],
    "hp": 300,
    "mp": 30,
    "mpMax": 50,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.80,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "碎裂之击",
    "skillDesc": "狂铁挥舞2次武器，每次挥击对身前的敌人造成50+100%物理攻击力的物理伤害。",
    "skillLv10": "施法获得持续4秒的100+10%最大生命值的护盾",
    "skillLv40": "技能每命中1个敌人，护盾值提升100点",
    "skillLv100": "护盾被击破时恢复10%最大生命值",
    "awakeningDesc": "整备：阿科米亚核心的等级+2，触发2次。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
{
    "id": 9,
    "name": "曜",
    "stage": 1,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/yao.png",
    "img": "images/herocard/yao.png",
    "awakeningImg": "images/herocard/awakening/yao.png",
    "skillImg": "images/herocard/skills/zhuxing.png",
    "desc": "你的英雄合成提升的等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["合成"],
    "hp": 300,
    "mp": 30,
    "mpMax": 50,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.80,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "逐星",
    "skillDesc": "曜化作星辰对当前目标造成100+130%物理攻击力的物理伤害。",
    "skillLv10": "施放技能额外获得100+100%物理攻击力的护盾，持续4秒",
    "skillLv40": "每第3次施放技能会额外击飞并眩晕目标0.5秒",
    "skillLv100": "施放技能后获得1次强化攻击，造成130+130%物理攻击力的物理伤害并恢复自身200+75%物理攻击力的生命值",
    "awakeningDesc": "你的英雄合成提升的等级+2。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}

    

    // 剩下英雄继续追加这个模板即可
];

export { heroList };
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>英雄牌 - 王者万象棋 - 万象一图诀</title>
    <base href="./">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
        }
        body {
            background-color: #12161f;
            color: #e6e8ef;
            background-image: radial-gradient(circle at 40% 20%, rgba(204, 164, 79, 0.08), transparent 45%);
            min-height: 100vh;
        }
        .top-nav-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 16px 20px;
            background-color: rgba(18, 22, 31, 0.75);
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 99;
        }
        .top-nav-wrap a {
            text-decoration: none;
            color: #b4b9c6;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.2s;
        }
        .top-nav-wrap a:hover {
            color: #ffd369;
            background-color: rgba(255,211,105,0.08);
        }
        .top-nav-wrap a.active {
            color: #ffd369;
            position: relative;
        }
        .top-nav-wrap a.active::after{
            content:'';
            position:absolute;
            left:16px;
            right:16px;
            bottom:-4px;
            height:4px;
            background:#ffd369;
            border-radius:99px;
        }
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .page-title {
            text-align:center;
            margin-bottom:30px;
        }
        .subtitle-tag {
            color: #b8a060;
            letter-spacing: 4px;
            font-size:14px;
            margin-bottom:12px;
        }
        h1 {
            font-size: 40px;
            line-height: 1.2;
            font-weight: 600;
        }
        .yellow-text {
            color: #ffd369;
        }
        .desc-line {
            color:#9298a6;
            margin:10px 0 24px;
            font-size:14px;
        }
        .filter-row {
            display:flex;
            gap:12px;
            justify-content:center;
            flex-wrap:wrap;
            margin-bottom:24px;
        }
        .filter-row select {
            background:#1c212c;
            color:#e6e8ef;
            border:1px solid #333844;
            padding: 8px 12px;
            border-radius:8px;
            outline:none;
        }
        .search-box {
            display:flex;
            align-items:center;
            width: min(700px, 100%);
            margin:0 auto 36px;
            background: #1c212c;
            border: 1px solid #333844;
            border-radius:12px;
            padding:14px 20px;
        }
        .search-box input {
            flex:1;
            background:transparent;
            border:none;
            outline:none;
            color:#e6e8ef;
            font-size:16px;
            padding-left:10px;
        }
        .search-box input::placeholder {
            color:#68707c;
        }
        .card-grid {
            display:grid;
            grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
            gap:16px;
        }
        .hero-card-item {
            background:#1c212c;
            border-radius:10px;
            padding:14px;
            border:1px solid #282d38;
            transition:0.2s;
            cursor:pointer;
        }
        .hero-card-item:hover {
            border-color:rgba(255,211,105,0.35);
        }
        .hero-card-cover img {
            width:100%;
            border-radius:8px;
            object-fit:cover;
        }
        #detailModal {
            position: fixed;
            inset:0;
            background:rgba(0,0,0,0.75);
            display:none;
            align-items:center;
            justify-content:center;
            z-index:999;
            padding:20px;
        }
        .modal-content {
            background:#12161f;
            border:1px solid #333844;
            border-radius:14px;
            max-width:780px;
            width:100%;
            max-height:90vh;
            overflow-y:auto;
            padding:24px;
        }
        .split-line {
            height:1px;
            background:#282d38;
            margin:20px 0;
        }
        .modal-block h4 {
            color:#ffd369;
            margin-bottom:10px;
        }
        .hero-header-bar {
            display:flex;
            gap:16px;
            align-items:center;
        }
        .hero-header-bar img{
            width:90px;
            border-radius:10px;
        }
        .hero-name-large {
            font-size:26px;
            color:#ffd369;
            font-weight:bold;
        }
        .tag-item{
            display:inline-block;
            background:rgba(255,211,105,0.12);
            color:#ffd369;
            padding:3px 8px;
            border-radius:6px;
            font-size:13px;
            margin:4px 4px 0 0;
        }
        .attr-grid{
            display:grid;
            grid-template-columns: repeat(4, 1fr);
            gap:8px;
        }
        .attr-item{
            padding:6px;
            background:#1c212c;
            border-radius:6px;
            font-size:14px;
        }
    </style>
</head>
<body>
    <div class="top-nav-wrap">
        <a href="./index.html">首页</a>
        <a href="./lineup.html">阵容大全</a>
        <a href="./hero.html" class="active">英雄牌</a>
        <a href="./talent.html">天赋牌</a>
        <a href="./equip.html">装备牌</a>
        <a href="./effect.html">效果牌</a>
        <a href="./info-gap.html">信息差</a>
    </div>

    <div class="container">
        <div class="page-title">
            <div class="subtitle-tag">HERO DATA</div>
            <h1>英雄<span class="yellow-text">牌库</span></h1>
            <div class="desc-line">万象一图诀 · 英雄资料</div>
        </div>

        <div class="filter-row">
            <select id="heroStageFilter">
                <option value="all">全部阶数</option>
                <option value="1">1阶</option>
                <option value="2">2阶</option>
                <option value="3">3阶</option>
                <option value="4">4阶</option>
            </select>
        </div>

        <div class="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#888e9c">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input id="heroSearchInput" type="text" placeholder="搜索英雄名称...">
        </div>

        <div class="card-grid" id="heroCardList"></div>
    </div>

    <div id="detailModal">
        <div class="modal-content" id="modalBody"></div>
    </div>

<script type="module">
    import { heroList } from './hero.js';

    let currentStage = 'all';
    let searchKw = '';
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');

    document.getElementById('heroStageFilter').addEventListener('change', e=>{
        currentStage = e.target.value;
        renderList();
    })
    document.getElementById('heroSearchInput').addEventListener('input', e=>{
        searchKw = e.target.value.trim().toLowerCase();
        renderList();
    })

    function renderList(){
        const wrap = document.getElementById('heroCardList');
        let arr = [...heroList];
        if(currentStage !== 'all'){
            arr = arr.filter(x=>x.stage == Number(currentStage));
        }
        if(searchKw){
            arr = arr.filter(x=>x.name.toLowerCase().includes(searchKw))
        }
        if(!arr.length){
            wrap.innerHTML = `<div style="text-align:center;color:#68707c;padding:40px">没有匹配英雄</div>`;
            return;
        }
        wrap.innerHTML = arr.map(item=>`
            <div class="hero-card-item" data-id="${item.id}">
                <div class="hero-card-cover">
                    <img src="${item.avatarImg}" alt="${item.name}">
                    <div style="text-align:center;margin-top:8px;color:#ffd369">${item.name}</div>
                    <div style="text-align:center;font-size:12px;color:#999">${item.stage}阶 · ${item.camp || '未知阵营'}</div>
                </div>
            </div>
        `).join('');
        bindClick();
    }

    function bindClick(){
        document.querySelectorAll('.hero-card-item').forEach(card=>{
            card.onclick = ()=>{
                const id = Number(card.dataset.id);
                const hero = heroList.find(x=>x.id === id);
                if(!hero) return;
                modalBody.innerHTML = `
                <div class="hero-header-bar">
                    <img src="${hero.img}" alt="${hero.name}">
                    <div>
                        <div class="hero-name-large">${hero.name}</div>
                        <div>
                            <span class="tag-item">${hero.stage}阶</span>
                            <span class="tag-item">${hero.camp || '无阵营'}</span>
                            ${hero.keywords.map(k=>`<span class="tag-item">${k}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>基础属性</h4>
                    <div class="attr-grid">
                        <div class="attr-item">生命：${hero.hp}</div>
                        <div class="attr-item">法力：${hero.mp}/${hero.mpMax}</div>
                        <div class="attr-item">物攻：${hero.physicalAtk}</div>
                        <div class="attr-item">法攻：${hero.magicAtk}</div>
                        <div class="attr-item">物防：${hero.physicalDef}</div>
                        <div class="attr-item">法防：${hero.magicDef}</div>
                        <div class="attr-item">攻速：${hero.atkSpeed}</div>
                        <div class="attr-item">射程：${hero.atkRange}</div>
                        <div class="attr-item">暴击率：${hero.critRate}</div>
                        <div class="attr-item">暴击伤害：${hero.critDmg}</div>
                    </div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>登场效果</h4>
                    <div style="line-height:1.6">${hero.desc || "无"}</div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>技能【${hero.skillName || ''}】</h4>
                    <div style="line-height:1.6">${hero.skillDesc || "无"}</div>
                    <div style="margin-top:8px;color:#ffb850">Lv10：${hero.skillLv10 || "-"}</div>
                    <div style="color:#ffb850">Lv40：${hero.skillLv40 || "-"}</div>
                    <div style="color:#ffb850">Lv100：${hero.skillLv100 || "-"}</div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>觉醒效果</h4>
                    <div style="line-height:1.6">${hero.awakeningDesc || "无"}</div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>获取方式</h4>
                    <div>${hero.source}</div>
                </div>
                `;
                modal.style.display = 'flex';
            }
        })
    }

    modal.addEventListener('click', (e)=>{
        if(e.target === modal) modal.style.display = 'none';
    })
    renderList();
</script>

<script>
(function(){
  const navLinks = document.querySelectorAll('.top-nav-wrap a');
  const currentPath = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').replace('./','');
    if(href === currentPath){
      link.classList.add('active');
    }
  })
})();
</script>
</body>
</html>

