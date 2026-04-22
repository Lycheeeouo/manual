// === 1. 設定資料庫 ===
const statData = [
    // --- 原有的一般稱號 ---
    { id: 1, name: "公民", type: "暴擊傷害", value: 25.0 },
    { id: 2, name: "可愛的", type: "最大血量", value: 1.0 },
    { id: 3, name: "髒髒比", type: "總體防禦", value: 0.5 },
    { id: 4, name: "苦力怕好夥伴", type: "暴擊機率", value: 0.2 },
    { id: 5, name: "凋零虎嘯", type: "暴擊機率", value: 0.4 },
    { id: 6, name: "釣魚達人", type: "最大血量", value: 1.0 },
    { id: 7, name: "盜墓者", type: "暴擊傷害", value: 4.0 },
    { id: 8, name: "炸彈客", type: "暴擊機率", value: 0.2 },
    { id: 9, name: "賞金獵人", type: "攻擊傷害", value: 1.0 },
    { id: 10, name: "大富翁", type: "最大血量", value: 1.0 },
    { id: 11, name: "家財萬貫", type: "最大血量", value: 6.0 },
    { id: 12, name: "終界突襲者", type: "攻擊傷害", value: 1.0 },
    { id: 13, name: "小黑炭", type: "最大血量", value: 1.0 },
    { id: 14, name: "能工巧匠", type: "暴擊傷害", value: 5.0 },
    { id: 15, name: "鑽石達人", type: "最大血量", value: 1.0 },
    { id: 16, name: "瞬移獵人", type: "暴擊傷害", value: 6.0 },
    { id: 17, name: "彼端的探險者", type: "暴擊傷害", value: 12.0 },
    { id: 18, name: "超級可愛的", type: "最大血量", value: 10.0 },
    { id: 19, name: "尋覓真相的", type: "最大血量", value: 2.0 },
    { id: 20, name: "出生入死的", type: "最大血量", value: 2.0 },
    { id: 21, name: "一杯就倒的", type: "總體防禦", value: 2.0 },
    { id: 22, name: "戰勝邪惡的", type: "攻擊傷害", value: 2.0 },
    { id: 23, name: "捍衛信仰的", type: "總體防禦", value: 2.0 },
    { id: 24, name: "探索桃源的", type: "攻擊傷害", value: 2.0 },
    { id: 25, name: "黑白無常", type: "暴擊機率", value: 0.2 },
    { id: 26, name: "海中蛟龍", type: "暴擊傷害", value: 10.0 },
    { id: 27, name: "林場獵手", type: "最大血量", value: 2.0 },
    { id: 28, name: "千金散盡還復來", type: "最大血量", value: 4.0 },
    { id: 29, name: "粉晶傳承者", type: "魔法傷害", value: 1.0 },
    { id: 30, name: "天降鴻運", type: "遠程傷害", value: 1.0 },
    { id: 30, name: "天降鴻運", type: "魔法傷害", value: -1.0 },
    { id: 31, name: "大摳呆", type: "總體防禦", value: 2.0 },
    { id: 31, name: "大摳呆", type: "最大血量", value: 2.0 },
    { id: 32, name: "涅槃重生", type: "最大血量", value: 4.0 },
    { id: 33, name: "能者過勞", type: "攻擊傷害", value: 2.0 },
    { id: 34, name: "鎬出了黑肝", type: "暴擊傷害", value: 20.0 },
    { id: 34, name: "鎬出了黑肝", type: "暴擊機率", value: 0.5 },
    { id: 35, name: "敲出了黑肝", type: "暴擊傷害", value: 20.0 },
    { id: 35, name: "敲出了黑肝", type: "暴擊機率", value: 0.5 },
    { id: 36, 'name': '地獄破壞者', 'type': '攻擊傷害', 'value': 1.0},
    { id: 37, 'name': '終界破壞者', 'type': '攻擊傷害', 'value': 1.0},
    { id: 38, 'name': '地獄來的使者', 'type': '攻擊傷害', 'value': 2.0},
    { id: 39, 'name': '世界之樹', 'type': '最大血量', 'value': 1.0},
    { id: 40, 'name': '小彩蛋', 'type': '最大血量', 'value': 2.0},
    { id: 41, 'name': '海枯石爛', 'type': '總體防禦', 'value': 4.0},
    { id: 42, 'name': '榮譽玩家', 'type': '總體防禦', 'value': 2.0},
    { id: 42, 'name': '榮譽玩家', 'type': '最大血量', 'value': 2.0},
    { id: 42, 'name': '榮譽玩家', 'type': '暴擊傷害', 'value': 10.0},
    { id: 43, 'name': '血戰魔族', 'type': '暴擊傷害', 'value': 30.0},
    { id: 44, 'name': '腐朽之夢', 'type': '暴擊傷害', 'value': 30.0},
    { id: 45, 'name': '快樂小礦工', 'type': '攻擊傷害', 'value': 1.0},
    { id: 46, 'name': '真要命', 'type': '最大血量', 'value': 2.0},
    { id: 47, 'name': '暴君之敵', 'type': '攻擊傷害', 'value': 0.5},
    { id: 48, 'name': '豬布林殺手', 'type': '攻擊傷害', 'value': 0.5},
    { id: 49, 'name': '寶石愛好者', 'type': '攻擊傷害', 'value': 0.5},
    { id: 50, 'name': '恐懼的凝視', 'type': '攻擊傷害', 'value': 0.5},
    { id: 51, 'name': '蠻原狂掠', 'type': '攻擊傷害', 'value': 0.5},
    { id: 52, 'name': '身朽心不朽', 'type': '攻擊傷害', 'value': 0.5},
    { id: 53, 'name': '用心良苦', 'type': '暴擊機率', 'value': 0.5},
    { id: 54, 'name': '槍械大師', 'type': '暴擊傷害', 'value': 10.0},
    { id: 55, 'name': '爛砲兵', 'type': '暴擊傷害', 'value': 12.0},
    { id: 56, 'name': '審判之日', 'type': '暴擊傷害', 'value': 20.0},
    { id: 57, 'name': '基岩做的肝', 'type': '最大血量', 'value': 1.0},
    { id: 58, 'name': '頭偏掉了', 'type': '最大血量', 'value': 1.0},
    { id: 59, 'name': '引路之光', 'type': '最大血量', 'value': 4.0},
    { id: 59, 'name': '引路之光', 'type': '暴擊傷害', 'value': 20.0},
    { id: 59, 'name': '引路之光', 'type': '攻擊傷害', 'value': 2.0},
    { id: 60, 'name': '瘦皮猴', 'type': '攻擊傷害', 'value': 1.5},
    { id: 61, 'name': '金雞母', 'type': '最大血量', 'value': 6.0},
    { id: 62, 'name': '熊熊遇見你', 'type': '最大血量', 'value': 6.0},
    { id: 63, 'name': '神農轉世', 'type': '攻擊傷害', 'value': 10.0},
    { id: 63, 'name': '神農轉世', 'type': '暴擊機率', 'value': 1.0},
    { id: 63, 'name': '神農轉世', 'type': '最大血量', 'value': 20.0},
    { id: 64, 'name': '釣魚宗師', 'type': '最大血量', 'value': 5.0},
    { id: 65, 'name': '單人挑戰副本1', 'type': '攻擊傷害', 'value': 2.0},
    { id: 66, 'name': '單人挑戰副本2', 'type': '攻擊傷害', 'value': 3.0},
    { id: 67, 'name': '單人挑戰副本3', 'type': '總體防禦', 'value': 15.0},
    { id: 68, 'name': '單人挑戰副本4', 'type': '攻擊傷害', 'value': 5.0},
    { id: 69, 'name': '金金1', 'type': '攻擊傷害', 'value': 2.0},
    { id: 70, 'name': '金金2', 'type': '攻擊傷害', 'value': 2.0},
    { id: 71, 'name': '金金3', 'type': '攻擊傷害', 'value': 2.0},
    { id: 72, 'name': '金金4', 'type': '攻擊傷害', 'value': 2.0},
    { id: 73, 'name': '金金5', 'type': '攻擊傷害', 'value': 4.0},
    { id: 74, 'name': '木木1', 'type': '最大血量', 'value': 4.0},
    { id: 75, 'name': '木木2', 'type': '最大血量', 'value': 4.0},
    { id: 76, 'name': '木木3', 'type': '最大血量', 'value': 4.0},
    { id: 77, 'name': '木木4', 'type': '最大血量', 'value': 4.0},
    { id: 78, 'name': '木木5', 'type': '最大血量', 'value': 8.0},
    { id: 79, 'name': '水水1', 'type': '暴擊機率', 'value': 0.5},
    { id: 80, 'name': '水水2', 'type': '暴擊機率', 'value': 0.5},
    { id: 81, 'name': '水水3', 'type': '暴擊機率', 'value': 0.5},
    { id: 82, 'name': '水水4', 'type': '暴擊機率', 'value': 0.5},
    { id: 83, 'name': '水水5', 'type': '暴擊機率', 'value': 0.5},
    { id: 84, 'name': '火火1', 'type': '暴擊傷害', 'value': 10.0},
    { id: 85, 'name': '火火2', 'type': '暴擊傷害', 'value': 10.0},
    { id: 86, 'name': '火火3', 'type': '暴擊傷害', 'value': 10.0},
    { id: 87, 'name': '火火4', 'type': '暴擊傷害', 'value': 10.0},
    { id: 88, 'name': '火火5', 'type': '暴擊傷害', 'value': 20.0},
    { id: 89, 'name': '土土1', 'type': '總體防禦', 'value': 6.0},
    { id: 90, 'name': '土土2', 'type': '總體防禦', 'value': 6.0},
    { id: 91, 'name': '土土3', 'type': '總體防禦', 'value': 6.0},
    { id: 92, 'name': '土土4', 'type': '總體防禦', 'value': 6.0},
    { id: 93, 'name': '土土5', 'type': '總體防禦', 'value': 12.0},

    // --- 料理與活動類 (新增 extra 屬性來做分類) ---
    // 子分類：飲料類
    { id: 98, 'name': '獨步快樂水1', 'type': '暴擊機率', 'value': 1.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 98, 'name': '獨步快樂水1', 'type': '暴擊傷害', 'value': 50.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 99, 'name': '獨步快樂水2', 'type': '暴擊機率', 'value': 1.5, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 99, 'name': '獨步快樂水2', 'type': '暴擊傷害', 'value': 60.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 100, 'name': '獨步快樂水3', 'type': '暴擊機率', 'value': 2.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 100, 'name': '獨步快樂水3', 'type': '暴擊傷害', 'value': 70.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 101, 'name': '獨步快樂水4', 'type': '暴擊機率', 'value': 2.5, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 101, 'name': '獨步快樂水4', 'type': '暴擊傷害', 'value': 80.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 102, 'name': '獨步快樂水5', 'type': '暴擊機率', 'value': 3.0, extra: { cat: 'cooking', sub: 'drinks' } },
    { id: 102, 'name': '獨步快樂水5', 'type': '暴擊傷害', 'value': 90.0, extra: { cat: 'cooking', sub: 'drinks' } },

    // 子分類：熟食類
    { id: 103, 'name': '大俠愛吃漢堡包1', 'type': '攻擊傷害', 'value': 2.0, extra: { cat: 'cooking', sub: 'food' } },
    { id: 104, 'name': '大俠愛吃漢堡包2', 'type': '攻擊傷害', 'value': 4.0, extra: { cat: 'cooking', sub: 'food' } },
    { id: 105, 'name': '大俠愛吃漢堡包3', 'type': '攻擊傷害', 'value': 6.0, extra: { cat: 'cooking', sub: 'food' } },
    { id: 106, 'name': '大俠愛吃漢堡包4', 'type': '攻擊傷害', 'value': 8.0, extra: { cat: 'cooking', sub: 'food' } },
    { id: 107, 'name': '大俠愛吃漢堡包5', 'type': '攻擊傷害', 'value': 10.0, extra: { cat: 'cooking', sub: 'food' } },

    // 子分類：甜點類
    { id: 108, 'name': '史萊姆冰淇淋1', 'type': '最大血量', 'value': 20.0, extra: { cat: 'cooking', sub: 'dessert' } },
    { id: 109, 'name': '史萊姆冰淇淋2', 'type': '最大血量', 'value': 30.0, extra: { cat: 'cooking', sub: 'dessert' } },
    { id: 110, 'name': '史萊姆冰淇淋3', 'type': '最大血量', 'value': 40.0, extra: { cat: 'cooking', sub: 'dessert' } },
    { id: 111, 'name': '史萊姆冰淇淋4', 'type': '最大血量', 'value': 50.0, extra: { cat: 'cooking', sub: 'dessert' } },
    { id: 112, 'name': '史萊姆冰淇淋5', 'type': '最大血量', 'value': 60.0, extra: { cat: 'cooking', sub: 'dessert' } },

    // 子分類：活動類
    { id: 113, 'name': '布朗尼蛋糕', 'type': '攻擊傷害', 'value': 3.0, extra: { cat: 'cooking', sub: 'event' } },
    { id: 113, 'name': '布朗尼蛋糕', 'type': '最大血量', 'value': -10.0, extra: { cat: 'cooking', sub: 'event' } },
    { id: 114, 'name': '端午肉粽', 'type': '暴擊機率', 'value': 3.0, extra: { cat: 'cooking', sub: 'event' } },
    { id: 114, 'name': '端午肉粽', 'type': '最大血量', 'value': -10.0, extra: { cat: 'cooking', sub: 'event' } },
    { id: 115, 'name': '祥兔桂花月餅', 'type': '攻擊傷害', 'value': 3.0, extra: { cat: 'cooking', sub: 'event' } },
    { id: 115, 'name': '祥兔桂花月餅', 'type': '最大血量', 'value': -10.0, extra: { cat: 'cooking', sub: 'event' } },

    // --- 一般加成 ---
    { id: 116, 'name': '副本特殊事件加成', 'type': '攻擊傷害', 'value': 10.0},
    { id: 116, 'name': '副本特殊事件加成', 'type': '暴擊機率', 'value': 10.0},
    { id: 116, 'name': '副本特殊事件加成', 'type': '暴擊傷害', 'value': 200.0},
    { id: 116, 'name': '副本特殊事件加成', 'type': '最大血量', 'value': 30.0},
    { id: 116, 'name': '副本特殊事件加成', 'type': '總體防禦', 'value': 50.0},
    // 週活躍加成
    { id: 117, 'name': '週活躍屬性點-攻擊1', 'type': '攻擊傷害', 'value': 3.0},
    { id: 118, 'name': '週活躍屬性點-攻擊2', 'type': '攻擊傷害', 'value': 3.0},
    { id: 119, 'name': '週活躍屬性點-攻擊3', 'type': '攻擊傷害', 'value': 3.0},
    { id: 120, 'name': '週活躍屬性點-攻擊4', 'type': '攻擊傷害', 'value': 3.0},
    { id: 121, 'name': '週活躍屬性點-攻擊5', 'type': '攻擊傷害', 'value': 3.0},
    { id: 122, 'name': '週活躍屬性點-攻擊6', 'type': '攻擊傷害', 'value': 3.0},
    { id: 123, 'name': '週活躍屬性點-血量1', 'type': '最大血量', 'value': 6.0},
    { id: 124, 'name': '週活躍屬性點-血量2', 'type': '最大血量', 'value': 6.0},
    { id: 125, 'name': '週活躍屬性點-血量3', 'type': '最大血量', 'value': 6.0},
    { id: 126, 'name': '週活躍屬性點-血量4', 'type': '最大血量', 'value': 6.0},
    { id: 127, 'name': '週活躍屬性點-血量5', 'type': '最大血量', 'value': 6.0},
    { id: 128, 'name': '週活躍屬性點-血量6', 'type': '最大血量', 'value': 6.0},
    { id: 129, 'name': '週活躍屬性點-總防1', 'type': '總體防禦', 'value': 6.0},
    { id: 130, 'name': '週活躍屬性點-總防2', 'type': '總體防禦', 'value': 6.0},
    { id: 131, 'name': '週活躍屬性點-總防3', 'type': '總體防禦', 'value': 6.0},
    { id: 132, 'name': '週活躍屬性點-總防4', 'type': '總體防禦', 'value': 6.0},
    { id: 133, 'name': '週活躍屬性點-總防5', 'type': '總體防禦', 'value': 6.0},
    { id: 134, 'name': '週活躍屬性點-總防6', 'type': '總體防禦', 'value': 6.0},
    { id: 135, 'name': '週活躍屬性點-爆傷1', 'type': '暴擊傷害', 'value': 30.0},
    { id: 136, 'name': '週活躍屬性點-爆傷2', 'type': '暴擊傷害', 'value': 30.0},
    { id: 137, 'name': '週活躍屬性點-爆傷3', 'type': '暴擊傷害', 'value': 30.0},
    { id: 138, 'name': '週活躍屬性點-爆傷4', 'type': '暴擊傷害', 'value': 30.0},
    { id: 139, 'name': '週活躍屬性點-爆傷5', 'type': '暴擊傷害', 'value': 30.0},
    { id: 140, 'name': '週活躍屬性點-爆傷6', 'type': '暴擊傷害', 'value': 30.0}

];

let selectedItems = new Set();
let currentFilter = 'all';

// === 2. 初始化 (修改版：加入讀取存檔) ===
window.initCalculator = function() {
    // 1. 嘗試讀取存檔
    const savedData = localStorage.getItem('rpg_calc_save');

    if (savedData) {
        try {
            // 如果有存檔，把 JSON 字串轉回陣列，再轉回 Set
            const parsedArray = JSON.parse(savedData);
            selectedItems = new Set(parsedArray);
        } catch (e) {
            console.error("讀取存檔失敗，將重置為空", e);
            selectedItems = new Set();
        }
    }

    // 2. 渲染畫面
    renderFilterButtons();
    renderItems();

    // 3. 計算數值 (但不觸發保存，避免重複寫入)
    updateCalculation(false);
};

document.addEventListener("DOMContentLoaded", function() {
    window.initCalculator();
});

// === 3. 產生篩選按鈕 ===
function renderFilterButtons() {
    // 抓出所有不重複的 type
    const types = [...new Set(statData.map(item => item.type))];

    const container = document.getElementById('filter-container');
    if(!container) return;

    // 建立基本按鈕：全部顯示
    let html = `<li><a href="javascript:void(0)" class="button small ${currentFilter === 'all' ? 'primary' : ''}" onclick="setFilter('all')">全部顯示</a></li>`;

    // 建立「料理」按鈕 (獨立顯示)
    html += `<li><a href="javascript:void(0)" class="button small ${currentFilter === 'cooking' ? 'primary' : ''}" onclick="setFilter('cooking')">料理</a></li>`;

    // 建立其他屬性按鈕
    html += types.map(type => {
        const activeClass = type === currentFilter ? 'primary' : '';
        return `<li><a href="javascript:void(0)" class="button small ${activeClass}" onclick="setFilter('${type}')">${type}</a></li>`;
    }).join('');

    container.innerHTML = html;
}

// === 4. 設定篩選 ===
function setFilter(type) {
    currentFilter = type;
    renderFilterButtons();
    renderItems();
}

// === 5. 產生詞條按鈕 (修改版：嚴格分類 + 單一/複合屬性排序) ===
function renderItems() {
    const container = document.getElementById('items-container');
    if(!container) return;
    container.innerHTML = '';

    // --- 情況 A: 料理分類 (依照子分類顯示) ---
    if (currentFilter === 'cooking') {
        const cookingSubCats = {
            'drinks': '飲料類',
            'food': '熟食類',
            'dessert': '甜點類',
            'event': '活動類'
        };

        for (let [subKey, subName] of Object.entries(cookingSubCats)) {
            // 找出該子分類項目
            const subItems = statData.filter(d => d.extra && d.extra.cat === 'cooking' && d.extra.sub === subKey);
            const subItemNames = [...new Set(subItems.map(d => d.name))];

            if (subItemNames.length > 0) {
                createSectionHeader(subName, container);
                subItemNames.forEach(name => createButton(name, container));
            }
        }
        return; // 料理模式結束
    }

    // --- 情況 B: 其他分類 (全部顯示 or 單一屬性) ---

    // 1. 取得所有不重複名稱
    const allNames = [...new Set(statData.map(d => d.name))];

    // 2. 準備兩個陣列存放分類後的名稱
    let singleValNames = [];
    let multiValNames = [];

    allNames.forEach(name => {
        const groupItems = statData.filter(d => d.name === name);

        // ★★★ 修改重點 1: 嚴格排除料理 ★★★
        // 只要這個稱號被標記為 cooking，除了在料理分頁外，其他地方一律不顯示
        if (groupItems[0].extra && groupItems[0].extra.cat === 'cooking') return;

        // 判斷是否符合當前篩選 (全部顯示 or 特定屬性)
        let shouldShow = false;
        if (currentFilter === 'all') {
            shouldShow = true;
        } else {
            // 屬性篩選 (例如選「攻擊傷害」)
            if (groupItems.some(item => item.type === currentFilter)) {
                shouldShow = true;
            }
        }

        if (shouldShow) {
            // ★★★ 修改重點 2: 區分單一數值與多重數值 ★★★
            if (groupItems.length === 1) {
                singleValNames.push(name);
            } else {
                multiValNames.push(name);
            }
        }
    });

    // 3. 渲染畫面 (單一數值放前面)
    if (singleValNames.length > 0) {
        // 如果是在「全部顯示」模式，我們可以顯示「單一屬性」標題
        // 如果是在「攻擊傷害」模式，顯示「單一屬性」依然合理
        createSectionHeader("單一屬性加成", container);
        singleValNames.forEach(name => createButton(name, container));
    }

    if (multiValNames.length > 0) {
        createSectionHeader("複合屬性加成", container);
        multiValNames.forEach(name => createButton(name, container));
    }

    // 如果兩邊都沒東西 (例如選了一個屬性，但該屬性只有料理才有)
    if (singleValNames.length === 0 && multiValNames.length === 0) {
        container.innerHTML = '<div style="width:100%; text-align:center; opacity:0.5; margin-top:2rem;">此分類下沒有非料理項目</div>';
    }
}

// 輔助函式：建立標題 (統一外觀)
function createSectionHeader(text, container) {
    const header = document.createElement('h4');
    header.textContent = text;
    header.style.width = '100%';
    header.style.textAlign = 'center';
    header.style.marginTop = '1rem';
    header.style.marginBottom = '0.5rem';

    // ★★★ 在這裡修改顏色 ★★★
    // 淡綠: #e3ffe3
    // 白色: #ffffff
    // 粉紅: #ffc0cb
    // 淡粉: #f1e0f1
    // 金色: #ffd700
    // 淺藍: #aaddff
    header.style.color = '#f1e0f1';

    // 如果顏色改得很深，記得把光暈 (textShadow) 改成淺色或拿掉
    header.style.textShadow = '0 0 5px rgba(255,255,255,0.3)';

    container.appendChild(header);
}

// 輔助函式：建立按鈕 (減少重複程式碼)
function createButton(name, container) {
    const groupItems = statData.filter(d => d.name === name);
    const firstId = groupItems[0].id;
    const isActive = selectedItems.has(firstId) ? 'active' : '';
    const mainType = groupItems[0].type;
    const style = getStyleForType(mainType);

    let subtitleHtml = groupItems.map(item => {
        let val = item.value;
        let sign = val < 0 ? "" : "+";
        if(item.type.includes("機率")) val += "%";
        return `<div>${item.type} ${sign}${val}</div>`;
    }).join('');

    const btn = document.createElement('button');
    btn.className = `button small calc-btn ${isActive}`;
    btn.innerHTML = `
            <span class="btn-title" style="--text-gradient: ${style.gradient}; --text-glow: ${style.glow}">
                ${name}
            </span>
            <span class="btn-subtitle" style="font-size: 0.7em; line-height: 1.4;">
                ${subtitleHtml}
            </span>
        `;
    btn.onclick = () => toggleGroup(name);
    container.appendChild(btn);
}

// === 6. 切換選取 (維持互斥邏輯) ===
function toggleGroup(name) {
    const targetGroup = statData.filter(d => d.name === name);
    const targetIds = targetGroup.map(d => d.id);
    const firstItem = targetGroup[0];
    const isSelected = selectedItems.has(targetIds[0]);

    if (isSelected) {
        targetIds.forEach(id => selectedItems.delete(id));
    } else {
        // 互斥邏輯檢查 (料理類)
        if (firstItem.extra && firstItem.extra.cat === 'cooking') {
            const subCat = firstItem.extra.sub;
            selectedItems.forEach(id => {
                const itemData = statData.find(d => d.id === id);
                if (itemData && itemData.extra &&
                    itemData.extra.cat === 'cooking' &&
                    itemData.extra.sub === subCat) {
                    selectedItems.delete(id);
                }
            });
        }
        targetIds.forEach(id => selectedItems.add(id));
    }

    renderItems();
    updateCalculation();
}

// === 新增功能：全部選取 ===
function selectAllItems() {
    const allNames = [...new Set(statData.map(d => d.name))];
    allNames.forEach(name => {
        const groupItems = statData.filter(d => d.name === name);
        let shouldSelect = false;

        // 只有在非料理模式下才允許全選
        if (currentFilter === 'cooking') return;

        // 嚴格排除料理 (就算在 All 模式下按全選，也不選料理)
        if (groupItems[0].extra && groupItems[0].extra.cat === 'cooking') return;

        if (currentFilter === 'all') {
            shouldSelect = true;
        } else {
            if (groupItems.some(item => item.type === currentFilter)) {
                shouldSelect = true;
            }
        }

        if (shouldSelect) {
            groupItems.forEach(item => selectedItems.add(item.id));
        }
    });
    renderItems();
    updateCalculation();
}

// === 新增功能：全部取消 (修改版) ===
function deselectAllItems() {
    if (currentFilter === 'all') {
        selectedItems.clear();
    } else if (currentFilter === 'cooking') {
        // 料理頁面只取消料理
        selectedItems.forEach(id => {
            const item = statData.find(d => d.id === id);
            if (item && item.extra && item.extra.cat === 'cooking') {
                selectedItems.delete(id);
            }
        });
    } else {
        // 特定屬性頁面，只取消該屬性相關 (且非料理)
        const allNames = [...new Set(statData.map(d => d.name))];
        allNames.forEach(name => {
            const groupItems = statData.filter(d => d.name === name);
            // 排除料理
            if (groupItems[0].extra && groupItems[0].extra.cat === 'cooking') return;

            if (groupItems.some(item => item.type === currentFilter)) {
                groupItems.forEach(item => selectedItems.delete(item.id));
            }
        });
    }
    renderItems();
    updateCalculation(); // 這裡原本就會呼叫 updateCalculation，所以會自動觸發存檔，不用額外改！
}

// === 7. 統一顏色設定檔 (Color Palette) ===
// 這裡定義了所有屬性的顏色，修改這裡會同時改變「按鈕」和「結果卡片」
const colorPalette = {
    "攻擊傷害": {
        gradient: 'linear-gradient(to bottom, #fff8db, #d4b476)', // 香檳金D4B47699
        glow: 'rgba(212,180,118,0.6)'
    },
    "總體防禦": {
        gradient: 'linear-gradient(to bottom, #efe2cf, #c49970, #785239)', // 拿鐵咖啡78523999
        glow: 'rgba(120,82,57,0.6)'
    },
    "最大血量": {
        gradient: 'linear-gradient(to bottom, #e3ffe3, #83bca9)', // 鼠尾草綠83BCA999
        glow: 'rgba(131, 188, 169, 0.6)'
    },
    "魔法傷害": {
        gradient: 'linear-gradient(to bottom, #f3e6ff, #afa2c9)', // 薰衣草紫AFA2C999
        glow: 'rgba(175, 162, 201, 0.6)'
    },
    "遠程傷害": {
        gradient: 'linear-gradient(to bottom, #f3e6ff, #afa2c9)', // 同魔法紫AFA2C999
        glow: 'rgba(175, 162, 201, 0.6)'
    },
    "暴擊機率": {
        gradient: 'linear-gradient(to bottom, #dbeaff, #7a9ec2)', // 霧霾藍7A9EC299
        glow: 'rgba(122,158,194,0.6)'
    },
    "暴擊傷害": {
        gradient: 'linear-gradient(to bottom, #ffdfdf, #c97b84)', // 乾燥玫瑰粉C97B8499
        glow: 'rgba(201,123,132,0.6)'
    },
    // 預設顏色 (找不到屬性時用)
    "default": {
        gradient: 'linear-gradient(to bottom, #e3e3e3, #8a8a8a)', // 絲綢灰FFFFFF66
        glow: 'rgba(255, 255, 255, 0.4)'
    }
};

// 取得顏色的輔助函式
function getStyleForType(type) {
    return colorPalette[type] || colorPalette["default"];
}

// === 輔助函式：建立按鈕 (修改版：讓按鈕顏色跟屬性綁定) ===
function createButton(name, container) {
    const groupItems = statData.filter(d => d.name === name);
    const firstId = groupItems[0].id;
    const isActive = selectedItems.has(firstId) ? 'active' : '';
    const mainType = groupItems[0].type;

    // ★★★ 核心修改：直接從設定檔讀取顏色 ★★★
    const style = getStyleForType(mainType);

    let subtitleHtml = groupItems.map(item => {
        let val = item.value;
        let sign = val < 0 ? "" : "+";
        if(item.type.includes("機率")) val += "%";

        // 副標題 (數值) 使用白色，比較易讀
        return `<div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">${item.type} ${sign}${val}</div>`;
    }).join('');

    const btn = document.createElement('button');
    btn.className = `button small calc-btn ${isActive}`;

    // ★★★ 設定樣式：標題使用屬性漸層色 ★★★
    btn.innerHTML = `
            <span class="btn-title" style="--text-gradient: ${style.gradient}; --text-glow: ${style.glow}">
                ${name}
            </span>
            <span class="btn-subtitle" style="font-size: 0.7em; line-height: 1.4;">
                ${subtitleHtml}
            </span>
        `;

    // 如果按鈕被選中，讓邊框也發出對應顏色的光
    if (isActive) {
        btn.style.boxShadow = `inset 0 0 0 1px ${style.glow}`;
        btn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }

    btn.onclick = () => toggleGroup(name);
    container.appendChild(btn);
}

// === 8. 計算結果 (修改版：確保顏色與按鈕一致) ===
function updateCalculation(isAutoSave = true) {
    const container = document.getElementById('result-grid');
    if(!container) return;

    let totals = {};
    statData.forEach(item => totals[item.type] = 0);

    statData.forEach(item => {
        if (selectedItems.has(item.id)) {
            totals[item.type] += item.value;
        }
    });

    if (isAutoSave) {
        const arrayToSave = Array.from(selectedItems);
        localStorage.setItem('rpg_calc_save', JSON.stringify(arrayToSave));
    }

    let convertedAttack = 0;
    let excessCrit = 0;
    const critDmg = totals["暴擊傷害"] || 0;

    if (critDmg > 50) {
        excessCrit = critDmg - 50;
        convertedAttack = excessCrit / 10;
        if (!totals["攻擊傷害"]) totals["攻擊傷害"] = 0;
        totals["攻擊傷害"] += convertedAttack;
    }

    const group1 = ["攻擊傷害", "暴擊機率", "暴擊傷害"];
    const group2 = ["總體防禦", "最大血量"];
    const group3 = ["魔法傷害", "遠程傷害"];

    function generateRowHTML(types) {
        return types.map(type => {
            const value = totals[type] || 0;

            // ★★★ 這裡也會讀取同一個顏色設定檔 ★★★
            const style = getStyleForType(type);

            let displayValue = Math.round(value * 100) / 100;
            const sign = displayValue < 0 ? "" : "+";
            let suffix = type.includes("機率") ? "%" : "";
            let noteHtml = "";

            if (type === "攻擊傷害" && convertedAttack > 0) {
                let niceConverted = Math.round(convertedAttack * 100) / 100;
                noteHtml = `<div style="font-size: 0.4em; opacity: 0.7; margin-top: 5px; font-family: 'Noto Serif TC', serif;">(含 +${niceConverted} 來自暴傷)</div>`;
            }
            if (type === "暴擊傷害" && excessCrit > 0) {
                let niceExcess = Math.round(excessCrit * 100) / 100;
                noteHtml = `<div style="font-size: 0.4em; opacity: 0.7; margin-top: 5px; font-family: 'Noto Serif TC', serif;">(超出 ${niceExcess} 已轉攻)</div>`;
            }

            return `
                    <div class="stat-card">
                        <div class="stat-label" style="--stat-gradient: ${style.gradient}; --stat-glow: ${style.glow};">
                            ${type}
                        </div>
                        <div class="stat-value">
                            ${sign}${displayValue}${suffix}
                            ${noteHtml}
                        </div>
                    </div>
                `;
        }).join('');
    }

    let html = '';
    html += `<div class="stat-row">${generateRowHTML(group1)}</div>`;
    html += `<div class="stat-row">${generateRowHTML(group2)}</div>`;
    html += `<div class="stat-separator"></div>`;
    html += `<div class="stat-row">${generateRowHTML(group3)}</div>`;

    container.innerHTML = html;
}

// === 傷害計算機功能 (Updated) ===

// 開啟視窗 (改用 CSS Class 控制動畫)
function openDamageModal() {
    // 禁止背景捲動
    document.body.style.overflow = 'hidden';

    // 1. 先把 display 設為 flex (因為 CSS 預設可能是 hidden 或是 opacity 0 但佔位)
    // 這裡我們直接操作 class，但為了確保 jQuery 相容性，我們這樣寫：
    const modal = document.getElementById('damage-modal');

    // 讓它出現在 DOM 上但還是透明的
    // (CSS 中 .modal-overlay 預設 opacity: 0, pointer-events: none)

    // 延遲一點點再加上 open class，讓 transition 動畫生效
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
}

// 關閉視窗
function closeDamageModal() {
    const modal = document.getElementById('damage-modal');
    modal.classList.remove('open'); // 移除 class 觸發消失動畫

    // 等動畫跑完 (0.3s) 再恢復捲動
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 300);
}

// 點擊背景也能關閉 (修正版)
document.getElementById('damage-modal').addEventListener('click', function(e) {
    // ★★★ 關鍵修改：阻止點擊事件傳遞給底層的網頁模板 ★★★
    // 這樣點擊計算機時，模板就不會以為你點了外面而把屬性頁面關掉
    e.stopPropagation();

    if (e.target === this) {
        closeDamageModal();
    }
});

// 計算核心邏輯
function calcDamage() {
    // 1. 獲取數值 (預設為 0)
    let atk = parseFloat(document.getElementById('dmg_atk').value) || 0;
    let rate = parseFloat(document.getElementById('dmg_rate').value) || 0;
    let critDmgPct = parseFloat(document.getElementById('dmg_crit_dmg').value) || 0;
    let weaponBonus = parseFloat(document.getElementById('dmg_weapon').value) || 0;
    let physBonus = parseFloat(document.getElementById('dmg_phys').value) || 0;

    // 2. 公式計算
    // 平A傷害 = 攻擊傷害 * (1 + (武器加成 + 物理加成)/100)
    let normalDmg = atk * (1 + (weaponBonus + physBonus) / 100);

    // 暴擊傷害倍率：輸入 150 代表 150% (1.5倍)
    let critDmgMultiplier = critDmgPct / 100;

    // 觸發暴擊時的傷害 = 平A * 暴擊傷害倍率 (你的公式是這樣寫的)
    let critHitDmg = normalDmg * critDmgMultiplier;

    // 計算 1000 次打擊
    // 暴擊次數 = 機率 * 10
    // (例如 50% -> 50 * 10 = 500次，這邏輯假設輸入的是整數百分比，如果是 0.5 需要調整，但一般遊戲輸入 50 代表 50%)
    let critCount = rate * 10;

    // 確保不會超過 1000 次 (機率超過 100% 的情況)
    if (critCount > 1000) critCount = 1000;

    // 未暴擊次數
    let normalCount = 1000 - critCount;

    // 1000次總傷害
    let totalDmg1000 = (normalDmg * normalCount) + (critHitDmg * critCount);

    // 平均單次傷害
    let avgDmg = totalDmg1000 / 1000;

    // 3. 顯示結果 (加上千分位與整數化)
    $('#res_normal').text(Math.floor(normalDmg).toLocaleString());
    $('#res_crit').text(Math.floor(critHitDmg).toLocaleString());
    $('#res_total_1000').text(Math.floor(totalDmg1000).toLocaleString());
    $('#res_avg').text(Math.floor(avgDmg).toLocaleString());

    // 顯示結果區 (使用 jQuery 的滑動效果)
    $('#dmg-result-area').slideDown(400);
}