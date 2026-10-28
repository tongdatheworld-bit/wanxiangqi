document.addEventListener('DOMContentLoaded', function(){
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
    },
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
    },
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
    },
    {
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
    },
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
    },
    {
        "id": 7,
        "name": "弈星",
        "stage": 1,
        "camp": "无阵营",
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
    },
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
    },
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
    },
    {
    "id": 10,
    "name": "廉颇",
    "stage": 2,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/lianpo.png",
    "img": "images/herocard/lianpo.png",
    "awakeningImg": "images/herocard/awakening/lianpo.png",
    "skillImg": "images/herocard/skills/yongshizhihun.png",
    "desc": "廉颇释放技能时，你的其他英雄获得5点护盾值。每次使用战术牌会提升该护盾值。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["核心坦克"],
    "hp": 330,
    "mp": 20,
    "mpMax": 50,
    "physicalAtk": 32,
    "magicAtk": 0,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "勇士之魂",
    "skillDesc": "廉颇用臂甲砸向目标敌人，获得持续4秒的100点护盾，造成50+80%物理攻击力的物理伤害。",
    "skillLv10": "技能伤害提升至120+120%物理攻击力，护盾提升至250点",
    "skillLv40": "每次施法护盾值额外提升40点，最多5次",
    "skillLv100": "施法直接获得最大护盾值（不再需要多次施法提升）并恢复10%最大生命值",
    "awakeningDesc": "廉颇释放技能时，你的其他英雄获得10点护盾值。每次使用战术牌会提升该护盾值。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，{
    "id": 11,
    "name": "赵云",
    "stage": 2,
    "camp": "三分之地",
    "avatarImg": "images/heroes/zhaoyun.png",
    "img": "images/herocard/zhaoyun.png",
    "awakeningImg": "images/herocard/awakening/zhaoyun.png",
    "skillImg": "images/herocard/skills/poyunzhilong.png",
    "desc": "登场：自身及随机2名其他英雄等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["登场", "核心功能"],
    "hp": 300,
    "mp": 0,
    "mpMax": 40,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.80,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "破云之龙",
    "skillDesc": "赵云快速刺出4次龙枪打击目标敌人，每次造成60+60%物理攻击力的物理伤害并恢复自身40点生命值。",
    "skillLv10": "单次伤害提升至60+100%物理攻击力，恢复生命值提升至80点",
    "skillLv40": "低于50%生命值时，龙枪次数+3",
    "skillLv100": "低于30%生命值时，技能伤害和恢复效果变为1.5倍；首次低于30%生命值时会获得100+30%最大生命值的护盾",
    "awakeningDesc": "",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
    {
    "id": 12,
    "name": "墨子",
    "stage": 2,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/mozi.png",
    "img": "images/herocard/mozi.png",
    "awakeningImg": "images/herocard/awakening/mozi.png",
    "skillImg": "images/herocard/skills/moshouchenggui.png",
    "desc": "友方单位护盾被击破时，该单位生命值上限永久+30。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": [],
    "hp": 330,
    "mp": 50,
    "mpMax": 60,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "墨守成规",
    "skillDesc": "墨子驾驶机关人展开高能屏障，对触碰到屏障的敌人每0.5秒造成30+50%法术攻击力的法术伤害，屏障最多持续2秒。技能期间附近没有可攻击目标时立即停止释放技能。",
    "skillLv10": "屏障伤害提升至50+75%法术攻击力",
    "skillLv40": "屏障伤害时还会对敌人造成0.5秒眩晕",
    "skillLv100": "屏障持续时间延长至5秒",
    "awakeningDesc": "友方单位护盾被击破时，该单位生命值上限永久+60。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
    {
    "id": 13,
    "name": "芈月",
    "stage": 2,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/biyue.png",
    "img": "images/herocard/biyue.png",
    "awakeningImg": "images/herocard/awakening/biyue.png",
    "skillImg": "images/herocard/skills/huanyipucong.png",
    "desc": "每当你使用效果牌时，己方穿戴装备最多的1名【逐鹿】英雄等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": [],
    "hp": 240,
    "mp": 30,
    "mpMax": 50,
    "physicalAtk": 24,
    "magicAtk": 40,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 2,
    "skillName": "幻翼仆从",
    "skillDesc": "芈月为等级最高的近战友军召唤1只暗影仆从协助战斗，持续10秒。仆从每次攻击造成80%芈月法术攻击力的法术伤害并为友军恢复80%芈月法术攻击力的生命值，同时窃取目标1点物理防御和法术防御转移给友军（最多30层，持续至回合结束）。",
    "skillLv10": "仆从伤害提升至100%法术攻击力，生命值恢复提升至100%法术攻击力",
    "skillLv40": "仆从数量提升至5只",
    "skillLv100": "窃取的双防提升至2点",
    "awakeningDesc": "每当你使用效果牌时，己方穿戴装备最多的1名【逐鹿】英雄等级+2。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
    {
    "id": 14,
    "name": "曹操",
    "stage": 2,
    "camp": "三分之地",
    "avatarImg": "images/heroes/caocao.png",
    "img": "images/herocard/caocao.png",
    "awakeningImg": "images/herocard/awakening/caocao.png",
    "skillImg": "images/herocard/skills/badaoxiaoxiong.png",
    "desc": "整备：随机触发1名【三分】英雄的登场效果。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["整备", "登场", "核心输出"],
    "hp": 300,
    "mp": 25,
    "mpMax": 60,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.80,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "霸道枭雄",
    "skillDesc": "曹操凝聚霸道之力立即恢复自身100+15%最大生命值，同时在5秒内提高20%基础攻击力。",
    "skillLv10": "攻击力增益提升至50%",
    "skillLv40": "增益时间+5秒，强化状态下普攻会施放出可穿透的剑气",
    "skillLv100": "技能持续期间额外获得30%物理吸血",
    "awakeningDesc": "整备：随机触发2名【三分】英雄的登场效果。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
，
    {
    "id": 15,
    "name": "马可波罗",
    "stage": 2,
    "camp": "日落海",
    "avatarImg": "images/heroes/makepolo.png",
    "img": "images/herocard/makepolo.png",
    "awakeningImg": "images/herocard/awakening/makepolo.png",
    "skillImg": "images/herocard/skills/hualizuolun.png",
    "desc": "登场：自身及阿科米亚核心等级+2。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["登场", "阿科米亚核心"],
    "hp": 210,
    "mp": 30,
    "mpMax": 45,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 1.00,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "华丽左轮",
    "skillDesc": "马可波罗掏出华丽左轮朝当前方向连续射出8颗子弹，每颗子弹造成25+15%物理攻击力的物理伤害，通过技能击败敌人后，下1次技能额外增加8发子弹。",
    "skillLv10": "子弹伤害提升至40+30%物理攻击力",
    "skillLv40": "子弹数量提升至16发",
    "skillLv100": "被马可波罗子弹命中的敌人将被永久打上标记，友军攻击标记敌人会提升50%攻击速度",
    "awakeningDesc": "登场：自身及阿科米亚核心等级+4。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}

];

const heroCardList = document.getElementById('heroCardList');
const searchInput = document.getElementById('searchInput');
const detailModal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

console.log("heroCardList DOM：", heroCardList);
if(!heroCardList){
    console.error("❌ 找不到 #heroCardList！HTML id 不匹配！")
    return;
}

function getStageClass(stage) {
    const map = {
        1: 'tag-stage-1',
        2: 'tag-stage-2',
        3: 'tag-stage-3',
        4: 'tag-stage-4',
        5: 'tag-stage-5'
    }
    return map[stage] || 'tag-stage-1';
}

function getFilteredHero() {
    const kw = searchInput.value.trim().toLowerCase();
    // 先固定全部筛选，后面我们再改造按钮下拉菜单
    const stageVal = "all";
    const campVal = "all";
    const tagVal = "all";

    return heroList.filter(hero => {
        const searchMatch = !kw ||
            hero.name.toLowerCase().includes(kw) ||
            hero.desc.toLowerCase().includes(kw) ||
            hero.camp.toLowerCase().includes(kw) ||
            hero.keywords.some(k => k.toLowerCase().includes(kw));
        return searchMatch;
    })
}

function renderList() {
    const arr = getFilteredHero();
    console.log("渲染列表数据：", arr);
    if (!arr.length) {
        heroCardList.innerHTML = `<div style="grid-column: 1/-1;text-align:center;color:#686e7c;padding:40px;">没有匹配到英雄</div>`;
        return;
    }
    heroCardList.innerHTML = arr.map(hero => `
        <div class="hero-card-item" data-id="${hero.id}">
            <div class="hero-card-cover">
                <img src="${hero.img}" alt="${hero.name}">
            </div>
        </div>
    `).join('');
    bindCardClick();
}

function bindCardClick() {
    document.querySelectorAll('.hero-card-item').forEach(card => {
        card.onclick = () => {
            const hid = Number(card.dataset.id);
            const hero = heroList.find(h => h.id === hid);
            if (!hero) return;
            modalBody.innerHTML = `
                <div class="hero-header-bar">
                    <div class="hero-icon-wrap">
                        <img class="hero-main-icon" src="${hero.avatarImg}" alt="${hero.name}">
                        <div class="hero-name-title">
                            <div class="hero-name-large">${hero.name}</div>
                            <div class="hero-subtitle">${hero.source}</div>
                            <div class="hero-tags-top">
                                <span class="tag-camp">${hero.camp}</span>
                                <span class="tag-stage ${getStageClass(hero.stage)}">${hero.stage}阶</span>
                                ${hero.keywords.map(k => `<span class="tag-small">${k}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="hero-card-tag">卡牌详情</div>
                </div>
                <div class="split-line"></div>
                <div class="card-compare-row">
                    <div class="card-compare-item">
                        <img class="compare-card-img" src="${hero.img}" alt="普通卡牌">
                        <div class="compare-label">普通形态</div>
                        <div style="padding:0 10px;text-align:center;color:#d9cdb8">${hero.desc}</div>
                    </div>
                    <div class="card-compare-item">
                        <img class="compare-card-img" src="${hero.awakeningImg}" alt="觉醒卡牌">
                        <div class="compare-label">觉醒形态</div>
                        <div style="padding:0 10px;text-align:center;color:#d9cdb8">${hero.awakeningDesc}</div>
                    </div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>基础属性</h4>
                    <div class="attr-grid">
                        <div class="attr-item">
                            <div class="attr-label">生命值</div>
                            <div class="attr-val">${hero.hp}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">法力</div>
                            <div class="attr-val">${hero.mp}/${hero.mpMax}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">物攻</div>
                            <div class="attr-val">${hero.physicalAtk}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">法攻</div>
                            <div class="attr-val">${hero.magicAtk}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">物防</div>
                            <div class="attr-val">${hero.physicalDef}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">法防</div>
                            <div class="attr-val">${hero.magicDef}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">攻速</div>
                            <div class="attr-val">${hero.atkSpeed}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">射程</div>
                            <div class="attr-val">${hero.atkRange}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">暴击率</div>
                            <div class="attr-val">${hero.critRate}</div>
                        </div>
                        <div class="attr-item">
                            <div class="attr-label">暴击伤害</div>
                            <div class="attr-val">${hero.critDmg}</div>
                        </div>
                    </div>
                </div>
                <div class="split-line"></div>
                <div class="modal-block">
                    <h4>技能</h4>
                    <div class="skill-row">
                        <img class="skill-icon" src="${hero.skillImg}" alt="${hero.skillName}">
                        <div>
                            <div class="skill-name">${hero.skillName}</div>
                            <div class="skill-text">${hero.skillDesc}</div>
                            <div class="skill-level"><span class="gold-text">Lv10：</span>${hero.skillLv10}</div>
                            <div class="skill-level"><span class="gold-text">Lv40：</span>${hero.skillLv40}</div>
                            <div class="skill-level"><span class="gold-text">Lv100：</span>${hero.skillLv100}</div>
                        </div>
                    </div>
                </div>
                <div class="split-line"></div>
                <div class="recommend-wrap">
                    <div class="recommend-title">推荐装备</div>
                    <div class="item-grid">
                        ${(hero.equipList || []).map(e=>`
                            <div class="item-card">
                                <img src="images/equip/${e}.png">
                                <div class="item-name">${e}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="recommend-wrap">
                    <div class="recommend-title">适配阵容</div>
                    <div class="item-grid">
                        ${(hero.teamList || []).map(t=>`
                            <div class="item-card">
                                <img src="images/team/${t}.png">
                                <div class="item-name">${t}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            detailModal.style.display = 'flex';
        }
    })
}

closeModal.onclick = () => {
    detailModal.style.display = 'none';
}
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) detailModal.style.display = 'none';
})

searchInput.addEventListener('input', renderList);

renderList();
console.log("✅ 初始化渲染执行完毕")
})
