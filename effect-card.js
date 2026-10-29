const effectList = [
    // ========== 一阶 ==========
    {
        id: 1,
        name: "吸纳人才",
        type: "一阶",
        pos: "通用",
        desc: "卡牌 4 选 1（英雄牌）。",
        source: "该卡通过效果锦囊等渠道获得。",
        img: "images/effectcard/xiyinrencai.png",
    },
    {
        id: 2,
        name: "1阶英雄兑换券",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/1jieyingxiongduihuanquan.png",
    },
    {
        id: 3,
        name: "研读会",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/yanduhui.png",
    },
    {
        id: 4,
        name: "高级人才",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/gaojirencai.png",
    },
    {
        id: 5,
        name: "援护战术",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/yuanhuzhanshu.png",
    },
    {
        id: 6,
        name: "古币",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/gubi.png",
    },
    {
        id: 7,
        name: "惊喜补贴",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/jingxibutie.png",
    },
    {
        id: 8,
        name: "招兵买马",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/zhaobingmaima.png",
    },
    {
        id: 9,
        name: "1阶英雄",
        type: "一阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/1jieyingxiong.png",
    },
    // ========== 二阶 ==========
    {
        id: 10,
        name: "跳级",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/tiaoji.png",
    },
    {
        id: 11,
        name: "图腾仪式",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/tutengyishi.png",
    },
    {
        id: 12,
        name: "2阶英雄",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/2jieyingxiong.png",
    },
    {
        id: 13,
        name: "古币多多",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/gubiduoduo.png",
    },
    {
        id: 14,
        name: "弦音",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/xianyin.png",
    },
    {
        id: 15,
        name: "2阶英雄兑换券",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/2jieyingxiongduihuanquan.png",
    },
    // 修复第16条断裂语法
    {
        id: 16,
        name: "军械库",
        type: "二阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/junxieku.png",
    },
    {
        id: 87,
        name: "众星拱月",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/zhongxinggongyue.png",
    },
    {
        id: 88,
        name: "神兵天降",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/shenbingtianjiang.png",
    },
    {
        id: 89,
        name: "呼风唤雨",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/hufenghuanyu.png",
    },
    {
        id: 90,
        name: "破境之证",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/pojingzhizheng.png",
    },
    {
        id: 91,
        name: "天籁琴音",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/tianlaiqinyin.png",
    },
    {
        id: 92,
        name: "绝处逢生",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/juechufengsheng.png",
    },
    {
        id: 93,
        name: "化铁为金",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/huatieweijin.png",
    },
    {
        id: 94,
        name: "超级复印机",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/chaojifuyinji.png",
    },
    {
        id: 95,
        name: "一线生机",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/yixianshengji.png",
    },
    {
        id: 96,
        name: "能量超新星",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/nengliangchaoxinxing.png",
    },
    {
        id: 97,
        name: "扶摇直上",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/fuyaozhishang.png",
    },
    {
        id: 98,
        name: "狂飙三倍速",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/kuangbiaosanbeisu.png",
    },
    {
        id: 99,
        name: "四人同行",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/sirentongxing.png",
    },
    {
        id: 100,
        name: "新生力量",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/xinshenglliang.png",
    },
    {
        id: 101,
        name: "沧海拾遗",
        type: "六阶",
        pos: "通用",
        desc: "",
        source: "",
        img: "images/effectcard/canghai-shiyi.png",
    },
];

import { effectList } from './effect.js'; // 改成你实际文件名

const searchInput = document.getElementById('searchInput');
const tierSelect = document.getElementById('tierSelect');
const posSelect = document.getElementById('posSelect'); // 新增

function render() {
  const keyword = searchInput.value.trim().toLowerCase();
  const tierVal = tierSelect.value;
  const posVal = posSelect.value; // 新增

  const result = effectList.filter(item => {
    const matchTier = tierVal === 'all' || item.type === tierVal;
    const matchPos = posVal === 'all' || item.pos === posVal;
    const matchName = item.name.toLowerCase().includes(keyword);
    return matchTier && matchPos && matchName;
  });

  // 渲染卡片部分不变
  cardGrid.innerHTML = result.map(item => `
    <div class="card-item">
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-name">${item.name}</div>
        <div class="card-type">${item.type}</div>
        <div class="card-pos">${item.pos}</div>
        ${item.desc ? `<div class="card-desc">${item.desc}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// 记得绑定pos下拉的change事件
searchInput.addEventListener('input', render);
tierSelect.addEventListener('change', render);
posSelect.addEventListener('change', render); // 新增
render();
