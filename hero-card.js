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
,
    {
    "id": 16,
    "name": "项羽",
    "stage": 2,
    "camp": "大河流域",
    "avatarImg": "images/heroes/xiangyu.png",
    "img": "images/herocard/xiangyu.png",
    "awakeningImg": "images/herocard/awakening/xiangyu.png",
    "skillImg": "images/herocard/skills/pofuchenzhou.png",
    "desc": "牺牲：所有图腾等级永久+3且本回合你的召唤物免疫控制。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["牺牲", "核心功能"],
    "hp": 330,
    "mp": 40,
    "mpMax": 70,
    "physicalAtk": 32,
    "magicAtk": 0,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "破釜沉舟",
    "skillDesc": "被动：项羽在战斗开始时向前冲撞3格距离，击退沿途敌人并在结束时击飞前方敌人造成100+5%项羽最大生命值的物理伤害。主动：项羽发出怒吼同时恢复自身150+5%最大生命值的生命值。",
    "skillLv10": "恢复效果提升至300+8%最大生命值",
    "skillLv40": "怒吼还会降低周围1格敌人50%攻击速度，持续5秒",
    "skillLv100": "技能每命中1名敌人降低自身10%受到的伤害，最多5层，持续到回合结束",
    "awakeningDesc": "牺牲：所有图腾等级永久+6且本回合你的召唤物免疫控制。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 17,
    "name": "虞姬",
    "stage": 2,
    "camp": "大河流域",
    "avatarImg": "images/heroes/yuji.png",
    "img": "images/herocard/yuji.png",
    "awakeningImg": "images/herocard/awakening/yuji.png",
    "skillImg": "images/herocard/skills/zhenqianwu.png",
    "desc": "开团：场上每有1个图腾，自身及随机2名不同己方英雄等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["开团", "图腾", "核心输出", "核心功能"],
    "hp": 210,
    "mp": 10,
    "mpMax": 60,
    "physicalAtk": 36,
    "magicAtk": 0,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 1.00,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 5,
    "skillName": "阵前舞",
    "skillDesc": "被动：虞姬在普攻时有30%的概率会追加1次攻击。主动：虞姬冲向目标敌人对其造成120%物理攻击力的物理伤害，随后向后翻腾对目标敌人快速射出4支弩矢，每支弩矢造成50+80%物理攻击力的物理伤害。",
    "skillLv10": "弩矢伤害提升至50+120%物理攻击力",
    "skillLv40": "落地时提升自身50%攻击速度，持续3秒",
    "skillLv100": "冲向目标敌人时还会将其眩晕1.5秒",
    "awakeningDesc": "开团：场上每有1个图腾，自身及随机4名不同己方英雄等级+1。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 18,
    "name": "蔡文姬",
    "stage": 2,
    "camp": "三分之地",
    "avatarImg": "images/heroes/caiwenji.png",
    "img": "images/herocard/caiwenji.png",
    "awakeningImg": "images/herocard/awakening/caiwenji.png",
    "skillImg": "images/herocard/skills/siwu xie.png",
    "desc": "每当你使用【三分】英雄牌时，等级最低的其他3名【三分】英雄等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": [],
    "hp": 270,
    "mp": 0,
    "mpMax": 0,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 2,
    "skillName": "思无邪",
    "skillDesc": "被动：蔡文姬施放琴音每秒为自身周围1格的友军恢复30点生命值。",
    "skillLv10": "为范围内的友军增加6点物理防御力和法术防御力",
    "skillLv40": "恢复生命值提升至80点，双防数值提升为12点",
    "skillLv100": "技能效果范围扩大至周围2格，恢复生命值提升至150点",
    "awakeningDesc": "每当你使用【三分】英雄牌时，等级最低的其他3名【三分】英雄等级+2。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 19,
    "name": "鬼谷子",
    "stage": 2,
    "camp": "大河流域",
    "avatarImg": "images/heroes/guiguzi.png",
    "img": "images/herocard/guiguzi.png",
    "awakeningImg": "images/herocard/awakening/guiguzi.png",
    "skillImg": "images/herocard/skills/wanwuyouling.png",
    "desc": "在场时，召唤先知图腾。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["核心功能"],
    "hp": 270,
    "mp": 20,
    "mpMax": 35,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 2,
    "skillName": "万物有灵",
    "skillDesc": "鬼谷子使用玄微子包裹随机1名友方英雄使其临时等级+5，持续8秒（不可叠加）。",
    "skillLv10": "临时等级增加提升至10",
    "skillLv40": "增益目标+1",
    "skillLv100": "增益效果及持续时间翻倍",
    "awakeningDesc": "在场时，召唤并强化先知图腾。强化后的先知图腾：开团时，距离最近的4名己方英雄获得装备玄微之种。",
    "extraInfo": {
        "先知图腾": "开团：距离最近的2名己方英雄获得装备玄微之种。",
        "玄微之种": "穿戴者获得牺牲：生命值百分比最低的己方英雄恢复200（+20%最大生命值）点生命值。"
    },
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,
                          {
    "id": 20,
    "name": "大乔",
    "stage": 2,
    "camp": "三分之地",
    "avatarImg": "images/heroes/daqiao.png",
    "img": "images/herocard/daqiao.png",
    "awakeningImg": "images/herocard/awakening/daqiao.png",
    "skillImg": "images/herocard/skills/liyuezhichao.png",
    "desc": "你的英雄每触发2次登场效果，大乔的法力值上限永久-5且等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["登场"],
    "hp": 270,
    "mp": 20,
    "mpMax": 45,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "鲤跃之潮",
    "skillDesc": "大乔唤出1道波浪前行，击飞并眩晕沿途敌人1秒，造成100+100%法术攻击力的法术伤害。",
    "skillLv10": "技能伤害提升至100+150%法术攻击力",
    "skillLv40": "每第3次施法会施放1道巨型波浪，造成100+200%法术攻击力的法术伤害",
    "skillLv100": "每次施法都施放巨型波浪",
    "awakeningDesc": "每当你的英雄触发登场效果，大乔的法力值上限永久-5且等级+1。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 20,
    "name": "大乔",
    "stage": 2,
    "camp": "三分之地",
    "avatarImg": "images/heroes/daqiao.png",
    "img": "images/herocard/daqiao.png",
    "awakeningImg": "images/herocard/awakening/daqiao.png",
    "skillImg": "images/herocard/skills/liyuezhichao.png",
    "desc": "你的英雄每触发2次登场效果，大乔的法力值上限永久-5且等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["登场"],
    "hp": 270,
    "mp": 20,
    "mpMax": 45,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "鲤跃之潮",
    "skillDesc": "大乔唤出1道波浪前行，击飞并眩晕沿途敌人1秒，造成100+100%法术攻击力的法术伤害。",
    "skillLv10": "技能伤害提升至100+150%法术攻击力",
    "skillLv40": "每第3次施法会施放1道巨型波浪，造成100+200%法术攻击力的法术伤害",
    "skillLv100": "每次施法都施放巨型波浪",
    "awakeningDesc": "每当你的英雄触发登场效果，大乔的法力值上限永久-5且等级+1。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 21,
    "name": "百里玄策",
    "stage": 2,
    "camp": "河洛",
    "avatarImg": "images/heroes/bailixuance.png",
    "img": "images/herocard/bailixuance.png",
    "awakeningImg": "images/herocard/awakening/bailixuance.png",
    "skillImg": "images/herocard/skills/mengyanggousuo.png",
    "desc": "闪现 整备：你的闪现英雄上回合每击败过1名敌方英雄，随机1名闪现英雄等级+1（击败次数：0）。击败临时英雄也计入击败次数。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["闪现", "整备"],
    "hp": 240,
    "mp": 35,
    "mpMax": 45,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 16,
    "magicDef": 16,
    "atkSpeed": 0.80,
    "critRate": "20%",
    "critDmg": "40%",
    "atkRange": 2,
    "skillName": "梦魇钩锁",
    "skillDesc": "玄策舞动钩镰对目标敌人造成50+100%物理攻击力的物理伤害，而后将其甩向玄策身后，落地时造成50+100%物理攻击力的物理伤害并眩晕1秒。",
    "skillLv10": "钩镰伤害提升至50+130%物理攻击力",
    "skillLv40": "钩镰会钩住目标6秒，敌人落地玄策立即突进至其身后，对沿途的敌人造成100+200%物理攻击力的物理伤害，玄策普攻对被钩住的目标造成120%物理攻击力的物理伤害",
    "skillLv100": "施法时会标记当前目标，降低其10点物理及法术防御力；标记目标被击败时玄策进入狂暴状态（攻速提高150%，移速提高40%），持续7秒",
    "awakeningDesc": "闪现 整备：你的闪现英雄上回合每击败过1名敌方英雄，随机1名闪现英雄等级+2（击败次数：0）。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 22,
    "name": "百里守约",
    "stage": 2,
    "camp": "河洛",
    "avatarImg": "images/heroes/bailishouyue.png",
    "img": "images/herocard/bailishouyue.png",
    "awakeningImg": "images/herocard/awakening/bailishouyue.png",
    "skillImg": "images/herocard/skills/miaozhun.png",
    "desc": "每当你拥有牺牲效果的英雄阵亡时，本回合百里守约的法力值上限-20。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["牺牲"],
    "hp": 210,
    "mp": 60,
    "mpMax": 80,
    "physicalAtk": 40,
    "magicAtk": 0,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 1.00,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "瞄准",
    "skillDesc": "百里守约朝最远的敌人（英雄优先）狙击。子弹对首名命中敌人造成50+700%物理攻击力的物理伤害。",
    "skillLv10": "狙击伤害提升至200+800%物理攻击力",
    "skillLv40": "狙击子弹在击败敌人后会继续行进但伤害衰减30%，最多衰减60%",
    "skillLv100": "狙击子弹的伤害不再衰减",
    "awakeningDesc": "每当你拥有牺牲效果的英雄阵亡时，本回合百里守约的法力值上限-40。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,
{
    "id": 23,
    "name": "梦奇",
    "stage": 2,
    "camp": "",
    "avatarImg": "images/heroes/mengqi.png",
    "img": "images/herocard/mengqi.png",
    "awakeningImg": "images/herocard/awakening/mengqi.png",
    "skillImg": "images/herocard/skills/mengjingyingrao.png",
    "desc": "退场：获得1张1阶英雄兑换券。败阵：提升英雄兑换券的品阶。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["退场", "败阵"],
    "hp": 330,
    "mp": 30,
    "mpMax": 80,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "梦境萦绕",
    "skillDesc": "梦奇使用泡泡包裹自身，恢复8%最大生命值；1秒后泡泡破碎，对周围敌人造成50+70%法术攻击力的法术伤害，并降低5点物理防御和法术防御，持续5秒。",
    "skillLv10": "恢复提升至100+10%最大生命值，泡泡破碎伤害提升至50+100%法术攻击力",
    "skillLv40": "额外保护1名生命值最低的友军",
    "skillLv100": "恢复提升至100+20%最大生命值",
    "awakeningDesc": "退场：获得2张1阶英雄兑换券。败阵：提升英雄兑换券的品阶。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 24,
    "name": "公孙离",
    "stage": 2,
    "camp": "",
    "avatarImg": "images/heroes/gongsunli.png",
    "img": "images/herocard/gongsunli.png",
    "awakeningImg": "images/herocard/awakening/gongsunli.png",
    "skillImg": "images/herocard/skills/guluduanxiang.png",
    "desc": "夺取 开团：场上每有1名已觉醒英雄，攻击速度+15%。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["夺取", "开团", "核心输出", "核心功能"],
    "hp": 210,
    "mp": 20,
    "mpMax": 80,
    "physicalAtk": 36,
    "magicAtk": 0,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 1.00,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 5,
    "skillName": "孤鹜断霞",
    "skillDesc": "公孙离朝目标方向丢出纸伞，纸伞到达最远端悬停一段时间后收回。纸伞会对所有首次命中的敌人造成100%物理攻击力的物理伤害，并在悬停处对触碰到的敌人每秒造成100%物理攻击力的物理伤害且降低其40%移动速度。",
    "skillLv10": "纸伞不在手中时提升30%攻击速度；击退并眩晕纸伞命中的首个敌人1.5秒",
    "skillLv40": "伞脱手后获得的攻速增益提升至50%",
    "skillLv100": "控制时间延长至2.5秒，同时击退距离大幅增加",
    "awakeningDesc": "夺取 开团：场上每有1名已觉醒英雄，攻击速度+30%。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 25,
    "name": "沈梦溪",
    "stage": 2,
    "camp": "河洛",
    "avatarImg": "images/heroes/shenmengxi.png",
    "img": "images/herocard/shenmengxi.png",
    "awakeningImg": "images/herocard/awakening/shenmengxi.png",
    "skillImg": "images/herocard/skills/zonghebaozha.png",
    "desc": "每对沈梦溪使用1张效果牌，本回合法力值上限-15。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": [],
    "hp": 240,
    "mp": 10,
    "mpMax": 40,
    "physicalAtk": 24,
    "magicAtk": 40,
    "physicalDef": 14,
    "magicDef": 14,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 4,
    "skillName": "综合爆弹",
    "skillDesc": "沈梦溪向敌人密集处投掷1枚混合炸弹，造成100+100%法术攻击力的法术伤害。技能炸弹下落速度加快。",
    "skillLv10": "技能伤害提升至125+175%法术攻击力",
    "skillLv40": "炸弹爆炸半径扩大1格",
    "skillLv100": "爆炸时眩晕敌人0.5秒",
    "awakeningDesc": "每对沈梦溪使用1张效果牌，本回合法力值上限-30。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 26,
    "name": "米莱狄",
    "stage": 2,
    "camp": "日落海",
    "avatarImg": "images/heroes/milaidi.png",
    "img": "images/herocard/milaidi.png",
    "awakeningImg": "images/herocard/awakening/milaidi.png",
    "skillImg": "images/herocard/skills/jixiepucon.png",
    "desc": "召唤单位获得3临时等级。整备：该临时等级及阿科米亚核心等级额外+3。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["临时等级", "整备", "阿科米亚核心", "核心功能"],
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
    "skillName": "机械仆从",
    "skillDesc": "米莱狄在距离自己最远的敌人附近召唤1个机械仆从，继承自己100%法术攻击力。仆从每次攻击造成30+20%法术攻击力的法术伤害，机械仆从到达最大数量后，再次施放技能，增加仆从60%攻击速度，持续5秒。（不可叠加）机械仆从基础攻击速度为1。",
    "skillLv10": "每次召唤2个机械仆从；攻击伤害提升至30+60%法术攻击力",
    "skillLv40": "机械仆从获得200%法术攻击的额外生命值；机械仆从到达上限后，再次施放技能转而恢复仆从们的所有生命值",
    "skillLv100": "召唤机械仆从上限提升至4",
    "awakeningDesc": "召唤单位获得6临时等级。整备：该临时等级及阿科米亚核心等级额外+3，触发2次。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 27,
    "name": "盾山",
    "stage": 2,
    "camp": "河洛",
    "avatarImg": "images/heroes/dunshan.png",
    "img": "images/herocard/dunshan.png",
    "awakeningImg": "images/herocard/awakening/dunshan.png",
    "skillImg": "images/herocard/skills/budongrushan.png",
    "desc": "牺牲：获得1张古币。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["牺牲", "核心坦克", "核心功能"],
    "hp": 330,
    "mp": 25,
    "mpMax": 45,
    "physicalAtk": 24,
    "magicAtk": 20,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "不动如山",
    "skillDesc": "盾山架盾进入防御形态获得25%伤害减免，持续3秒。期间每秒对身前敌人造成50点法术伤害。",
    "skillLv10": "伤害减免提升至35%，持续时间延长至8秒",
    "skillLv40": "石盾范围扩大并降低接触敌人35%攻击速度",
    "skillLv100": "开战後立即进入防御形态，持续至回合结束",
    "awakeningDesc": "牺牲：获得1张精致古币。",
    "relatedProduct": {
        "name": "古币",
        "effect": "转瞬 指定1名【河洛】英雄等级+2。"
    },
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 28,
    "name": "亚连",
    "stage": 2,
    "camp": "日落海",
    "avatarImg": "images/heroes/yalian.png",
    "img": "images/herocard/yalian.png",
    "awakeningImg": "images/herocard/awakening/yalian.png",
    "skillImg": "images/herocard/skills/liuxingzhan.png",
    "desc": "整备：你穿戴装备最多的1名英雄等级+2，且阿科米亚核心等级+1。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["整备", "阿科米亚核心"],
    "hp": 300,
    "mp": 30,
    "mpMax": 60,
    "physicalAtk": 32,
    "magicAtk": 30,
    "physicalDef": 18,
    "magicDef": 18,
    "atkSpeed": 0.80,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "流星斩",
    "skillDesc": "被动：亚连使用“赤影”攻击时造成法术伤害，使用“守心”攻击时造成物理伤害，双剑合击时造成35%物理攻击力+35%法术攻击力的真实伤害。且普攻和技能伤害可以暴击。亚连对敌人造成伤害时会获得怒气层数，每层为自身提供2%的伤害减免，最多10层。主动：亚连挥舞双剑，对前方目标进行3次快速斩击，分别造成65%法术攻击力的法术伤害和2次65%物理攻击力的物理伤害。",
    "skillLv10": "技能提升至5段，还会击飞目标敌人",
    "skillLv40": "技能提升至7段，物理伤害提升至115%；施放技能后怒气层数上限提高至20层",
    "skillLv100": "技能变为大范围圆形",
    "awakeningDesc": "整备：你穿戴装备最多的1名英雄等级+2，且阿科米亚核心等级+1，触发2次。",
    "equipList": ["e1", "e2"],
    "teamList": ["t1"]
}
,{
    "id": 29,
    "name": "蒙恬",
    "stage": 2,
    "camp": "逐鹿",
    "avatarImg": "images/heroes/mengtian.png",
    "img": "images/herocard/mengtian.png",
    "awakeningImg": "images/herocard/awakening/mengtian.png",
    "skillImg": "images/herocard/skills/xuanyongzhongjiang.png",
    "desc": "牺牲：召唤2名与自身等级相同的玄雍士兵。",
    "source": "该卡牌通过商店购买、拍卖等渠道获得",
    "keywords": ["牺牲"],
    "hp": 330,
    "mp": 0,
    "mpMax": 60,
    "physicalAtk": 32,
    "magicAtk": 0,
    "physicalDef": 20,
    "magicDef": 20,
    "atkSpeed": 0.60,
    "critRate": "0%",
    "critDmg": "40%",
    "atkRange": 1,
    "skillName": "玄雍众将",
    "skillDesc": "蒙恬召唤出1名玄雍士兵列阵作战（持续20秒，至多2名）。每名士兵会分担蒙恬5%受到的伤害。玄雍士兵基础攻击速度为1，物理攻击力为6。",
    "skillLv10": "士兵分担伤害提升至12%",
    "skillLv40": "每次召唤2名士兵（至多4名）",
    "skillLv100": "每次召唤4名士兵",
    "awakeningDesc": "牺牲：召唤4名与自身等级相同的玄雍士兵。",
    "relatedProduct": {
        "name": "玄雍士兵",
        "effect": "令则行，禁则止，无有所怠！"
    },
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
