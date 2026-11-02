const equipList = [
    {
        id: 1,
        name: "风暴巨剑",
        type: "基础装备",
        pos: "物理装备",
        desc: "穿戴给英雄，可以铸造成1件输出型普通装备。",
        source: "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
        img: "images/equip/fengbaojujian.png",
        castList: [
            {
                name: "纯净苍穹",
                effect: "唯一。每2秒获得10点法术攻击力，同时清除自身负面状态。",
                icon: "images/equip/equipsmall/chunjingcangqiong.png"
            },
            {
                name: "铸梦·逐风",
                effect: "唯一。战斗开始及之后每过8秒，快速进行4次普通攻击。",
                icon: "images/equip/equipsmall/zhumengzhufeng.png"
            },
            {
                name: "无尽巨剑",
                effect: "暴击率+30%，暴击效果+60%。暴击效果不可叠加。",
                icon: "images/equip/equipsmall/wujinjujian.png"
            },
            {
                name: "制裁之剑",
                effect: "唯一。造成伤害时降低目标30%生命恢复及护盾效果，持续10秒，不可叠加。若为普通攻击，效果提升至70%。",
                icon: "images/equip/equipsmall/zhicaizhijian.png"
            }
        ]
    },
    {
    "id": 2,
    "name": "圣者法典",
    "type": "基础装备",
    "pos": "法术装备",
    "desc": "穿戴给英雄，可以铸造成1件法术型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/shengzhefadian.png",
    "castList": [
        {
            "name": "贤者之书",
            "effect": "唯一。法力值上限-10，释放技能后获得20%基础法术攻击力，最多叠加6层。",
            "icon": "images/equip/equipsmall/xianzhezhishu.png"
        },
        {
            "name": "炽热支配者",
            "effect": "唯一。首次受到控制效果时，获得300点护盾并在接下来的15秒内免疫控制效果（压制除外）。",
            "icon": "images/equip/equipsmall/chirezhipeizhe.png"
        },
        {
            "name": "生命庭典",
            "effect": "唯一。受到伤害时会为自身和周围1格的己方单位恢复5%最大生命值，冷却2秒。",
            "icon": "images/equip/equipsmall/shengmingmodian.png"
        },
        {
            "name": "御灵之纱",
            "effect": "唯一。战斗开始时，获得等级×15点护盾。护盾被击破时对周围1格敌人造成1秒眩晕，击破者翻倍。",
            "icon": "images/equip/equipsmall/yulingzhisha.png"
        }
    ]
},
{
    "id": 3,
    "name": "雷鸣刃",
    "type": "基础装备",
    "pos": "物理装备",
    "desc": "穿戴给英雄，可以铸造成1件输出型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/leimingren.png",
    "castList": [
        {
            "name": "冥王",
            "effect": "唯一。穿戴者周围1格每有1个敌方单位，获得10点物理防御和15%基础物理攻击力。",
            "icon": "images/equip/equipsmall/mingwang.png"
        },
        {
            "name": "名刀·司命",
            "effect": "唯一。穿戴者首次受到致命伤害时会进入无敌和不可选中状态，持续1.5秒。",
            "icon": "images/equip/equipsmall/mingdaosiming.png"
        },
        {
            "name": "红糜",
            "effect": "唯一。周围1格没有友军时，获得25%伤害加成。每承受3%最大生命值的伤害，获得1%伤害加成，上限100%。",
            "icon": "images/equip/equipsmall/hongmo.png"
        },
        {
            "name": "魔律之刃",
            "effect": "唯一。释放技能时，35%概率重复释放一次。每有7级，额外提升1%概率。近战英雄总上限70%。",
            "icon": "images/equip/equipsmall/molvzhiren.png"
        }
    ]
},
{
    "id": 4,
    "name": "守护者之铠",
    "type": "基础装备",
    "pos": "通用装备",
    "desc": "穿戴给英雄，可以铸造成1件防御型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/shouhuzhezhikai.png",
    "castList": [
        {
            "name": "不祥征兆",
            "effect": "唯一。战斗前15秒，格挡50%普通攻击伤害，若攻击者攻速不低于1.5，则格挡70%普通攻击伤害。",
            "icon": "images/equip/equipsmall/buxiangzhengzhao.png"
        },
        {
            "name": "极寒风暴",
            "effect": "唯一。受到普攻时，降低目标20%攻击速度，持续2秒。被单一目标普攻5次后，远程目标将被冻结1秒，近战目标减半。",
            "icon": "images/equip/equipsmall/jihanfengbao.png"
        },
        {
            "name": "近卫荣耀",
            "effect": "唯一。战斗开始时，周围1格己方单位获得10点物理和法术防御，穿戴者获得双倍效果，不可叠加。",
            "icon": "images/equip/equipsmall/jinweirongyao.png"
        },
        {
            "name": "反伤重甲",
            "effect": "唯一。将受到伤害的30%以真实伤害回敬给目标。",
            "icon": "images/equip/equipsmall/fanshangzhongjia.png"
        }
    ]
},
    {
    "id": 5,
    "name": "力量腰带",
    "type": "基础装备",
    "pos": "通用装备",
    "desc": "穿戴给英雄，可以铸造成1件防御型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/liliangyaodai.png",
    "castList": [
        {
            "name": "霸者重铠",
            "effect": "唯一。生命值高于70%时获得40%伤害减免。",
            "icon": "images/equip/equipsmall/bazhezhongkai.png"
        },
        {
            "name": "不死鸟之眼",
            "effect": "唯一。增加15%基础生命值，生命恢复和护盾效果提升30%。",
            "icon": "images/equip/equipsmall/businiaozhiyan.png"
        },
        {
            "name": "魔女斗篷",
            "effect": "法术防御力+30。战斗开始时，获得等级×5点法术护盾。",
            "icon": "images/equip/equipsmall/monvdoupeng.png"
        },
        {
            "name": "红莲炎甲",
            "effect": "唯一。每2秒对周围1格敌人造成20（+5%穿戴者最大生命值）点法术伤害，并降低目标50%生命恢复和护盾效果，持续3秒。",
            "icon": "images/equip/equipsmall/honglianyanjia.png"
        }
    ]
},
    {
    "id": 6,
    "name": "破碎圣杯",
    "type": "基础装备",
    "pos": "法术装备",
    "desc": "穿戴给英雄，可以铸造成1件功能型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/posuishengbei.png",
    "castList": [
        {
            "name": "痛苦面具",
            "effect": "唯一。单次魔法伤害超过目标最大生命值的8%时会使目标点燃：每秒造成75%法术攻击力的真实伤害，持续3秒。",
            "icon": "images/equip/equipsmall/tongkumianju.png"
        },
        {
            "name": "法源之杯",
            "effect": "唯一。每秒回复5点法力值。",
            "icon": "images/equip/equipsmall/fayuanzhibei.png"
        },
        {
            "name": "破茧之衣",
            "effect": "唯一。战斗开始时，法力值+15，同时眩晕敌方等级最高3名英雄中的随机1名，持续1秒。目标每有10级，眩晕时间增加0.5秒，上限5秒。",
            "icon": "images/equip/equipsmall/pojianzhiyi.png"
        },
        {
            "name": "聚灵水晶",
            "effect": "唯一。受击时额外获得10点法力值，最多100点。达到上限后恢复20%最大生命值。",
            "icon": "images/equip/equipsmall/julingshuijing.png"
        }
    ]
},
    {
    "id": 7,
    "name": "速击之枪",
    "type": "基础装备",
    "pos": "物理装备",
    "desc": "穿戴给英雄，可以铸造成1件输出型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/sujizhiqiang.png",
    "castList": [
        {
            "name": "凝渊",
            "effect": "唯一。暴击率+20%。每次受击提升1%暴击率，暴击率达到100%时提升100%移动速度。",
            "icon": "images/equip/equipsmall/ningyuan.png"
        },
        {
            "name": "影牙",
            "effect": "攻击速度+50%。",
            "icon": "images/equip/equipsmall/yingya.png"
        },
        {
            "name": "破晓",
            "effect": "每次普通攻击降低目标3点物防，持续5秒。目标物防首次降为0时，附加1次目标15%最大生命值的物理伤害。",
            "icon": "images/equip/equipsmall/poxiao.png"
        },
        {
            "name": "日渊",
            "effect": "唯一，限定远程英雄。普通攻击会释放飞箭，对生命值最低的2名敌人造成55%物理攻击力的物理伤害。",
            "icon": "images/equip/equipsmall/riyuan.png"
        }
    ]
},
    {
    "id": 8,
    "name": "大棒",
    "type": "基础装备",
    "pos": "法术装备",
    "desc": "穿戴给英雄，可以铸造成1件输出型普通装备。",
    "source": "该卡通过商店购买、效果锦裹、拍卖等渠道获得。",
    "img": "images/equip/dabang.png",
    "castList": [
        {
            "name": "虚无法杖",
            "effect": "唯一。获得15点法术防御穿透。",
            "icon": "images/equip/equipsmall/xuwufazhang.png"
        },
        {
            "name": "寒霜侵袭",
            "effect": "唯一。普通攻击减少目标15%移速，持续5秒，最多叠加5层。叠满后目标受到的伤害提高20%，持续5秒，冷却时间10秒。",
            "icon": "images/equip/equipsmall/hanshuangqinxi.png"
        },
        {
            "name": "自然法杖",
            "effect": "唯一。法术攻击力+20%，远程穿戴者每消耗40点法力值（近战80点法力值）会将随机1名敌人变成小猪，持续2秒。",
            "icon": "images/equip/equipsmall/ziranfazhang.png"
        },
        {
            "name": "金色圣剑",
            "effect": "唯一。获得30%（+15%法术攻击力）攻击速度，每次普通攻击附带20（+30%法术攻击力）点法术伤害。",
            "icon": "images/equip/equipsmall/jinseshengjian.png"
        }
    ]
},
        {
    "id": 9,
    "name": "纯净苍穹",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "每2秒获得10点法术攻击力，同时清除自身负面状态。",
    "source": "由风暴巨剑铸造而成",
    "img": "images/equip/chunjingcangqiong.png",
    "combineParts": [
        {
            "name": "风暴巨剑",
            "icon": "images/equip/equipsmall/fengbaojujian.png"
        }
    ]
}
,
    {
        id: 10,
        name: "铸梦·逐风",
        type: "普通装备",
        pos: "物理装备",
        desc: "战斗开始及之后每过8秒，快速进行4次普通攻击。",
        source: "由风暴巨剑铸造而成",
        img: "images/equip/zhumengzhufeng.png",
       "combineParts": [
        {
            "name": "风暴巨剑",
            "icon": "images/equip/equipsmall/fengbaojujian.png"
        }
    ]
},
    {
        id: 11,
        name: "无尽巨剑",
        type: "普通装备",
        pos: "物理装备",
        desc: "暴击率+30%，暴击效果+60%。暴击效果不可叠加。",
        source: "由风暴巨剑铸造而成",
        img: "images/equip/wujinjujian.png",
        "combineParts": [
        {
            "name": "风暴巨剑",
            "icon": "images/equip/equipsmall/fengbaojujian.png"
        }
    ]
},
    {
        id: 12,
        name: "制裁之剑",
        type: "普通装备",
        pos: "物理装备",
        desc: "造成伤害时降低目标30%生命恢复及护盾效果，持续10秒，不可叠加。若为普通攻击，效果提升至70%。",
        source: "由风暴巨剑铸造而成",
        img: "images/equip/zhicaizhiren.png",
        "combineParts": [
        {
            "name": "风暴巨剑",
            "icon": "images/equip/equipsmall/fengbaojujian.png"
        }
    ]
},
    {
    "id": 13,
    "name": "贤者之书",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。法力值上限-10。释放技能后获得20%基础法术攻击力，最多叠加6层。",
    "source": "由圣者法典铸造而成",
    "img": "images/equip/xianzhezhishu.png",
    "combineParts": [
        {
            "name": "圣者法典",
            "icon": "images/equip/equipsmall/shengzhefadian.png"
        }
    ]
},
{
    "id": 14,
    "name": "炽热支配者",
    "type": "普通装备",
    "pos": "通用装备",
    "desc": "唯一。首次受到控制效果时，获得300点护盾并在接下来的15秒内免疫控制效果（压制除外）。",
    "source": "由圣者法典铸造而成",
    "img": "images/equip/chirezhipeizhe.png",
    "combineParts": [
        {
            "name": "圣者法典",
            "icon": "images/equip/equipsmall/shengzhefadian.png"
        }
    ]
},
{
    "id": 15,
    "name": "生命魔典",
    "type": "普通装备",
    "pos": "通用装备",
    "desc": "唯一。受到伤害时会为自身和周围1格的己方单位恢复5%最大生命值，冷却2秒。",
    "source": "由圣者法典铸造而成",
    "img": "images/equip/shengmingmodian.png",
    "combineParts": [
        {
            "name": "圣者法典",
            "icon": "images/equip/equipsmall/shengzhefadian.png"
        }
    ]
},
{
    "id": 16,
    "name": "御灵之纱",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。战斗开始时，获得等级×15点护盾。护盾被击破时对周围1格敌人造成1秒眩晕，击破者翻倍。",
    "source": "由圣者法典铸造而成",
    "img": "images/equip/yulingzhisha.png",
    "combineParts": [
        {
            "name": "圣者法典",
            "icon": "images/equip/equipsmall/shengzhefadian.png"
        }
    ]
},
{
    "id": 17,
    "name": "冥王",
    "type": "普通装备",
    "pos": "物理装备",
    "desc": "唯一。穿戴者周围1格每有1个敌方单位，获得10点物理防御和15%基础物理攻击力。",
    "source": "由雷鸣刃铸造而成",
    "img": "images/equip/mingwang.png",
    "combineParts": [
        {
            "name": "雷鸣刃",
            "icon": "images/equip/equipsmall/leimingren.png"
        }
    ]
},
{
    "id": 18,
    "name": "名刀·司命",
    "type": "普通装备",
    "pos": "通用装备",
    "desc": "唯一。穿戴者首次受到致命伤害时会进入无敌和不可选中状态，持续1.5秒。",
    "source": "由雷鸣刃铸造而成",
    "img": "images/equip/mingdaosiming.png",
    "combineParts": [
        {
            "name": "雷鸣刃",
            "icon": "images/equip/equipsmall/leimingren.png"
        }
    ]
},
{
    "id": 19,
    "name": "红魔",
    "type": "普通装备",
    "pos": "通用装备",
    "desc": "唯一。周围1格没有友军时，获得25%伤害加成。每承受3%最大生命值的伤害，获得1%伤害加成，上限100%。",
    "source": "由雷鸣刃铸造而成",
    "img": "images/equip/hongmo.png",
    "combineParts": [
        {
            "name": "雷鸣刃",
            "icon": "images/equip/equipsmall/leimingren.png"
        }
    ]
},
{
    "id": 20,
    "name": "魔律之刃",
    "type": "普通装备",
    "pos": "通用装备",
    "desc": "唯一。释放技能时，35%概率重复释放一次。每有7级，额外提升1%概率。近战英雄总上限70%。",
    "source": "由雷鸣刃铸造而成",
    "img": "images/equip/molvzhiren.png",
    "combineParts": [
        {
            "name": "雷鸣刃",
            "icon": "images/equip/equipsmall/leimingren.png"
        }
    ]
},
    {
    "id": 21,
    "name": "不祥征兆",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。战斗前15秒，格挡50%普通攻击伤害，若攻击者攻速不低于1.5，则格挡70%普通攻击伤害。",
    "source": "由守护者之铠铸造而成",
    "img": "images/equip/buxiangzhengzhao.png",
    "combineParts": [
        {
            "name": "守护者之铠",
            "icon": "images/equip/equipsmall/shouhuzhezhikai.png"
        }
    ]
},
{
    "id": 22,
    "name": "极寒风暴",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。受到普攻时，降低目标20%攻击速度，持续2秒。被单一目标普攻5次后，远程目标将被冻结1秒，近战目标减半。",
    "source": "由守护者之铠铸造而成",
    "img": "images/equip/jihanfengbao.png",
    "combineParts": [
        {
            "name": "守护者之铠",
            "icon": "images/equip/equipsmall/shouhuzhezhikai.png"
        }
    ]
},
{
    "id": 23,
    "name": "近卫荣耀",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。战斗开始时，周围1格己方单位获得10点物理和法术防御，穿戴者获得双倍效果，不可叠加。",
    "source": "由守护者之铠铸造而成",
    "img": "images/equip/jinweirongyao.png",
    "combineParts": [
        {
            "name": "守护者之铠",
            "icon": "images/equip/equipsmall/shouhuzhezhikai.png"
        }
    ]
},
{
    "id": 24,
    "name": "反伤重甲",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。将受到伤害的30%以真实伤害回敬给目标。",
    "source": "由守护者之铠铸造而成",
    "img": "images/equip/fanshangzhongjia.png",
    "combineParts": [
        {
            "name": "守护者之铠",
            "icon": "images/equip/equipsmall/shouhuzhezhikai.png"
        }
    ]
},
    {
    "id": 25,
    "name": "霸者重铠",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。生命值高于70%时获得40%伤害减免。",
    "source": "由力量腰带铸造而成",
    "img": "images/equip/bazhezhongkai.png",
    "combineParts": [
        {
            "name": "力量腰带",
            "icon": "images/equip/equipsmall/liliangyaodai.png"
        }
    ]
},
{
    "id": 26,
    "name": "不死鸟之眼",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。增加15%基础生命值，生命恢复和护盾效果提升30%。",
    "source": "由力量腰带铸造而成",
    "img": "images/equip/businiaozhiyan.png",
    "combineParts": [
        {
            "name": "力量腰带",
            "icon": "images/equip/equipsmall/liliangyaodai.png"
        }
    ]
},
{
    "id": 27,
    "name": "魔女斗篷",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "法术防御力+30。战斗开始时，获得等级×5点法术护盾。",
    "source": "由力量腰带铸造而成",
    "img": "images/equip/monvdoupeng.png",
    "combineParts": [
        {
            "name": "力量腰带",
            "icon": "images/equip/equipsmall/liliangyaodai.png"
        }
    ]
},
{
    "id": 28,
    "name": "红莲炎甲",
    "type": "普通装备",
    "pos": "防御装备",
    "desc": "唯一。每2秒对周围1格敌人造成20（+5%穿戴者最大生命值）点法术伤害，并降低目标50%生命恢复和护盾效果，持续3秒。",
    "source": "由力量腰带铸造而成",
    "img": "images/equip/honglianyanjia.png",
    "combineParts": [
        {
            "name": "力量腰带",
            "icon": "images/equip/equipsmall/liliangyaodai.png"
        }
    ]
},
    {
    "id": 29,
    "name": "痛苦面具",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。单次魔法伤害超过目标最大生命值的8%时会使目标点燃：每秒造成75%法术攻击力的真实伤害，持续3秒。",
    "source": "由破碎圣杯铸造而成",
    "img": "images/equip/tongkumianju.png",
    "combineParts": [
        {
            "name": "破碎圣杯",
            "icon": "images/equip/equipsmall/posuishengbei.png"
        }
    ]
},
{
    "id": 30,
    "name": "法源之杯",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。每秒回复5点法力值。",
    "source": "由破碎圣杯铸造而成",
    "img": "images/equip/fayuanzhibei.png",
    "combineParts": [
        {
            "name": "破碎圣杯",
            "icon": "images/equip/equipsmall/posuishengbei.png"
        }
    ]
},
{
    "id": 31,
    "name": "破茧之衣",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。战斗开始时，法力值+15，同时眩晕敌方等级最高3名英雄中的随机1名，持续1秒。目标每有10级，眩晕时间增加0.5秒，上限5秒。",
    "source": "由破碎圣杯铸造而成",
    "img": "images/equip/pojianzhiyi.png",
    "combineParts": [
        {
            "name": "破碎圣杯",
            "icon": "images/equip/equipsmall/posuishengbei.png"
        }
    ]
},
{
    "id": 32,
    "name": "聚灵水晶",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。受击时额外获得10点法力值，最多100点。达到上限后恢复20%最大生命值。",
    "source": "由破碎圣杯铸造而成",
    "img": "images/equip/julingshuijing.png",
    "combineParts": [
        {
            "name": "破碎圣杯",
            "icon": "images/equip/equipsmall/posuishengbei.png"
        }
    ]
},
    {
    "id": 33,
    "name": "凝渊",
    "type": "普通装备",
    "pos": "物理装备",
    "desc": "唯一。暴击率+20%。每次受击提升1%暴击率，暴击率达到100%时提升100%移动速度。",
    "source": "由速击之枪铸造而成",
    "img": "images/equip/ningyuan.png",
    "combineParts": [
        {
            "name": "速击之枪",
            "icon": "images/equip/equipsmall/sujizhiqiang.png"
        }
    ]
},
{
    "id": 34,
    "name": "影牙",
    "type": "普通装备",
    "pos": "物理装备",
    "desc": "攻击速度+50%。",
    "source": "由速击之枪铸造而成",
    "img": "images/equip/yingya.png",
    "combineParts": [
        {
            "name": "速击之枪",
            "icon": "images/equip/equipsmall/sujizhiqiang.png"
        }
    ]
},
{
    "id": 35,
    "name": "破晓",
    "type": "普通装备",
    "pos": "物理装备",
    "desc": "每次普通攻击降低目标3点物防，持续5秒。目标物防首次降为0时，附加1次目标15%最大生命值的物理伤害。",
    "source": "由速击之枪铸造而成",
    "img": "images/equip/poxiao.png",
    "combineParts": [
        {
            "name": "速击之枪",
            "icon": "images/equip/equipsmall/sujizhiqiang.png"
        }
    ]
},
{
    "id": 36,
    "name": "日渊",
    "type": "普通装备",
    "pos": "物理装备",
    "desc": "唯一，限定远程英雄。普通攻击会释放飞箭，对生命值最低的2名敌人造成55%物理攻击力的物理伤害。",
    "source": "由速击之枪铸造而成",
    "img": "images/equip/riyuan.png",
    "combineParts": [
        {
            "name": "速击之枪",
            "icon": "images/equip/equipsmall/sujizhiqiang.png"
        }
    ]
},
{
    "id": 37,
    "name": "虚无法杖",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。获得15点法术防御穿透。",
    "source": "由大棒铸造而成",
    "img": "images/equip/xuwufazhang.png",
    "combineParts": [
        {
            "name": "大棒",
            "icon": "images/equip/equipsmall/dabang.png"
        }
    ]
},
{
    "id": 38,
    "name": "寒霜侵袭",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。普通攻击减少目标15%移速，持续5秒，最多叠加5层。叠满后目标受到的伤害提高20%，持续5秒，冷却时间10秒。",
    "source": "由大棒铸造而成",
    "img": "images/equip/hanshuangqinxi.png",
    "combineParts": [
        {
            "name": "大棒",
            "icon": "images/equip/equipsmall/dabang.png"
        }
    ]
},
{
    "id": 39,
    "name": "自然法杖",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。法术攻击力+20%，远程穿戴者每消耗40点法力值（近战80点法力值）会将随机1名敌人变成小猪，持续2秒。",
    "source": "由大棒铸造而成",
    "img": "images/equip/ziranfazhang.png",
    "combineParts": [
        {
            "name": "大棒",
            "icon": "images/equip/equipsmall/dabang.png"
        }
    ]
},
{
    "id": 40,
    "name": "金色圣剑",
    "type": "普通装备",
    "pos": "法术装备",
    "desc": "唯一。获得30%（+15%法术攻击力）攻击速度，每次普通攻击附带20（+30%法术攻击力）点法术伤害。",
    "source": "由大棒铸造而成",
    "img": "images/equip/jinseshengjian.png",
    "combineParts": [
        {
            "name": "大棒",
            "icon": "images/equip/equipsmall/dabang.png"
        }
    ]
},
    {
        "id": 41,
        "name": "法潮灵杖",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。法术攻击力+25%。战斗开始，会获得左右1格的英雄的100%法术攻击力。",
        "source": "天赋装备",
        "img": "images/equip/fachaolingzhang.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 42,
        "name": "鼓舞之戒",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。战斗开始时，与穿戴者同阵营的英雄，提升30%最大生命值。",
        "source": "天赋装备",
        "img": "images/equip/guwuzhijie.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 43,
        "name": "梦魇之牙",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。法术攻击力+35%，造成法术伤害时添加梦魇印记，持续5秒。带有印记的单位阵亡时，对周围1格敌方单位造成穿戴者法术攻击力×2的法术伤害。",
        "source": "天赋装备",
        "img": "images/equip/mengyanyazhi.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 44,
        "name": "三分旗帜",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "仅三分英雄穿戴。将造成伤害的30%转化为治疗量，平均给所有三分英雄。",
        "source": "天赋装备",
        "img": "images/equip/sanfenqizhi.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 45,
        "name": "强敌克星",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。造成伤害的15%转化为真实伤害。对目标每普通攻击4次，会眩晕目标1秒。",
        "source": "天赋装备",
        "img": "images/equip/qiangdakexing.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 46,
        "name": "怒神项链",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。暴击率+50%，法术伤害可以暴击。",
        "source": "天赋装备",
        "img": "images/equip/nushenxianglian.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 47,
        "name": "魂灭灵冠",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。阵亡时，对周围1格敌人造成目标35%最大生命值的真实伤害。",
        "source": "天赋装备",
        "img": "images/equip/hunmielingguan.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 48,
        "name": "灵泉项链",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。战斗开始时，周围1格的单位每秒回复4点法力值。穿戴者法力值上限-10。",
        "source": "天赋装备",
        "img": "images/equip/lingquanxianglian.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 49,
        "name": "护命灵珠",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。每4秒获得基础生命值25%的护盾。拥有护盾时伤害提升25%，护盾被击破则移除。",
        "source": "天赋装备",
        "img": "images/equip/huminglingzhu.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 50,
        "name": "断念",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。造成伤害时，本场战斗降低敌方单位20%最大生命值上限（不可叠加）。",
        "source": "天赋装备",
        "img": "images/equip/duannian.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 51,
        "name": "末世",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。普通攻击会减少目标2%最大生命值并恢复等量生命值。穿戴者为近战英雄时，效果翻倍。",
        "source": "天赋装备",
        "img": "images/equip/moshi.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 52,
        "name": "根源之力",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。每4秒对生命值最低的敌方单位造成600%法术攻击力的法术伤害。",
        "source": "天赋装备",
        "img": "images/equip/genyuanzhili.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 53,
        "name": "魂祭绝刃",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。攻击速度+50%，物理和法术吸血+30%。战斗开始时，扣除50%最大生命值。",
        "source": "天赋装备",
        "img": "images/equip/hunjijueren.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 54,
        "name": "不屈意志",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。战斗开始及之后每3秒获得场上友军不屈意志数量×2的临时等级。阵亡时，将自身等级的30%平均分配给穿戴不屈意志的友军。",
        "source": "天赋装备",
        "img": "images/equip/buquyizhi.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 55,
        "name": "灵泉法杖",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。获得【闪现】，每次闪现后普攻附带一次重击：造成300%伤害并且眩晕敌方1秒，每次击败敌方单位再次触发闪现。",
        "source": "天赋装备",
        "img": "images/equip/lingquanfazhang.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 56,
        "name": "破妄之刃",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。移动速度提升60%，造成伤害的50%会转化为真实伤害。免疫减速效果。",
        "source": "天赋装备",
        "img": "images/equip/powangzhiren.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 57,
        "name": "破阵战芒",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。仅1-3阶英雄可穿戴。战斗开始时，获得等级×1%的伤害加成和攻速，上限50%。",
        "source": "天赋装备",
        "img": "images/equip/pozhenzhanmang.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    },
    {
        "id": 58,
        "name": "光辉圣铠",
        "type": "天赋装备",
        "pos": "天赋",
        "desc": "唯一。每秒恢复50+4%最大生命值。",
        "source": "天赋装备",
        "img": "images/equip/guanghuishengkai.png",
        "adaptHero": [
            {
                "heroName": "",
                "heroImg": "images/heroes/.png"
            }
        ]
    }
];
const equipCardList = document.getElementById("equipCardList");
const searchInput = document.getElementById("searchInput");
const equipTypeFilter = document.getElementById("equipTypeFilter");
const equipPosFilter = document.getElementById("equipPosFilter");
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// 根据装备名打开弹窗
function openEquipByName(name){
    const target = equipList.find(e=>e.name === name);
    if(!target) return;
    renderModal(target);
}

// 单独抽离弹窗渲染函数，复用
function renderModal(item){
    let partTitle = "";
    let partHtml = "";
    let adaptHeroTitle = "";
    let adaptHeroHtml = "";

    // 判断是不是天赋装备，单独渲染适配英雄
    if(item.type === "天赋装备"){
        partTitle = "天赋装备";
        partHtml = `<div style="color:#888;">无合成散件</div>`;

        // 适配英雄区域
        if (Array.isArray(item.adaptHero) && item.adaptHero.length) {
            adaptHeroTitle = "适配英雄";
            adaptHeroHtml = item.adaptHero.map(h => `
                <div class="adapt-hero-item">
                    <img src="${h.heroImg}" alt="${h.heroName}">
                    <span>${h.heroName}</span>
                </div>
            `).join('');
        } else {
            adaptHeroTitle = "适配英雄";
            adaptHeroHtml = `<div style="color:#888;">暂无适配英雄</div>`;
        }
    }else{
        // 基础装备：可铸造成装
        if (Array.isArray(item.castList) && item.castList.length > 0) {
            partTitle = "可铸造成装";
            item.castList.forEach(c => {
                partHtml += `<div class="cast-item">
                    <img class="cast-icon" src="${c.icon}" alt="" onclick="openEquipByName('${c.name}')">
                    <div class="cast-text">
                        <span class="cast-name">${c.name}</span>
                        <span class="cast-effect">${c.effect}</span>
                    </div>
                </div>`;
            });
        } else {
            // 普通装备：合成散件
            partTitle = "合成散件";
            if (Array.isArray(item.combineParts) && item.combineParts.length) {
                item.combineParts.forEach(p => {
                    partHtml += `<div class="cast-item">
                        <img class="cast-icon" src="${p.icon}" alt="" onclick="openEquipByName('${p.name}')">
                        <div class="cast-text">
                            <span class="cast-name">${p.name}</span>
                        </div>
                    </div>`;
                });
            } else {
                partHtml = `<div style="color:#888;">无合成散件</div>`;
            }
        }
    }

    // 来源文字，去掉sourceImg
    let sourceHtml = `<p class="equip-modal-source">来源：${item.source}</p>`;

    modalBody.innerHTML = `
    <div class="equip-modal-wrap">
        <div class="equip-modal-left">
            <div class="equip-modal-card">
                <img src="${item.img}" alt="${item.name}">
                <div class="equip-modal-card-name">${item.name}</div>
            </div>
        </div>
        <div class="equip-modal-right">
            <h2 class="equip-modal-title">${item.name}<span class="equip-modal-tag">${item.type} · ${item.pos}</span></h2>
            <p class="equip-modal-desc">${item.desc}</p>
            ${sourceHtml}
            <hr class="equip-divider">
            <h3 class="equip-cast-title">${partTitle}</h3>
            <div class="cast-list">${partHtml}</div>
            ${item.type === "天赋装备" ? `
                <hr class="equip-divider">
                <h3 class="equip-cast-title">${adaptHeroTitle}</h3>
                <div class="adapt-hero-wrap">${adaptHeroHtml}</div>
            ` : ''}
        </div>
    </div>`;
    detailModal.style.display = "flex";
}

function render() {
    const kw = searchInput.value.trim().toLowerCase();
    const filterType = equipTypeFilter.value;
    const filterPos = equipPosFilter.value;
    equipCardList.innerHTML = "";
    equipList.forEach(item => {
        const matchKw = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);
        const matchT = filterType === "all" || item.type === filterType;
        const matchP = filterPos === "all" || item.pos === filterPos;
        if (!(matchKw && matchT && matchP)) return;
        const div = document.createElement("div");
        div.className = "equip-card-item";
        div.innerHTML = `<div class="equip-card-cover"><img src="${item.img}" alt="${item.name}"></div>`;
        div.onclick = () => renderModal(item);
        equipCardList.appendChild(div);
    });
}
closeModal.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
    if (e.target === detailModal) detailModal.style.display = "none";
};
searchInput.addEventListener("input", render);
equipTypeFilter.addEventListener("change", render);
equipPosFilter.addEventListener("change", render);
render();
