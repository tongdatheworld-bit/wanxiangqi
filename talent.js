const talentList = [
   [
    {
        "id": "T001",
        "name": "预言家",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "yuyanjia.png",
        "desc": "分别获得1张天赋牌胜利预言与失败预言：预测战斗结果，正确可获得奖励。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T002",
        "name": "整装待发",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "zhengzhuangdaifa.png",
        "desc": "若回合内没有打出英雄牌，下回合开始时，获得2能量。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name":"无", "url":null},
        "fitHero": {"name": "嬴政", "url":"#hero-yingzheng", "avatar":"images/heroes/yingzheng.png"},
        "fitPlayer": {"name": "明先生", "url":"#player-ming", "avatar":"images/players/mingxiansheng.png"},
        "fitTeam": {"name":"明先生雷霆战机", "url":"#team-mingleiting"}
    },
    {
        "id": "T003",
        "name": "兵行诡招",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "bingxingguizhao.png",
        "desc": "棋手生命值-10，战斗开始时，己方每名英雄+2临时等级。战斗胜利时，获得1棋手生命值，临时等级额外+1。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T004",
        "name": "存款利息",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "cunkuanlixi.png",
        "desc": "获得3能量。回合结束时，你每有7能量，额外获得1能量。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T005",
        "name": "大河新援",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "大河流域",
        "img": "dahexinyuan.png",
        "desc": "获得2能量，以及随机1张2-3阶【大河流域】英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T006",
        "name": "二象性",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "erxiangxing.png",
        "desc": "获得1张天赋牌二象坍缩：随机生效1个获取英雄牌的效果（详情查看关联卡牌）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T007",
        "name": "防御领域",
        "rank": "铜天赋",
        "talentType": "生存类天赋",
        "camp": "通用",
        "img": "fangyulingyu.png",
        "desc": "棋手每次受到的伤害减少2点。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T008",
        "name": "复印机",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "fuyinji.png",
        "desc": "获得2张天赋牌复印机：指定1名1-3阶英雄，获得该英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T009",
        "name": "干将·强化",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "ganjiangqianghua.png",
        "desc": "战斗开始时，干将莫邪获得1件【法源之杯】。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "干将莫邪",
            "url": "#hero-ganjiangmoye",
            "avatar": "images/heroes/ganjiangmoye.png"
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T010",
        "name": "好聚好散",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "haojuhaosan.png",
        "desc": "获得1张天赋牌体面离场：指定移除一名英雄，获得能量。此英雄0/1/2/3觉醒进度时，获得3/6/9/12能量。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T011",
        "name": "河洛新援",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "河洛",
        "img": "heluoxinyuan.png",
        "desc": "获得2能量，以及随机1张2-3阶【河洛】英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T012",
        "name": "班叔的遗留物",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "banshudeyiliuwu.png",
        "desc": "获得2级电磁弹簧：在指定位置构筑1个2级电磁弹簧（敌方踩中时会被弹至战场后排）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T013",
        "name": "加速成长",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "jiasuchengzhang.png",
        "desc": "获得2张天赋牌加速成长：指定1名英雄等级+5。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T014",
        "name": "节能商店",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "jienengshangdian.png",
        "desc": "每次手动刷新商店后，总有1张商店卡牌所需能量-1。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T015",
        "name": "刻舟减蓝",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "kezhoujianlan.png",
        "desc": "英雄20级后，法力值上限-10。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T016",
        "name": "狂铁·强化",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "kuangtieqianghua.png",
        "desc": "狂铁触发卡牌效果时，自身+10%攻速。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "狂铁",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T017",
        "name": "战争头牌",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "zhanzhengtoupai.png",
        "desc": "每回合获得1个品阶数字，打出相同品阶的英雄牌时，额外+4等级。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T018",
        "name": "瓶中人",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "pingzhongren.png",
        "desc": "获得1张天赋牌契约瓶：获胜时，累积3张随机英雄牌；失败时，损失所累积的一半英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T019",
        "name": "破格",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "poge.png",
        "desc": "回合开始商店自动刷新时，会出现1个高1阶英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T020",
        "name": "日落海新援",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "日落海",
        "img": "riluohaixinyuan.png",
        "desc": "获得2能量，以及随机1张2-3阶【日落海】英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "日落海",
            "url": null
        }
    },
    {
        "id": "T021",
        "name": "三分新援",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "三分",
        "img": "sanfenxinyuan.png",
        "desc": "获得2能量，以及随机1张2-3阶【三分】英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "三分",
            "url": null
        }
    },
    {
        "id": "T022",
        "name": "三十而立",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "sanshierli.png",
        "desc": "备战阶段中，英雄总等级到达30级时，获得6棋手经验。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T023",
        "name": "先苦后甜",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "xiankuhoutian.png",
        "desc": "选取天赋后，当你输掉2场战斗时，获得6棋手经验。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T024",
        "name": "里程碑",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "lichengbei.png",
        "desc": "棋手到达5级时，获得5能量、1张装备箱。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "无", "url": null}
    },
    {
        "id": "T025",
        "name": "五福临门",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "wufulinmen.png",
        "desc": "获得1张天赋牌五福临门：随机获得5张英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无","url": null},
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T026",
        "name": "双人游",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "shuangrenyou.png",
        "desc": "随机获得2张2-3阶英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "无", "url": null}
    },
    {
        "id": "T027",
        "name": "小电池包",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "通用",
        "img": "xiaodianchibao.png",
        "desc": "获得5能量。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T028",
        "name": "专注射击",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "zhuanzhusheji.png",
        "desc": "战斗开始时，你后两排英雄每次普攻获得3%攻速和3点物理攻击力，上限10层。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T029",
        "name": "逐鹿新援",
        "rank": "铜天赋",
        "talentType": "资源类天赋",
        "camp": "逐鹿",
        "img": "zhuluxinyuan.png",
        "desc": "获得2能量，以及随机1张2-3阶【逐鹿】英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T030",
        "name": "猪猪",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "zhuzhu.png",
        "desc": "战斗开始时，敌方2名随机英雄变为小猪，持续3秒。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T031",
        "name": "银算盘",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "yinsuanpan.png",
        "desc": "出售场上英雄时，随机1名英雄等级+2。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T032",
        "name": "微弱优势",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "weiruoyoushi.png",
        "desc": "打出觉醒英雄牌时，其获得22%暴击率和11%物理及法术吸血（每名英雄仅1次）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T033",
        "name": "随机成长",
        "rank": "铜天赋",
        "talentType": "战力类天赋",
        "camp": "通用",
        "img": "suijichengzhang.png",
        "desc": "战斗开始时，你品阶最高的1名英雄等级永久+4。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {
            "name": "无",
            "url": null
        },
        "fitHero": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitPlayer": {
            "name": "无",
            "url": null,
            "avatar": null
        },
        "fitTeam": {
            "name": "无",
            "url": null
        }
    },
    {
        "id": "T034",
        "name": "孙尚香强化",
        "rank": "铜天赋",
        "talentType": "机制类天赋",
        "camp": "通用",
        "img": "sunshangxiangqianghua.png",
        "desc": "每回合开始时，触发1次孙尚香卡牌效果。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "孙尚香", "url": "#hero-sunshangxiang", "avatar": "images/heroes/sunshangxiang.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "无", "url": null}
    }
,
{
    "id": "Y001",
    "name": "人才济济",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "rencaijiji.png",
    "desc": "升级所需棋手经验-2，每次升级时获得1张天赋牌人才搜寻。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y002",
    "name": "重大里程碑",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "zhongdalichengbei.png",
    "desc": "棋手到达5级时，获得8能量、1张装备箱和1张高阶效果牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y003",
    "name": "卧薪尝胆",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "woxinchangdan.png",
    "desc": "选取天赋后，当你输掉2场战斗时，获得9棋手经验。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y004",
    "name": "绝对领域",
    "rank": "银天赋",
    "talentType": "防御类天赋",
    "camp": "通用",
    "img": "jueduilingyu.png",
    "desc": "棋手每次受到的伤害减少3点。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y005",
    "name": "紧急行动",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "jinjixingdong.png",
    "desc": "获得10点棋手生命值、1张装备箱。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y006",
    "name": "临时增幅",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "linshizengfu.png",
    "desc": "战斗开始时，将20临时等级随机分配给己方英雄。每回合增加5临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y007",
    "name": "王牌认证",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "wangpairenzheng.png",
    "desc": "战斗开始时，若你至少有3名4-5阶英雄，获得1张2-3阶效果锦囊。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y008",
    "name": "三十而达",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "sanshierda.png",
    "desc": "备战阶段中，英雄总等级到达30级时，获得9棋手经验。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y009",
    "name": "极限操作",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "jixiancaozuo.png",
    "desc": "棋手生命-15，获得15能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y010",
    "name": "人才市场",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "rencaishichang.png",
    "desc": "获得3张天赋牌人才搜寻。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y011",
    "name": "凯旋征召",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "kaixuanzhengzhao.png",
    "desc": "战斗胜利时，获得1张你等级最高的英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y012",
    "name": "中坚力量",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "zhongjianliliang.png",
    "desc": "打出3阶英雄牌，额外+4级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y013",
    "name": "常胜将军",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "changshengjiangjun.png",
    "desc": "若你至少2连胜，战斗胜利时获得2能量和4棋手生命值。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y014",
    "name": "伤害转化器",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "shanghaizhuanhuaqi.png",
    "desc": "获得2能量。战斗胜利时，再获得2能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y015",
    "name": "终极复印机",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "zhongjifuyinji.png",
    "desc": "获得2张天赋牌终极复印机：指定1名英雄，获得该英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y016",
    "name": "如法炮制",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "rufapaozhi.png",
    "desc": "每回合首次打出英雄牌时，获得1张同阶的英雄牌（不可超过棋手等级）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y017",
    "name": "消费返利",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "xiaofeifanli.png",
    "desc": "每消耗15能量，获得1张加速成长：指定1名英雄等级+5。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y018",
    "name": "金算盘",
    "rank": "银天赋",
    "talentType": "机制类天赋",
    "camp": "通用",
    "img": "jinsuanpan.png",
    "desc": "出售场上英雄时，随机1名英雄等级+3。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y019",
    "name": "超专注射击",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "chaozhuanzhusheji.png",
    "desc": "战斗开始时，你后两排英雄每次普攻获得5%攻速和5点物理攻击力，上限10层。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y020",
    "name": "电池包",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "dianchibao.png",
    "desc": "获得9能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y021",
    "name": "结伴",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "jieban.png",
    "desc": "获得2能量以及2张3阶英雄兑换券。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y022",
    "name": "同路人",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "tongluren.png",
    "desc": "获得2张3阶英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y023",
    "name": "重装上阵",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "zhongzhuangshangzhen.png",
    "desc": "战斗开始时，你至少穿戴2件装备的英雄获得15%伤害加成和15%伤害减免",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y024",
    "name": "成年礼",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "chengnianli.png",
    "desc": "己方英雄30级时，随机获得2张其阵营的英雄牌（已达30级的英雄，再升级1次可获得）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y025",
    "name": "大电池包",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "dadianchibao.png",
    "desc": "获得10能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y026",
    "name": "限制性进化",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "xianzhiqituihua.png",
    "desc": "获得3张天赋牌限制性进化：指定移除1名1~2阶英雄，获得高2阶的随机英雄牌，且上阵时为原等级+10。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y027",
    "name": "援军",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "yuanjun.png",
    "desc": "获得1张援军：指定1名英雄，随机获得4张同阵营的英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y028",
    "name": "自适应武装",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "zishiyingwuzhuang.png",
    "desc": "获得1张天赋牌自适应武装：指定1名英雄，随机获得2张与其适配的普通装备牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y029",
    "name": "虚构装备",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "xugouzhuangbei.png",
    "desc": "战斗开始时，随机3名己方英雄临时获得1件普通装备及100点生命上限。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无", "url": null}
},
{
    "id": "Y030",
    "name": "战术模组",
    "rank": "银天赋",
    "talentType": "通用",
    "img": "zhanshumozu.png",
    "desc": "可上阵人数+1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多人口阵容", "url": null}
},
{
    "id": "Y031",
    "name": "控能达人",
    "rank": "银天赋",
    "talentType": "通用",
    "img": "kongnengdaren.png",
    "desc": "战斗开始时，若当前能量≤3，随机获得1张3-4阶英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "低能量运营阵容", "url": null}
},
{
    "id": "Y032",
    "name": "强者自强",
    "rank": "银天赋",
    "talentType": "通用",
    "img": "qiangzheziqiang.png",
    "desc": "战斗开始时，已觉醒英雄获得40点物理攻击力和40点法术攻击力。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "觉醒英雄", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "觉醒输出阵容", "url": null}
},
{
    "id": "Y033",
    "name": "破败之力",
    "rank": "银天赋",
    "talentType": "通用",
    "img": "pobaizhili.png",
    "desc": "战斗开始时，你的英雄普攻附带敌人最大生命值2%的法术伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "普攻持续伤害阵容", "url": null}
},
{
    "id": "Y034",
    "name": "随机进化",
    "rank": "银天赋",
    "talentType": "通用",
    "img": "suijijinhua.png",
    "desc": "战斗开始时，你品阶最高的1名英雄等级永久+6。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "高品阶核心", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "单核心主C阵容", "url": null}
},
{
    "id": "Y035",
    "name": "超速成长",
    "rank": "银天赋",
    "talentType": "通用",
    "img": "chaosuchengzhang.png",
    "desc": "获得1张天赋牌超速成长：指定1名英雄等级+15。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "主C英雄", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "单核心爆发阵容", "url": null}
},
    {
        "id": "Y036",
        "name": "河洛来客",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "heluolaike.png",
        "desc": "获得3能量以及1张李信。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "李信", "url": null, "avatar": "images/heroes/lixin.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛体系阵容", "url": null}
    },
    {
        "id": "Y037",
        "name": "河洛精兵",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "heluojingbing.png",
        "desc": "卡牌3选1（4阶或5阶的【河洛】英雄）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "河洛高费英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛大成阵容", "url": null}
    },
    {
        "id": "Y038",
        "name": "前浪的荣光",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "qianlangderongguang.png",
        "desc": "获得2张天赋牌前浪的荣光：指定1名英雄，获得1张高1-2阶的同阵营英雄牌。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "升阶搜卡阵容", "url": null}
    },
    {
        "id": "Y039",
        "name": "全军列阵",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "quanjunliezhen.png",
        "desc": "获得1张天赋牌全军列阵：指定1名英雄，召唤其同阵营英雄上场直到阵容人数上限（不超过商店可购品阶）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "阵营核心", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "同阵营召唤阵容", "url": null}
    },
    {
        "id": "Y040",
        "name": "逐鹿来客",
        "rank": "银天赋",
        "talentType": "逐鹿",
        "img": "zhululaike.png",
        "desc": "获得3能量以及1张蒙犽。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "蒙犽", "url": null, "avatar": "images/heroes/mengya.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿体系阵容", "url": null}
    },
    {
        "id": "Y041",
        "name": "逐鹿精兵",
        "rank": "银天赋",
        "talentType": "逐鹿",
        "img": "zhulujingbing.png",
        "desc": "卡牌3选1（4阶或5阶的【逐鹿】英雄）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "逐鹿高费英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿大成阵容", "url": null}
    }
,
    {
        "id": "Y042",
        "name": "大河来客",
        "rank": "银天赋",
        "talentType": "大河",
        "img": "dahelaike.png",
        "desc": "获得3能量以及1张刘邦。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "刘邦", "url": null, "avatar": "images/heroes/liubang.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "大河体系阵容", "url": null}
    },
    {
        "id": "Y043",
        "name": "大河精兵",
        "rank": "银天赋",
        "talentType": "大河",
        "img": "dahejingbing.png",
        "desc": "卡牌3选1（4阶或5阶的【大河流域】英雄）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "大河高费英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "大河大成阵容", "url": null}
    },
    {
        "id": "Y044",
        "name": "日落海来客",
        "rank": "银天赋",
        "talentType": "日落海",
        "img": "riluohailaike.png",
        "desc": "获得3能量以及1张雅典娜。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "雅典娜", "url": null, "avatar": "images/heroes/yadiana.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "日落海体系阵容", "url": null}
    },
    {
        "id": "Y045",
        "name": "日落海精兵",
        "rank": "银天赋",
        "talentType": "日落海",
        "img": "riluohaijingbing.png",
        "desc": "卡牌3选1（4阶或5阶的【日落海】英雄）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "日落海高费英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "日落海大成阵容", "url": null}
    },
    {
        "id": "Y046",
        "name": "三分来客",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "sanfenlaike.png",
        "desc": "获得3能量以及1张小乔。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "小乔", "url": null, "avatar": "images/heroes/xiaoqiao.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分之地体系阵容", "url": null}
    },
    {
        "id": "Y047",
        "name": "三分精兵",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "sanfenjingbing.png",
        "desc": "卡牌3选1（4阶或5阶的【三分】英雄）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "三分高费英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分大成阵容", "url": null}
    },
    {
        "id": "Y048",
        "name": "能量改造",
        "rank": "银天赋",
        "talentType": "阿科米亚",
        "img": "nenglianggaizao.png",
        "desc": "阿科米亚核心不再分配等级。回合开始时，核心每拥有30级，将随机触发场上1名英雄的1次整备或登场效果（单回合最多触发100次）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "阿科米亚核心", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "阿科米亚触发阵容", "url": null}
    },
    {
        "id": "Y049",
        "name": "光棱塔",
        "rank": "银天赋",
        "talentType": "阿科米亚",
        "img": "guanglengta.png",
        "desc": "阿科米亚核心不再分配等级。每秒对1个随机敌方单位造成5次核心等级×1的法术伤害。每击败1名敌方英雄，阿科米亚核心获得自身1%的等级成长。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "阿科米亚核心", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "阿科米亚持续输出阵容", "url": null}
    },
    {
        "id": "Y050",
        "name": "场外供能",
        "rank": "银天赋",
        "talentType": "阿科米亚",
        "img": "changwaigongneng.png",
        "desc": "回合开始时，阿科米亚核心获得棋手等级×3的等级。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "阿科米亚核心", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "阿科米亚等级成长阵容", "url": null}
    },
    {
        "id": "Y051",
        "name": "积极整备",
        "rank": "银天赋",
        "talentType": "日落海",
        "img": "jijizhengbei.png",
        "desc": "你的英雄每触发5次整备效果，随机获得1件日落海专属装备，上限3件。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "日落海整备英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "日落海整备阵容", "url": null}
    },
    {
        "id": "Y052",
        "name": "动能灌注",
        "rank": "银天赋",
        "talentType": "阿科米亚",
        "img": "dongnengguanzhu.png",
        "desc": "阿科米亚核心等级+10。你的英雄每合计攻击10次，核心等级+1。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "阿科米亚核心", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "阿科米亚普攻叠加阵容", "url": null}
    },
    {
        "id": "Y053",
        "name": "智能装甲",
        "rank": "银天赋",
        "talentType": "日落海",
        "img": "zhinengzhuangjia.png",
        "desc": "随机获得1件【日落海专属装备】。我方英雄每穿戴1件【日落海专属装备】，其整备效果会额外触发1次。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "日落海英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "日落海多装备整备阵容", "url": null}
    },
    {
        "id": "Y054",
        "name": "多彩古币",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "duocaigubi.png",
        "desc": "获得1张古币。古币只能对非【河洛】英雄主动使用：随机变成其他同阶非【河洛】英雄，等级额外+7。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛古币体系阵容", "url": null}
    },
    {
        "id": "Y055",
        "name": "传家宝",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "chuanjiabao.png",
        "desc": "古币不再附带转腾。每回合开始时，手牌中古币等级+1，若数量≥8张，则+2级。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛古币囤牌阵容", "url": null}
    },
    {
        "id": "Y056",
        "name": "古币翻新",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "gubifanxin.png",
        "desc": "获得1张古币。古币牌会额外提供2级。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛古币升级阵容", "url": null}
    },
    {
        "id": "Y057",
        "name": "献祭之赐",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "xianjizhici.png",
        "desc": "获得1张李信，李信卡牌效果提供的临时等级额外+3。若李信觉醒，敌方英雄触发牺牲时，也会触发己方李信的卡牌效果。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "李信", "url": null, "avatar": "images/heroes/lixin.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛李信献祭阵容", "url": null}
    },
    {
        "id": "Y058",
        "name": "零钱兑换",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "lingqianduihuan.png",
        "desc": "你获得的古币会自动兑换为2张无法提供等级的破损古币，精致古币则兑换为4张。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛古币兑换阵容", "url": null}
    },
    {
        "id": "Y059",
        "name": "最终守卫",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "zuizhongshouwei.png",
        "desc": "你最后1名【河洛】英雄受到致命伤害时进入无敌状态，并提升50%攻击速度，持续1秒。战斗中你的英雄每触发过1次牺牲效果，无敌时间增加0.25秒。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "河洛英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛牺牲守卫阵容", "url": null}
    },
    {
        "id": "Y060",
        "name": "古币契约",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "gubiqiyue.png",
        "desc": "你的英雄每触发3次牺牲效果，获得1张古币。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "河洛牺牲英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛牺牲古币阵容", "url": null}
    },
    {
        "id": "Y061",
        "name": "幸运硬币",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "xingyunyingbi.png",
        "desc": "打出古币时有概率额外触发1-3次。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛古币赌运阵容", "url": null}
    },
    {
        "id": "Y062",
        "name": "红豆之托",
        "rank": "银天赋",
        "talentType": "河洛",
        "img": "hongdouzhituo.png",
        "desc": "获得1张【河洛】英雄王维。备战阶段，场上英雄总等级分别达到100/200/400级时，再获得1张王维。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "王维", "url": null, "avatar": "images/heroes/wangwei.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "河洛王维成长阵容", "url": null}
    },
    {
        "id": "Y063",
        "name": "乐善好施",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "leshanhaoshi.png",
        "desc": "你的英雄触发登场效果时，随机2名【三分】英雄等级+2。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "三分登场英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分登场成长阵容", "url": null}
    },
    {
        "id": "Y064",
        "name": "一身是胆",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "yishenshidan.png",
        "desc": "获得1张赵云，赵云在释放技能前，会额外释放1个技能惊雷之龙，且赵云生命值每次经过70%/30%档位时，会恢复全部法力值。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "赵云", "url": null, "avatar": "images/heroes/zhaoyun.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分赵云阵容", "url": null}
    },
    {
        "id": "Y065",
        "name": "卧龙威势",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "wolongweishi.png",
        "desc": "获得1张诸葛亮，你的英雄释放技能时，诸葛亮周围1格的其他【三分】英雄获得10点法力值。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "诸葛亮", "url": null, "avatar": "images/heroes/zhugeliang.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分诸葛亮回蓝阵容", "url": null}
    }
,
    {
        "id": "Y066",
        "name": "勇冠三军",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "yongguansanjun.png",
        "desc": "获得1张马超，战斗中，马超的暴击率始终会分享给友军。马超暴击率达到100%时，所有友军的法术伤害可以暴击。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "马超", "url": null, "avatar": "images/heroes/machao.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿马超暴击阵容", "url": null}
    },
    {
        "id": "Y067",
        "name": "擂台猛虎",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "leitaomenghu.png",
        "desc": "获得1个猛虎擂台，擂台中的【三分】英雄获得30点物攻和法攻。每当敌人于擂台范围内被击败时，擂台吸收其灵魂，永久额外提供10点物攻和法攻。每吸收5次，擂台范围永久扩大1格，最多扩大3次。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "三分英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分擂台成长阵容", "url": null}
    },
    {
        "id": "Y068",
        "name": "锦囊妙计",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "jinangmiaoji.png",
        "desc": "获得1张锦囊：使用后，本回合打出的登场英雄牌，会额外触发1次登场效果。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "三分登场英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分登场爆发阵容", "url": null}
    },
    {
        "id": "Y069",
        "name": "膨化生命",
        "rank": "银天赋",
        "talentType": "三分之地",
        "img": "penghuashengming.png",
        "desc": "战斗开始时，你的【三分】英雄额外获得100%生命值上限（仅提升上限），且生命恢复和护盾效果提升20%。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "三分英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "三分肉盾续航阵容", "url": null}
    },
    {
        "id": "Y070",
        "name": "技高一筹",
        "rank": "银天赋",
        "talentType": "逐鹿",
        "img": "jiyigaochou.png",
        "desc": "【逐鹿】英雄每释放6次技能，获得1能量，上限5能量。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "逐鹿英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿高频技能阵容", "url": null}
    },
    {
        "id": "Y071",
        "name": "强力小弟",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "qianglixiaodi.png",
        "desc": "你的召唤单位等级+6。每回合开始时，再+6。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "召唤类英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "召唤物体系阵容", "url": null}
    },
    {
        "id": "Y072",
        "name": "鲸吞",
        "rank": "银天赋",
        "talentType": "逐鹿",
        "img": "jingtun.png",
        "desc": "获得1张庄周，【逐鹿】英雄每释放6次技能，庄周会吞噬敌方等级最低的1名英雄，永久获得其30%的生命值上限（每场战斗最多吞噬1次）。若庄周觉醒，吞噬上限变为3次。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "庄周", "url": null, "avatar": "images/heroes/zhuangzhou.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿庄周吞噬阵容", "url": null}
    },
    {
        "id": "Y073",
        "name": "乘胜追击",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "chengshengzhuiji.png",
        "desc": "战斗胜利时，获得1张高阶推演战术。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "连胜运营阵容", "url": null}
    },
    {
        "id": "Y074",
        "name": "贤士登门",
        "rank": "银天赋",
        "talentType": "逐鹿",
        "img": "xianshidengmen.png",
        "desc": "随机获得1张【逐鹿】英雄。回合开始时，再获得1张。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "逐鹿英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿搜卡阵容", "url": null}
    },
    {
        "id": "Y075",
        "name": "生命绽放",
        "rank": "银天赋",
        "talentType": "逐鹿",
        "img": "shengmingzhanfang.png",
        "desc": "获得1张鬼谷子，玄微之种获得额外效果：每秒回复穿戴者3%生命值。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "鬼谷子", "url": null, "avatar": "images/heroes/guiguzi.png"},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "逐鹿鬼谷子续航阵容", "url": null}
    },
    {
        "id": "Y076",
        "name": "化为熊灵",
        "rank": "银天赋",
        "talentType": "大河",
        "img": "huaweixiongling.png",
        "desc": "战斗中首名【大河】英雄阵亡时，召唤1只场上大河英雄等级之和的熊灵（不计算临时等级），并嘲讽周围2格敌人，持续4秒。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "大河英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "大河熊灵献祭阵容", "url": null}
    },
    {
        "id": "Y077",
        "name": "图腾启灵",
        "rank": "银天赋",
        "talentType": "大河",
        "img": "tutengqiling.png",
        "desc": "每回合随机召唤1个图腾，直到回合结束。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "大河英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "大河图腾召唤阵容", "url": null}
    },
{
    "id": "Y078",
    "name": "坚不可摧",
    "rank": "银天赋",
    "talentType": "生存类天赋",
    "camp": "通用",
    "img": "jianbukecui.png",
    "desc": "战斗开始时，我方先知图腾、因缘图腾和往生图腾获得回合数×100的护盾。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "图腾阵容", "url": null}
},
{
    "id": "Y079",
    "name": "因缘际会",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "yinyuanjihui.png",
    "desc": "召唤1个1级的因缘图腾。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "图腾体系", "url": null}
},
{
    "id": "Y080",
    "name": "荆棘牢笼",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "jingjilaolong.png",
    "desc": "先知图腾获得额外效果：每5秒眩晕最远的1个敌人，持续2秒。如果敌人在眩晕期间阵亡，召唤1只与其等级相同的熊灵。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "先知图腾阵容", "url": null}
},
{
    "id": "Y081",
    "name": "协同一致",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "xietongyizhi.png",
    "desc": "回合开始时，无阵营英雄获得等于当前棋手等级的等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无阵营单卡阵容", "url": null}
},
{
    "id": "Y082",
    "name": "胜之不武",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "shengzhi-buwu.png",
    "desc": "获得3张天赋牌胜之不武：下场战斗你的英雄+20临时等级，但对敌方棋手造成的伤害-10。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "赌狗爆发阵容", "url": null}
},
{
    "id": "Y083",
    "name": "瞬影连斩",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "shunyinglianzhan.png",
    "desc": "闪现英雄击败敌方单位时，会立刻闪现至最近的敌人处，并无敌0.5秒。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "刺客闪现阵容", "url": null}
},
{
    "id": "Y084",
    "name": "破妄之刃",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "pawangzhiren.png",
    "desc": "获得破妄之刃：获得真实伤害能力并提升移速且免疫减速效果。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "物理输出阵容", "url": null}
},
         {
        "id": "Y085",
        "name": "破阵战芒",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "pozhenzhanmang.png",
        "desc": "获得破阵战芒：增加攻速及伤害提升（1-3阶英雄限定）。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "低阶输出英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "低阶攻速输出阵容", "url": null}
    },
    {
        "id": "Y086",
        "name": "断念",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "duannian.png",
        "desc": "获得断念：造成伤害时降低敌方最大生命值。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "持续输出英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "血量压制输出阵容", "url": null}
    },
    {
        "id": "Y087",
        "name": "法潮灵杖",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "fachao_lingzhang.png",
        "desc": "获得法潮灵杖：获取左右1格英雄法术攻击力。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "法师英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "法师增益阵容", "url": null}
    },
    {
        "id": "Y088",
        "name": "怒神项链",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "nushenxianglian.png",
        "desc": "获得怒神项链：增加暴击率以及法术伤害可以暴击。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "法术英雄", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "法爆阵容", "url": null}
    },
    {
        "id": "Y089",
        "name": "一分钱一分货",
        "rank": "银天赋",
        "talentType": "通用",
        "img": "yifenqianyifenhuo.png",
        "desc": "获得1张天赋牌等价交换：扣除当前所有能量。根据扣除数量获得不同资源奖励。",
        "source": "棋手升级时概率选择获取天赋。",
        "relatedProduct": {"name": "无", "url": null},
        "fitHero": {"name": "无", "url": null, "avatar": null},
        "fitPlayer": {"name": "无", "url": null, "avatar": null},
        "fitTeam": {"name": "能量兑换运营阵容", "url": null}
    },
{
    "id": "Y090",
    "name": "小身体大能量",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "xiaoshentidanengliang.png",
    "desc": "战斗开始时，英雄模型缩小，攻速+50%，暴击率+40%，生命值上限-20%。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "快攻刺客/射手阵容", "url": null}
},
{
    "id": "Y091",
    "name": "小小的助力",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "xiaoxiaodezhuli.png",
    "desc": "战斗开始时，你场上有不少于4名1-3阶英雄，则4-5阶英雄获得30%伤害加成和50%攻速。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "高低搭配混编阵容", "url": null}
},
{
    "id": "Y092",
    "name": "逆袭之路",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "nixizhilu.png",
    "desc": "当你排名不是第1或第2名时，你的所有单位伤害+10%，最大生命值+20%。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "容错追分阵容", "url": null}
},
{
    "id": "Y093",
    "name": "富贵险中求",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "fuguixianzhongqiu.png",
    "desc": "获得1张天赋牌【一刀一富】；打出后，获得1张基础装备牌及1张【险中求富】（持有时有获胜胜积奖励，失败则消失）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "赌狗运营阵容", "url": null}
},
{
    "id": "Y094",
    "name": "祝你好运",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "zhunihouyun.png",
    "desc": "棋手升级时，获得1张天赋牌【碰碰运气】：指定1名英雄提升5-20等级，随机消耗1-5能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "主C单核阵容", "url": null}
},
{
    "id": "Y095",
    "name": "透支",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "touzhi.png",
    "desc": "能量可用至-15。回合开始时，如果能量为负，本回合无法打出英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "高费爆发阵容", "url": null}
},
{
    "id": "Y096",
    "name": "拍卖专家",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "paimaizhuanjia.png",
    "desc": "每次拍卖后，获得1张天赋牌【拍卖重现】：选择获得1张拍卖中你未获得的卡牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "拍卖流阵容", "url": null}
},
{
    "id": "Y097",
    "name": "一个响指",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "yigexiangzhi.png",
    "desc": "获得1张天赋牌【听天由命】：消除等级最低的4个英雄，其变为猪。若失败，会变为猪3秒，会提供一定资源。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "精简阵容", "url": null}
},
{
    "id": "Y098",
    "name": "厉兵秣马",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "libingmoma.png",
    "desc": "随机获得1张普通装备牌。接下来5个回合若你的棋手等级没有变化，再获得2张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "停D装备流", "url": null}
},
{
    "id": "Y099",
    "name": "神秘英雄",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "shenmiyingxiong.png",
    "desc": "获得2张神秘英雄牌。手动刷新时，随机变为不低于当前棋手对应品阶的英雄牌。每回合有15%概率自动销毁并获得3能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "赌高费阵容", "url": null}
},
{
    "id": "Y100",
    "name": "抢攻",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "qianggong.png",
    "desc": "获得1张普通装备牌。之后5回合内，若对其他棋手累计造成20点伤害，获得10能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "快攻血线压制阵容", "url": null}
},
{
    "id": "Y101",
    "name": "群英荟萃",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "qunyinghuicui.png",
    "desc": "回合中每打出3张不同品阶的英雄牌，全体英雄等级+3。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多品阶混打阵容", "url": null}
},
{
    "id": "Y102",
    "name": "前线堡垒",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "qianxianbaolei.png",
    "desc": "战斗开始时，你第一排的英雄获得20点物理及法术防御。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "前排肉盾阵容", "url": null}
},
{
    "id": "Y103",
    "name": "战前叫阵",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "zhanqianjiaozhen.png",
    "desc": "战斗开始时，敌我双方等级最高英雄比拼等级；我方胜利，则其英雄获得1次完美复生；我方失败，其变为猎猪3秒，获得30%最大生命值护盾。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "单C高等级阵容", "url": null}
},
{
    "id": "Y104",
    "name": "扩编名额",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "kuobianminge.png",
    "desc": "获得1个可购买天赋：花费8能量，可上阵人数+1。可购买2次。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多人口大成阵容", "url": null}
},
{
    "id": "Y105",
    "name": "补给线：开团",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "bujixiankaituan.png",
    "desc": "获得3张【开团效果英雄牌】。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "开团控制阵容", "url": null}
},
{
    "id": "Y106",
    "name": "大买卖",
    "rank": "银天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "damaimai.png",
    "desc": "商店购买额外花费1能量，出售英雄牌额外获得1能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "反复买卖D牌阵容", "url": null}
},
{
    "id": "Y107",
    "name": "丢盔弃甲",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "diukuiqijia.png",
    "desc": "获得1张天赋牌【空手道】：指定一名英雄，取消装备槽位。战斗开始时，该英雄获得等同于其真实等级的临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无装备单核阵容", "url": null}
},
{
    "id": "Y108",
    "name": "崛起",
    "rank": "银天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "jueqi.png",
    "desc": "获得1张马可波罗和1张百里守约。共战时，获得3临时等级。若战斗胜利，至多保留他们获得的20临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "马可波罗、百里守约", "url": null, "avatar": "images/heroes/makepolo.png,images/heroes/bailishouyue.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "射手体系", "url": null}
},
 {
    "id": "J001",
    "name": "无限进步",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "wuxianjinbu.png",
    "desc": "获得1张3阶兑换券。回合开始时，获得2棋手经验。满级后，改为获得2能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "升级运营阵容", "url": null}
},
{
    "id": "J002",
    "name": "资深猎头",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "zishenlietou.png",
    "desc": "棋手4级时，获得1张天赋牌资深猎头：4阶卡牌2选1，并将选中的卡牌一分为四。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "4费核心阵容", "url": null}
},
{
    "id": "J003",
    "name": "有舍有得",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "yousheyoude.png",
    "desc": "回合开始时，随机1名英雄觉醒进度+1，但英雄合成提升的等级-1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "觉醒流阵容", "url": null}
},
{
    "id": "J004",
    "name": "王牌部队",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "wangpaibudui.png",
    "desc": "战斗开始时，若你至少有3名4-5阶英雄，获得1张4-5阶效果锦囊。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "高费大成阵容", "url": null}
},
{
    "id": "J005",
    "name": "大明星",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "damingxing.png",
    "desc": "获得1张大明星：随机上阵1名不在场的等级为棋手等级×7的5阶英雄，其觉醒进度为1，此后每经过2回合额外+1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "单核高费阵容", "url": null}
},
{
    "id": "J006",
    "name": "紧急救援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "jinjijiuyuan.png",
    "desc": "获得15棋手生命值、1张装备箱、1张5阶兑换券。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "容错续航阵容", "url": null}
},
{
    "id": "J007",
    "name": "搏命",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "boming.png",
    "desc": "棋手生命值-20，获得25能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "赌狗冲刺阵容", "url": null}
},
{
    "id": "J008",
    "name": "永不独行",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "yongbuduxing.png",
    "desc": "获得1张双人同行。回合开始时，若棋手不超过3级，再获得1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "低费运营阵容", "url": null}
},
{
    "id": "J009",
    "name": "小咖秀",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "xiaokaxiu.png",
    "desc": "战斗开始时，若你只有1-3阶英雄，随机获得1张场上的英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "低费赌狗阵容", "url": null}
},
{
    "id": "J010",
    "name": "中流砥柱",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "zhonglidizhu.png",
    "desc": "打出3阶英雄牌，额外+6级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "3费核心阵容", "url": null}
},
{
    "id": "J011",
    "name": "三人游",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "sanrenyou.png",
    "desc": "随机获得3张4-5阶英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "高费启动阵容", "url": null}
},
{
    "id": "J012",
    "name": "泉水",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "quanshui.png",
    "desc": "回合开始时，恢复3棋手生命值；若棋手生命值已满，改为获得4棋手经验。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "稳血升级阵容", "url": null}
},
{
    "id": "J013",
    "name": "同心协力",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "tongxinxieli.png",
    "desc": "战斗开始时，若你至少有6名同阵营英雄，其获得50点物攻和法攻以及50%攻速。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "纯阵营大成阵容", "url": null}
},
{
    "id": "J014",
    "name": "全副武装",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "quanfuwuzhuang.png",
    "desc": "获得1张基础装备牌。战斗开始时，你至少穿戴2件装备的英雄获得15%伤害加成和减免。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "装备流阵容", "url": null}
},
{
    "id": "J015",
    "name": "延迟满足",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "yanchimanzu.png",
    "desc": "获得1张天赋牌延迟满足：指定1名英雄等级+10。3回合后，再+25。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "慢热单核阵容", "url": null}
},
{
    "id": "J016",
    "name": "虚构武装",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "xugouwuzhuang.png",
    "desc": "战斗开始时，随机3名己方英雄临时获得2件普通装备及300点生命上限。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "爆发快攻阵容", "url": null}
},
{
    "id": "J017",
    "name": "战略中枢",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "zhanlüezhongshu.png",
    "desc": "可上阵人数+1，同时获得2张有福同享。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多人口大成阵容", "url": null}
},
{
    "id": "J018",
    "name": "破败神威",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "pobaishenwei.png",
    "desc": "战斗开始时，你的英雄普攻附带敌人最大生命值3%的法术伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "普攻输出阵容", "url": null}
},
{
    "id": "J019",
    "name": "随机强化",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "suijiqianghua.png",
    "desc": "战斗开始时，你品阶最高的1名英雄等级永久+9。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "单核主C阵容", "url": null}
},
{
    "id": "J020",
    "name": "强者恒强",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "qiangzhehengqiang.png",
    "desc": "战斗开始时，你的已觉醒英雄获得50点物理攻击力和50点法术攻击力。若所有己方英雄已觉醒，则再获得20%物理及法术吸血。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "全觉醒阵容", "url": null}
},
{
    "id": "J021",
    "name": "特大电池包",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "tadedianchibao.png",
    "desc": "获得12能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "急缺能量的运营阵容", "url": null}
},
{
    "id": "J022",
    "name": "守护灵",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "shouhuling.png",
    "desc": "当你在战斗中仅剩1名英雄时，随机召唤1名满装备的5阶英雄（无卡牌效果）出战，并使之获得回合数×10的等级（至少为80级）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "单保主C阵容", "url": null}
},
{
    "id": "J023",
    "name": "天兵",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "tianbing.png",
    "desc": "获得1张5阶英雄牌。回合开始时，再获得1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "高费大成阵容", "url": null}
},
{
    "id": "J024",
    "name": "河洛增援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "河洛",
    "img": "heluozengyuan.png",
    "desc": "随机获得3张3-4阶【河洛】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "河洛阵营阵容", "url": null}
},
{
    "id": "J025",
    "name": "河洛强援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "河洛",
    "img": "heluoqiangyuan.png",
    "desc": "获得5能量和3张随机4-5阶【河洛】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "河洛高费阵容", "url": null}
},
{
    "id": "J026",
    "name": "逐鹿增援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "逐鹿",
    "img": "zhuluzengyuan.png",
    "desc": "随机获得3张3-4阶【逐鹿】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿阵营阵容", "url": null}
},
{
    "id": "J027",
    "name": "逐鹿强援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "逐鹿",
    "img": "zhuluqiangyuan.png",
    "desc": "获得5能量和随机3张4-5阶【逐鹿】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿高费阵容", "url": null}
},
{
    "id": "J028",
    "name": "大河增援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "大河流域",
    "img": "dahezengyuan.png",
    "desc": "随机获得3张3-4阶【大河流域】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河流域阵营阵容", "url": null}
},
{
    "id": "J029",
    "name": "大河强援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "大河流域",
    "img": "daheqiangyuan.png",
    "desc": "获得5能量和随机3张4-5阶【大河流域】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河流域高费阵容", "url": null}
},
{
    "id": "J030",
    "name": "日落海增援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "日落海",
    "img": "riluohaizengyuan.png",
    "desc": "随机获得3张3-4阶【日落海】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阵营阵容", "url": null}
},
{
    "id": "J031",
    "name": "日落海强援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "日落海",
    "img": "riluohaiqiangyuan.png",
    "desc": "获得5能量和随机3张4-5阶【日落海】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海高费阵容", "url": null}
},
{
    "id": "J032",
    "name": "三分增援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "三分之地",
    "img": "sanfenzengyuan.png",
    "desc": "随机获得3张3-4阶【三分】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分之地阵营阵容", "url": null}
},
   {
    "id": "J033",
    "name": "三分强援",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "三分之地",
    "img": "sanfenqiangyuan.png",
    "desc": "获得5能量和随机3张4-5阶【三分】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分之地高费阵容", "url": null}
},
{
    "id": "J034",
    "name": "点兵点将",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "dianbingdianjiang.png",
    "desc": "获得1张天赋牌点兵点将：获得场上英雄牌各1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "复制场上阵容", "url": null}
},
{
    "id": "J035",
    "name": "定向传输",
    "rank": "金天赋",
    "talentType": "战力类天赋",
    "camp": "日落海",
    "img": "dingxiangchuanshu.png",
    "desc": "阿科米核心的等级会优先分配给穿戴装备最多的【日落海】英雄，最多分配200级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "阿科米", "url": null, "avatar": "images/heroes/akemi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阿科米体系", "url": null}
},
{
    "id": "J036",
    "name": "能量汲取",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "日落海",
    "img": "nengliangjiqu.png",
    "desc": "出售场上英雄时，阿科米亚核心会获得其等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "阿科米", "url": null, "avatar": "images/heroes/akemi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阿科米体系", "url": null}
},
{
    "id": "J037",
    "name": "积少成多",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "日落海",
    "img": "jishaochenduo.png",
    "desc": "【日落海】英雄每提升10级，阿科米亚核心获得4等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "阿科米", "url": null, "avatar": "images/heroes/akemi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阿科米体系", "url": null}
},
{
    "id": "J038",
    "name": "双重分配",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "日落海",
    "img": "shuangchongfenpei.png",
    "desc": "阿科米亚核心每分配1等级，还将随机分配1点属性，双攻/攻速/初始法力值中的随机1个（每场战斗随机）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "阿科米", "url": null, "avatar": "images/heroes/akemi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阿科米体系", "url": null}
},
{
    "id": "J039",
    "name": "全域共鸣",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "日落海",
    "img": "quyugongming.png",
    "desc": "随机获得1件星源装备，且星源装备的【日落海】专属效果对穿戴它的任意英雄生效。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海装备体系", "url": null}
},
{
    "id": "J040",
    "name": "能源置换",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "日落海",
    "img": "nengyuanzhihuan.png",
    "desc": "回合开始时，阿科米亚核心失去20级，获得10能量。每回合最多触发1次。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "阿科米", "url": null, "avatar": "images/heroes/akemi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阿科米体系", "url": null}
},
{
    "id": "J041",
    "name": "核心裂痕",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "日落海",
    "img": "hexinliehen.png",
    "desc": "获得1张盗火。回合开始时，再获得1张【转赠】。指定1名英雄，至多偷取阿科米亚核心20级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "阿科米", "url": null, "avatar": "images/heroes/akemi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "日落海阿科米体系", "url": null}
},
{
    "id": "J042",
    "name": "技能突破：亚瑟",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "逐鹿",
    "img": "jinengtupo_yase.png",
    "desc": "获得1张亚瑟，战斗开始时，亚瑟周围一格的友方英雄变身为圣殿骑士。亚瑟的普攻变为为血量最低的圣殿骑士回复生命值；技能改为指挥全体圣殿骑士朝敌人冲锋。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "亚瑟", "url": null, "avatar": "images/heroes/yase.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿亚瑟体系", "url": null}
},
{
    "id": "J043",
    "name": "升值",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "shengzhi.png",
    "desc": "获得2张古币。战斗胜利时，古币牌提供的等级永久+1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "古币运营阵容", "url": null}
},
{
    "id": "J044",
    "name": "古币机",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "gubiji.png",
    "desc": "召唤古币机，每对其使用4张古币牌（精古币为2次），依次获得：随机5阶英雄牌；1件装备的庇护。之后随机获得：1张超速成长、1张普通装备或能量。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "古币运营阵容", "url": null}
},
{
    "id": "J045",
    "name": "一起发财",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "通用",
    "img": "yiqifacai.png",
    "desc": "使用古币时，其他每个阵营中各1名随机英雄等级+3。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "古币运营阵容", "url": null}
},
{
    "id": "J046",
    "name": "自我奉献",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "河洛",
    "img": "ziwofengxian.png",
    "desc": "【河洛】英雄获得【牺牲】：所有友方单位+1临时等级，每次触发此【牺牲】效果时，临时等级额外+1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "河洛牺牲体系", "url": null}
},
{
    "id": "J047",
    "name": "丝绸之路",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "河洛",
    "img": "siluzhilu.png",
    "desc": "每出售4名场上英雄获得1张古币，每出售1张古币获得1张【河洛】英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "河洛古币体系", "url": null}
},
{
    "id": "J048",
    "name": "千金换酒",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "河洛",
    "img": "qianjinhuanjiu.png",
    "desc": "获得1张李白，李白每获得12次古币，释放技能时会永久额外释放1次。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "李白", "url": null, "avatar": "images/heroes/libai.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "河洛李白古币体系", "url": null}
},
{
    "id": "J049",
    "name": "钱生战力",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "河洛",
    "img": "qianshengzhanli.png",
    "desc": "战斗开始时，随机4名【河洛】英雄获得累计使用古币数（选择此天赋后）的临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "河洛古币体系", "url": null}
},
{
    "id": "J050",
    "name": "暴君归来",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "baojunguilai.png",
    "desc": "你在战斗过程中复生的英雄，获得200%攻速、100%暴击率和70%伤害减免，持续1.5秒。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河复生体系", "url": null}
},
{
    "id": "J051",
    "name": "鬼神降临",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "guishenjianglin.png",
    "desc": "你阵亡4名【三分】英雄后，召唤吕布，其等级为已阵亡【三分】英雄等级之和的一半。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "吕布", "url": null, "avatar": "images/heroes/lvbu.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分献祭吕布体系", "url": null}
},
{
    "id": "J052",
    "name": "四重奏",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "sicouzhong.png",
    "desc": "战斗开始时，若你场上有至少3个阵营，全体英雄获得5×棋手等级的临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多阵营混搭阵容", "url": null}
},            
{
    "id": "J053",
    "name": "搏战",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "bozhan.png",
    "desc": "你前两排的【三分】英雄生命值50%以下时，每秒恢复5%生命值，并提升50%攻速。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分前排血战体系", "url": null}
},
{
    "id": "J054",
    "name": "怒涛",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "nutao.png",
    "desc": "【三分】英雄获得🔔牺牲，大乔灵体现身，对敌人施加1次巨型海浪打击。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "大乔", "url": null, "avatar": "images/heroes/daqiao.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分大乔牺牲体系", "url": null}
},
{
    "id": "J055",
    "name": "控制感应",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "kongzhiganying.png",
    "desc": "你的英雄施加控制效果时，你的【三分】英雄获得20点法术攻击力。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分控制流阵容", "url": null}
},
{
    "id": "J056",
    "name": "三三得三",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "sansansan.png",
    "desc": "战斗开始时，若你场上【三分】英雄人数刚好是3的倍数，他们分别获得33临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分3/6人体系", "url": null}
},
{
    "id": "J057",
    "name": "挂帅上阵",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "三分之地",
    "img": "guashuai.png",
    "desc": "获得1张挂帅：指定1名【三分】英雄，使其等级等同于离1名最近的【三分】英雄。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分主C复制等级", "url": null}
},
{
    "id": "J058",
    "name": "三分领袖",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "三分之地",
    "img": "sanfenlingxiu.png",
    "desc": "获得1张装备牌三分旗帜：造成伤害的30%平均治疗所有【三分】英雄（仅【三分】英雄可穿戴）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "三分续航体系", "url": null}
},
{
    "id": "J059",
    "name": "意外之财",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "逐鹿",
    "img": "yiwaizhicai.png",
    "desc": "每合成4次【逐鹿】英雄，获得1张随机1-5阶效果锦囊牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿合成运营阵容", "url": null}
},
{
    "id": "J060",
    "name": "令行如流",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "逐鹿",
    "img": "lingxingruliu.png",
    "desc": "获得1张战术牌。回合开始时，再获得1张（棋手等级达到5级后，必定是高阶战术）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿战术流", "url": null}
},
{
    "id": "J061",
    "name": "穷兵黩武",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "逐鹿",
    "img": "qiongbingduwu.png",
    "desc": "【逐鹿】英雄释放技能时，召唤1个玄甲士兵，其等级与召唤英雄相同，最多同时存在3个。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿召唤体系", "url": null}
},
{
    "id": "J062",
    "name": "复现",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "逐鹿",
    "img": "fuxian.png",
    "desc": "每回合首次对【逐鹿】英雄使用的效果牌会返回手牌并附加🔁转瞬。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿效果牌循环阵容", "url": null}
},
{
    "id": "J063",
    "name": "演武",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "逐鹿",
    "img": "yanwu.png",
    "desc": "棋手升到5级后，你获得的战术牌都会变为高阶战术。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿高阶战术流", "url": null}
},
{
    "id": "J064",
    "name": "罡气护体",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "逐鹿",
    "img": "gangqihuti.png",
    "desc": "【逐鹿】英雄在技能释放期间，每1秒获得自身最大生命值5%的护盾，护盾持续3秒。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿技能坦度阵容", "url": null}
},
{
    "id": "J065",
    "name": "春风化雨",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "逐鹿",
    "img": "chunfenghuayu.png",
    "desc": "回合开始时，获得1张【逐鹿】英雄；若上场战斗胜利，再获得1张场上【逐鹿】英雄的同名牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逐鹿连胜搜牌阵容", "url": null}
},
{
    "id": "J066",
    "name": "水晶穹顶",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "shuijingqiongding.png",
    "desc": "战斗开始时，穹顶会将区域内英雄的护盾吸收变为自身的护盾，保护区域内的友军不受伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河护盾保护体系", "url": null}
},
{
    "id": "J067",
    "name": "望梅止渴",
    "rank": "金天赋",
    "talentType": "资源类天赋",
    "camp": "大河流域",
    "img": "wangmeizhike.png",
    "desc": "获得1张望梅止渴。回合开始时，场上每有2名【大河】英雄，再获得1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河运营体系", "url": null}
},
{
    "id": "J068",
    "name": "四海来援",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "sihailaiyuan.png",
    "desc": "无阵营英雄获得🔔牺牲：召唤1名与自身品阶和等级相同的英雄（无卡牌效果）参战。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河无阵营牺牲体系", "url": null}
},
{
    "id": "J069",
    "name": "命运图腾",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "mingyuntuteng.png",
    "desc": "战斗开始时，若你至少有2名【大河】英雄，随机在其周围1格召唤🔁命运图腾；消灭击败该图腾的敌人。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河图腾体系", "url": null}
},
{
    "id": "J070",
    "name": "神明庇佑",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "shenmingbiyou.png",
    "desc": "战斗开始时，图腾周围1格的己方单位提高10%生命值上限和20%攻速，可叠加。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河图腾增益体系", "url": null}
},
{
    "id": "J071",
    "name": "始祖熊灵",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "shizuxiongling.png",
    "desc": "获得1张始祖熊灵，其被视为【大河】英雄且不占人口。战斗开始时，我方每比敌方多1个单位，始祖熊灵永久增加2级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "始祖熊灵", "url": null, "avatar": "images/heroes/shizuxiongling.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河熊灵体系", "url": null}
},
{
    "id": "J072",
    "name": "熊魂附甲",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "xionghunfuji.png",
    "desc": "你至少穿戴2件装备的【大河】英雄阵亡获得🔔牺牲；召唤1只与该英雄等级相同的熊灵。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河熊灵牺牲体系", "url": null}
}
,
{
    "id": "J073",
    "name": "虚妄转生",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "xuwangzhuansheng.png",
    "desc": "召唤1个虚妄图腾；被摧毁时，变为场上存活的等级最高或品阶最高的【大河】英雄（无卡牌效果）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河图腾转生体系", "url": null}
},
{
    "id": "J074",
    "name": "灵祭升华",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "lingjishenghua.png",
    "desc": "场上的图腾被摧毁时，等级最高的【大河】英雄获得与图腾一半等级的临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河图腾升华体系", "url": null}
},
{
    "id": "J075",
    "name": "神鹰锻匠",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "shenyingduanjiang.png",
    "desc": "获得1张云中君，战斗开始时，云中君会为距离最近的1个【大河】英雄添加1件神兵装备。若云中君觉醒，神兵至多添加3件。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "云中君", "url": null, "avatar": "images/heroes/yunzhongjun.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河云中君神兵体系", "url": null}
},
{
    "id": "J076",
    "name": "升格",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "大河流域",
    "img": "shengge.png",
    "desc": "战斗中入场的召唤物存活8秒后，变为其召唤者（无卡牌效果）并保留等级，每场战斗最多5次。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "大河召唤升格体系", "url": null}
},
{
    "id": "J077",
    "name": "千里相聚",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "通用",
    "img": "qianlixiangju.png",
    "desc": "每打出3张无阵营英雄牌时，全体英雄等级+4。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "无阵营运营阵容", "url": null}
},
{
    "id": "J078",
    "name": "身外身",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "shenwaishen.png",
    "desc": "获得1张孙悟空，孙悟空释放技能时，呼出2个猴毛化身进行1次攻击。战斗胜利时，化身永久+1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "孙悟空", "url": null, "avatar": "images/heroes/sunwukong.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "孙悟空猴毛化身体系", "url": null}
},
{
    "id": "J079",
    "name": "兄妹",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "xiongmei.png",
    "desc": "获得1张铠和1张露娜。共战时，铠首次释放技能，露娜可以无限释放技能，持续7秒。露娜每次释放技能，铠提升40%攻速。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "铠、露娜", "url": null, "avatar": "images/heroes/kai.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "铠露娜兄妹体系", "url": null}
},
{
    "id": "J080",
    "name": "兽觉",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "shoujue.png",
    "desc": "获得1张裴擒虎和1张云中君。共战时，每当敌人被击败，二人获得兽觉，普攻额外造成100%物理伤害，持续5秒。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "裴擒虎、云中君", "url": null, "avatar": "images/heroes/peiqinghu.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "虎君兽觉体系", "url": null}
},
{
    "id": "J081",
    "name": "巨像",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "juxiang.png",
    "desc": "获得1张米莱狄和1张蒙恬。二人在场时，召唤与米莱狄等级相同的神蒙兽。二人等级之和达到100时，召唤与蒙恬等级相同的猩红神兽。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "米莱狄、蒙恬", "url": null, "avatar": "images/heroes/milaidi.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "巨像神兽体系", "url": null}
},
{
    "id": "J082",
    "name": "舞力全开",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "wuliquan kai.png",
    "desc": "貂蝉、婉儿共战时二人共享法力值（不会变更），技能变为融合技，可对目标造成伤害及负面效果。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "貂蝉、上官婉儿", "url": null, "avatar": "images/heroes/diaochan.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "貂蝉婉儿融合体系", "url": null}
},
{
    "id": "J083",
    "name": "箭雨",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "jianyu.png",
    "desc": "获得1张虞姬和1张公孙离。共战时，每合计攻击10次，将往敌方人群最密集处释放箭雨，各造成3次自身等级×2的法术伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "虞姬、公孙离", "url": null, "avatar": "images/heroes/yuji.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "双弓箭雨体系", "url": null}
},
{
    "id": "J084",
    "name": "双生突袭",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "shuangshetuxi.png",
    "desc": "马可波罗、百里守约共战，释放技能时创造分身朝敌人释放技能。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "马可波罗、百里守约", "url": null, "avatar": "images/heroes/makeboluo.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "双射手分身突袭体系", "url": null}
},
{
    "id": "J085",
    "name": "毒奶",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "dunai.png",
    "desc": "获得1张蔡文姬和1张扁鹊。共战时，扁鹊固定对蔡文姬释放技能，蔡文姬获得50%移速，持续在敌方附近游走并造成伤害（详见技能面板）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "蔡文姬、扁鹊", "url": null, "avatar": "images/heroes/caiwenji.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "毒奶游走体系", "url": null}
},
{
    "id": "J086",
    "name": "逐星",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "zhuxing.png",
    "desc": "获得1张李白和1张曜。共战时，李白释放技能后，曜同步模仿李白，3次后将二人的技能融会贯通，领悟更强大的招式（详见技能面板）。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "李白、曜", "url": null, "avatar": "images/heroes/libai.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "李曜逐星体系", "url": null}
},
{
    "id": "J087",
    "name": "宝盒",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "baohe.png",
    "desc": "获得1张澜和1张孙悟空。共战时二者任意一方受到致死伤害时会暂时离场，持续6秒。在此期间另一方如果阵亡，则返回战场并恢复全部生命值及法力值。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "澜、孙悟空", "url": null, "avatar": "images/heroes/lan.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "澜猴宝盒体系", "url": null}
},
{
    "id": "J088",
    "name": "旋刃",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "xuanren.png",
    "desc": "获得1张李元芳和1张公孙离。共战时二人共享法力值（不会变更），技能变为融合技：旋刃（详见技能面板）。旋刃每造成2次伤害，李元芳等级永久+1。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "李元芳、公孙离", "url": null, "avatar": "images/heroes/liyuanfang.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "元芳阿离旋刃体系", "url": null}
},
{
    "id": "J089",
    "name": "帝临",
    "rank": "金天赋",
    "talentType": "战斗类天赋",
    "camp": "无阵营",
    "img": "dilin.png",
    "desc": "获得1张嬴政和1张武则天。备战开始时，若嬴政和武...",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "嬴政、武则天", "url": null, "avatar": "images/heroes/yingzheng.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "帝临双皇体系", "url": null}
}
,
   {
    "id": "J090",
    "name": "慕名而来",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "mumingerlai.png",
    "desc": "你的英雄每触发4次登场效果，随机获得1张英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "登场流阵容", "url": null}
}
,
{
    "id": "J091",
    "name": "狂野帷幕",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "kuangyeweimu.png",
    "desc": "战斗开始时，所有非牺牲性单位进入隐形状态，持续10秒。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "隐身偷袭阵容", "url": null}
},
{
    "id": "J092",
    "name": "超级蓄能",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "chaojixuneng.png",
    "desc": "回合开始时，你的装备效果英雄会提升场上装备效果英雄数×2的等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多装备英雄阵容", "url": null}
},
{
    "id": "J093",
    "name": "镜像迷离",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "jingxiangmili.png",
    "desc": "战斗开始时，你的英雄偷取敌方同名英雄33%的等级，每名英雄只会因此效果改变一次等级。若对手也拥有此天赋，则无法生效。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "镜像偷等级阵容", "url": null}
},
{
    "id": "J094",
    "name": "摄人心魄",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "sherenxinpo.png",
    "desc": "你的夺取效果英雄击败敌方英雄时，将永久夺取对方3级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "夺取成长阵容", "url": null}
},
{
    "id": "J095",
    "name": "控魂",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "konghun.png",
    "desc": "夺取效果英雄击败敌方英雄时，将其灵魂复活（无卡牌效果），满法力值作战，持续5秒。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "控魂复活阵容", "url": null}
},
{
    "id": "J096",
    "name": "双生相",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "shuangshengxiang.png",
    "desc": "战斗开始时，第一排闪现英雄不再闪现，获得30%最大生命值上限以及10点双抗；后三排闪现英雄额外获得20%暴击率和40%暴击效果。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "闪现英雄分流阵容", "url": null}
},
{
    "id": "J097",
    "name": "生生不息",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "shengshengbuxi.png",
    "desc": "4/5阶的召唤单位获得完美复生。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "高阶召唤物阵容", "url": null}
},
{
    "id": "J098",
    "name": "护命灵珠",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "huminglingzhu.png",
    "desc": "获得护命灵珠：增加护盾，护盾存在期间造成伤害提升。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "护盾增伤阵容", "url": null}
},
{
    "id": "J099",
    "name": "光辉圣铠",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "guanghuishengkai.png",
    "desc": "获得光辉圣铠：每秒获得生命恢复。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "持续回血坦度阵容", "url": null}
},
{
    "id": "J100",
    "name": "魂祭绝刃",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "hunjijueren.png",
    "desc": "获得魂祭绝刃：增加攻速与吸血，但每次战斗以50%生命值开始。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "自残吸血爆发阵容", "url": null}
}
,
{
    "id": "J101",
    "name": "根源之力",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "genyuanzhili.png",
    "desc": "获得根源之力：对敌方血量最少的单位造成法术伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "集火残血阵容", "url": null}
},
{
    "id": "J102",
    "name": "灵泉项链",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "lingquanxianglian.png",
    "desc": "获得灵泉项链：法力值上限-10，自身及周围1格友军每秒获得法力值。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "回蓝辅助阵容", "url": null}
},
{
    "id": "J103",
    "name": "魂灭灵冠",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "hunmielingguan.png",
    "desc": "获得魂灭灵冠：穿戴者阵亡时基于敌人最大生命值造成真实伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "自爆献祭阵容", "url": null}
},
{
    "id": "J104",
    "name": "强敌克星",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "qiangdikexing.png",
    "desc": "获得强敌克星：造成真实伤害，每普攻4次眩晕敌人。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "真伤控制阵容", "url": null}
},
{
    "id": "J105",
    "name": "灵泉法杖",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "lingquanfazhang.png",
    "desc": "获得灵泉法杖：获得闪现，闪现后重击敌人。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "闪现突进阵容", "url": null}
},
{
    "id": "J106",
    "name": "鼓舞之戒",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "guwuzhijie.png",
    "desc": "获得鼓舞之戒：与穿戴者同阵营的英雄提升最大生命值。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "同阵营增益阵容", "url": null}
},
{
    "id": "J107",
    "name": "梦魇之牙",
    "rank": "金天赋",
    "talentType": "装备天赋",
    "img": "mengyanyazhi.png",
    "desc": "获得梦魇之牙：魔法伤害击败敌方造成范围伤害。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "法爆范围收割阵容", "url": null}
},
{
    "id": "J108",
    "name": "末世",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "moshi.png",
    "desc": "获得末世：普通攻击偷取敌方生命值。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "普攻吸血阵容", "url": null}
},
{
    "id": "J109",
    "name": "拾荒者",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "shihuangzhe.png",
    "desc": "恢复10棋手生命值。之后每有1位棋手被淘汰，获得2张5阶英雄兑换券。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "后期高费阵容", "url": null}
},
{
    "id": "J110",
    "name": "群星璀璨",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "qunxingcuican.png",
    "desc": "获得2张4-5阶英雄兑换券。当你场上至少有5名4-5阶英雄时，所有4-5阶英雄获得20临时等级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "全高费阵容", "url": null}
},
{
    "id": "J111",
    "name": "无影手",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "wuyingshou.png",
    "desc": "回合开始时，获得3次仅本回合可用的免费商店刷新。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "D牌赌狗阵容", "url": null}
},
{
    "id": "J112",
    "name": "学霸",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "xueba.png",
    "desc": "获得5能量。若你是第1个到达5/6级的棋手，则5级获得2张5阶英雄兑换券，6级获得1件天赋装备。失败则获得晋级证明。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "速冲等级阵容", "url": null}
},
{
    "id": "J113",
    "name": "绝境逆袭",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "juejingnixi.png",
    "desc": "当你排名不是第1或第2名时，你的所有单位伤害+20%，最大生命值+25%。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "逆风翻盘阵容", "url": null}
},
{
    "id": "J114",
    "name": "买橘子去",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "maijuziqu.png",
    "desc": "获得1张天赋牌站这别动：指定1个弈位，每过2回合，获得1张此格上的英雄牌。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "追三星核心阵容", "url": null}
},
{
    "id": "J115",
    "name": "扩编高峰",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "kuobiangaofeng.png",
    "desc": "获得1个可购买天赋：花费8能量，可上阵人数+1。可购买3次。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "多人口大成阵容", "url": null}
},
{
    "id": "J116",
    "name": "补给线：整备",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "bujixian-zhengbei.png",
    "desc": "获得1张整备效果英雄牌。回合开始时，再获得1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "整备体系阵容", "url": null}
},
{
    "id": "J117",
    "name": "补给线：牺牲",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "bujixian-xisheng.png",
    "desc": "获得1张牺牲效果英雄牌。回合开始时，再获得1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "牺牲献祭阵容", "url": null}
},
{
    "id": "J118",
    "name": "补给线：登场",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "bujixian-dengchang.png",
    "desc": "获得1张登场效果英雄牌。回合开始时，再获得1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "登场流阵容", "url": null}
},
{
    "id": "J119",
    "name": "混沌次元",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "hundunciyuan.png",
    "desc": "获得混沌裂隙：指定阵位召唤裂隙，开战前吞噬英雄，永久获得其双倍等级。开战时，召唤1名品阶≥商店等级的满装备英雄。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "吞噬成长阵容", "url": null}
},
{
    "id": "J120",
    "name": "危险数字",
    "rank": "金天赋",
    "talentType": "通用",
    "img": "weixianshuzi.png",
    "desc": "在商店每买3张牌，获得1能量；若其品阶相加等于10，随机再获得其中1张。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "无", "url": null, "avatar": null},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "低费高费搭配D牌阵容", "url": null}
},
{
    "id": "J121",
    "name": "起舞",
    "rank": "金天赋",
    "talentType": "无阵营",
    "img": "qiwu.png",
    "desc": "获得1张貂蝉和1张上官婉儿。共战时，参与击败敌方英雄后，二人均+10点法术攻击力并+1级。",
    "source": "棋手升级时概率选择获取天赋。",
    "relatedProduct": {"name": "无", "url": null},
    "fitHero": {"name": "貂蝉、上官婉儿", "url": null, "avatar": "images/heroes/diaochan.png"},
    "fitPlayer": {"name": "无", "url": null, "avatar": null},
    "fitTeam": {"name": "貂蝉婉儿起舞体系", "url": null}
}         
]

const talentCardList = document.getElementById("talentCardList");
const talentSearch = document.getElementById("talentSearch");
const rankFilter = document.getElementById("rankFilter");
const talentTypeFilter = document.getElementById("talentTypeFilter");
const campFilter = document.getElementById("campFilter");
const boostTypeFilter = document.getElementById("boostTypeFilter");
const talentModal = document.getElementById("talentModal");
const talentModalBody = document.getElementById("talentModalBody");

function closeModal() {
    talentModal.classList.remove('show');
}

function renderTalent() {
    const kw = talentSearch.value.trim().toLowerCase();
    const selRankVal = rankFilter.value;
    const seltalentVal = talentTypeFilter.value;
    const selCampVal = campFilter.value;
    const selBoostVal = boostTypeFilter.value;

    talentCardList.innerHTML = "";
    talentList.forEach(item => {
        const matchSearch = !kw || item.name.toLowerCase().includes(kw) || item.desc.toLowerCase().includes(kw);

        // 品阶筛选
        let matchRank = true;
        if (selRankVal !== "all") {
            if (selRankVal === "copper") matchRank = item.rank === "铜天赋";
            if (selRankVal === "silver") matchRank = item.rank === "银天赋";
            if (selRankVal === "gold") matchRank = item.rank === "金天赋";
        }

        // 四类天赋筛选：资源 / 战力 / 机制 / 生存
        let matchtalent = true;
        if (seltalentVal !== "all") {
            if (seltalentVal === "resource") {
                matchtalent = item.talentType === "资源类天赋";
            }
            if (seltalentVal === "combat") {
                matchtalent = item.talentType === "战力类天赋";
            }
            if (seltalentVal === "mechanism") {
                matchtalent = item.talentType === "机制类天赋";
            }
            if (seltalentVal === "survive") {
                matchtalent = item.talentType === "生存类天赋";
            }
        }

        // 阵营筛选
        let matchCamp = true;
        if (selCampVal !== "all") {
            if (selCampVal === "sand") matchCamp = item.camp === "三分之地";
            if (selCampVal === "river") matchCamp = item.camp === "大河流域";
            if (selCampVal === "sunset") matchCamp = item.camp === "日落海";
            if (selCampVal === "heluo") matchCamp = item.camp === "河洛";
            if (selCampVal === "battle") matchCamp = item.camp === "逐鹿";
            if (selCampVal === "nocamp") matchCamp = item.camp === "无阵营";
            if (selCampVal === "none") matchCamp = item.camp === "通用";
        }

        const matchBoost = true;
        if (!(matchSearch && matchRank && matchtalent && matchCamp && matchBoost)) return;

        const cardDom = document.createElement("div");
        cardDom.className = "talent-card-item";
        cardDom.innerHTML = `
            <div class="talent-card-cover">
                <img src="images/talent/${item.img}" alt="${item.name}">
            </div>
        `;
        cardDom.onclick = () => openModal(item);
        talentCardList.appendChild(cardDom);
    })
}

// 弹窗
function openModal(item) {
    const fullImgPath = `images/talent/${item.img}`;
    const renderItem = (info) => {
        if (!info || !info.name) return "无";
        if (info.url) {
            let clickHandler;
            if (info.url.startsWith('#hero-')) {
                clickHandler = `event.preventDefault();closeModal();openHeroModal('${info.name}')`;
            } else {
                clickHandler = `event.preventDefault();closeModal()`;
            }
            return `<a href="${info.url}" class="modal-link" onclick="${clickHandler}">
                <img src="${info.avatar}" style="width:32px;height:32px;object-fit:cover;border-radius:6px;vertical-align:middle;margin-right:6px;" onerror="this.style.display='none'">${info.name}
            </a>`;
        } else {
            return info.name;
        }
    };
    talentModalBody.innerHTML = `
        <div class="talent-modal-wrap" onclick="event.stopPropagation()">
            <div class="modal-left">
                <img class="talent-card-img" src="${fullImgPath}" alt="${item.name}" onerror="this.style.display='none'">
            </div>
            <div class="modal-right">
                <div class="rank-tag ${item.rank === '铜天赋' ? 'copper' : item.rank === '银天赋' ? 'silver' : 'gold'}">
                    ${item.rank}
                </div>
                <h2 class="talent-title">${item.name}</h2>
                <div class="type-tag ${
                    item.talentType.includes('资源') ? 'resource' :
                    item.talentType.includes('战力') ? 'combat' :
                    item.talentType.includes('机制') ? 'mechanism' : 'survive'
                }">
                    ${item.talentType}
                </div>
                <p class="talent-desc">${item.desc}</p>
                <p class="source-line">来源：${item.source || "未知"}</p>
                <div class="info-row">
                    <span class="label">相关产物：</span>
                    <span>${renderItem(item.relatedProduct)}</span>
                </div>
                <div class="info-row">
                    <span class="label">适配英雄：</span>
                    <span>${renderItem(item.fitHero)}</span>
                </div>
                <div class="info-row">
                    <span class="label">适配棋手：</span>
                    <span>${renderItem(item.fitPlayer)}</span>
                </div>
                <div class="info-row">
                    <span class="label">适配阵容：</span>
                    <span>${renderItem(item.fitTeam)}</span>
                </div>
            </div>
        </div>
    `;
    talentModal.classList.add('show');
}

// 遮罩关闭
talentModal.onclick = function(e){
    if(e.target === talentModal){
        closeModal();
    }
}

// 事件绑定
talentSearch.addEventListener("input", renderTalent);
rankFilter.addEventListener("change", renderTalent);
talentTypeFilter.addEventListener("change", renderTalent);
campFilter.addEventListener("change", renderTalent);
boostTypeFilter.addEventListener("change", renderTalent);

renderTalent();
