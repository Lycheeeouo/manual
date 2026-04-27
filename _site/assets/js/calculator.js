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
    { id: 65, 'name': '追獵者', 'type': '攻擊傷害', 'value': 0.5 },
    { id: 66, 'name': '單人挑戰副本1', 'type': '攻擊傷害', 'value': 2.0},
    { id: 67, 'name': '單人挑戰副本2', 'type': '攻擊傷害', 'value': 3.0},
    { id: 68, 'name': '單人挑戰副本3', 'type': '總體防禦', 'value': 15.0},
    { id: 69, 'name': '單人挑戰副本4', 'type': '攻擊傷害', 'value': 5.0},

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

    // --- 替換原本的五行，改成這一個設定按鈕 ---
    { id: 998, name: '【設定】五行屬性加點 ', type: '特殊', value: 0, extra: { isElementalTrigger: true } },
    // 週活躍加成
    { id: 999, name: '【設定】週活躍加點 ', type: '特殊', value: 0, extra: { isWeeklyTrigger: true } }

];

let selectedItems = new Set();
let currentFilter = 'all';

// 新增：記錄週活躍點數 (0~9)
let weeklyPts = { atk: 0, hp: 0, def: 0, critDmg: 0 };
// 新增：記錄五行點數 (0~5)
let elementalPts = { metal: 0, wood: 0, water: 0, fire: 0, earth: 0 };

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

    // 新增：嘗試讀取週活躍存檔
    const savedWeekly = localStorage.getItem('rpg_calc_weekly');
    if (savedWeekly) {
        try {
            weeklyPts = JSON.parse(savedWeekly);
        } catch (e) {}
    }

    // 新增：嘗試讀取五行存檔
    const savedElemental = localStorage.getItem('rpg_calc_elemental');
    if (savedElemental) {
        try {
            elementalPts = JSON.parse(savedElemental);
        } catch (e) {}
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

// === 輔助函式：建立按鈕 (合併修正版 + 0點不發光) ===
function createButton(name, container) {
    const groupItems = statData.filter(d => d.name === name);
    const firstItem = groupItems[0];
    const firstId = firstItem.id;
    const isNormalActive = selectedItems.has(firstId) ? 'active' : '';
    const mainType = firstItem.type;

    // ★★★ 攔截：周活躍設定按鈕 (換上新漸層配色) ★★★
    if (firstItem.extra && firstItem.extra.isWeeklyTrigger) {
        const btn = document.createElement('button');

        let wTotal = weeklyPts.atk + weeklyPts.hp + weeklyPts.def + weeklyPts.critDmg;
        let isActiveClass = wTotal > 0 ? 'active' : '';
        btn.className = `button small calc-btn ${isActiveClass}`;

        let minPts = Math.min(weeklyPts.atk, weeklyPts.hp, weeklyPts.def, weeklyPts.critDmg);
        let stageTxt = minPts >= 9 ? "後期 (滿)" : minPts >= 6 ? "中期" : minPts >= 3 ? "初期" : "未達標";

        // 這裡更換了 --text-gradient (漸層色) 和 --text-glow (光暈色)
        // 使用「夢幻紫到蜜桃粉」的設計
        btn.innerHTML = `
            <span class="btn-title" style="--text-gradient: linear-gradient(to bottom, #f3e77b, #fa5a27); --text-glow: rgba(255, 243, 128, 0.6);">
                ${name}
            </span>
            <span class="btn-subtitle" style="font-size: 0.8em; line-height: 1.4; color: rgba(255,255,255,0.8);">
                點擊開啟面板<br>目前階段：${stageTxt}
            </span>
        `;

        if (wTotal > 0) {
            // 邊框發光顏色同步改為紫色調
            btn.style.boxShadow = `inset 0 0 0 1px rgba(179, 136, 255, 0.6)`;
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }

        btn.onclick = () => openWeeklyModal();
        container.appendChild(btn);
        return;
    }

    // ★★★ 攔截：五行屬性設定按鈕 ★★★
    if (firstItem.extra && firstItem.extra.isElementalTrigger) {
        const btn = document.createElement('button');

        let totalLv = elementalPts.metal + elementalPts.wood + elementalPts.water + elementalPts.fire + elementalPts.earth;
        let isActiveClass = totalLv > 0 ? 'active' : '';
        btn.className = `button small calc-btn ${isActiveClass}`;

        // 同步修改首頁按鈕的進度顯示 (高級漸層與微光效果)
        let displayStr =
            `<span style="background: linear-gradient(to bottom, #fff8db, #d4b476); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(212,180,118,0.4)); font-weight: bold;">金${elementalPts.metal}</span> ` +
            `<span style="background: linear-gradient(to bottom, #e3ffe3, #83bca9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(131,188,169,0.4)); font-weight: bold;">木${elementalPts.wood}</span> ` +
            `<span style="background: linear-gradient(to bottom, #dbeaff, #7a9ec2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(122,158,194,0.4)); font-weight: bold;">水${elementalPts.water}</span> ` +
            `<span style="background: linear-gradient(to bottom, #ffdfdf, #c97b84); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(201,123,132,0.4)); font-weight: bold;">火${elementalPts.fire}</span> ` +
            `<span style="background: linear-gradient(to bottom, #efe2cf, #c49970); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(196,153,112,0.4)); font-weight: bold;">土${elementalPts.earth}</span>`;

        btn.innerHTML = `
            <span class="btn-title" style="--text-gradient: linear-gradient(to bottom, #aaddff, #ffc0cb); --text-glow: rgba(170, 221, 255, 0.6);">
                ${name}
            </span>
            <span class="btn-subtitle" style="font-size: 0.8em; line-height: 1.4; color: rgba(255,255,255,0.8);">
                點擊開啟面板<br>${displayStr}
            </span>
        `;

        if (totalLv > 0) {
            btn.style.boxShadow = `inset 0 0 0 1px rgba(170, 221, 255, 0.6)`;
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }

        btn.onclick = () => openElementalModal();
        container.appendChild(btn);
        return;
    }

    // ==========================================
    // 以下為「一般稱號按鈕」的生成邏輯
    // ==========================================
    const style = getStyleForType(mainType);

    let subtitleHtml = groupItems.map(item => {
        let val = item.value;
        let sign = val < 0 ? "" : "+";
        if(item.type.includes("機率")) val += "%";
        return `<div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">${item.type} ${sign}${val}</div>`;
    }).join('');

    const btn = document.createElement('button');
    btn.className = `button small calc-btn ${isNormalActive}`;

    btn.innerHTML = `
        <span class="btn-title" style="--text-gradient: ${style.gradient}; --text-glow: ${style.glow}">
            ${name}
        </span>
        <span class="btn-subtitle" style="font-size: 0.7em; line-height: 1.4;">
            ${subtitleHtml}
        </span>
    `;

    if (isNormalActive) {
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

    // === 新增：整合週活躍點數與階段加成 ===
    totals["攻擊傷害"] = (totals["攻擊傷害"] || 0) + (weeklyPts.atk * 3);
    totals["最大血量"] = (totals["最大血量"] || 0) + (weeklyPts.hp * 6);
    totals["總體防禦"] = (totals["總體防禦"] || 0) + (weeklyPts.def * 6);
    totals["暴擊傷害"] = (totals["暴擊傷害"] || 0) + (weeklyPts.critDmg * 30);

    // === 新增：整合五行屬性點數 ===
    // 對應 0~5 級的總加成陣列
    const metalAtk = [0, 2, 4, 6, 8, 12];        // 金 (攻擊)
    const woodHp = [0, 4, 8, 12, 16, 24];        // 木 (血量)
    const waterCrit = [0, 0.5, 1.0, 1.5, 2.0, 2.5]; // 水 (暴擊機率)
    const fireCritDmg = [0, 10, 20, 30, 40, 60];    // 火 (暴傷)
    const earthDef = [0, 6, 12, 18, 24, 36];      // 土 (防禦)

    totals["攻擊傷害"] = (totals["攻擊傷害"] || 0) + metalAtk[elementalPts.metal];
    totals["最大血量"] = (totals["最大血量"] || 0) + woodHp[elementalPts.wood];
    totals["暴擊機率"] = (totals["暴擊機率"] || 0) + waterCrit[elementalPts.water];
    totals["暴擊傷害"] = (totals["暴擊傷害"] || 0) + fireCritDmg[elementalPts.fire];
    totals["總體防禦"] = (totals["總體防禦"] || 0) + earthDef[elementalPts.earth];

    // (在原本儲存進度的 if (isAutoSave) 裡面補上這行：)
    if (isAutoSave) {
        localStorage.setItem('rpg_calc_save', JSON.stringify(Array.from(selectedItems)));
        localStorage.setItem('rpg_calc_weekly', JSON.stringify(weeklyPts));
        localStorage.setItem('rpg_calc_elemental', JSON.stringify(elementalPts)); // 新增五行存檔
    }

    // 判斷達標最低層數
    let minPts = Math.min(weeklyPts.atk, weeklyPts.hp, weeklyPts.def, weeklyPts.critDmg);

    // 初期 (3層)
    if (minPts >= 3) {
        totals["總體防禦"] = (totals["總體防禦"] || 0) + 10;
        totals["最大血量"] = (totals["最大血量"] || 0) + 20;
        totals["暴擊機率"] = (totals["暴擊機率"] || 0) + 0.5;
    }
    // 中期 (6層) - 注意：加成是疊加的
    if (minPts >= 6) {
        totals["攻擊傷害"] = (totals["攻擊傷害"] || 0) + 3;
        totals["暴擊傷害"] = (totals["暴擊傷害"] || 0) + 20;
        totals["暴擊機率"] = (totals["暴擊機率"] || 0) + 1.0;
    }
    // 後期 (9層)
    if (minPts >= 9) {
        totals["總體防禦"] = (totals["總體防禦"] || 0) + 20;
        totals["最大血量"] = (totals["最大血量"] || 0) + 20;
        totals["暴擊機率"] = (totals["暴擊機率"] || 0) + 1.5;
    }

    // 儲存進度
    if (isAutoSave) {
        localStorage.setItem('rpg_calc_save', JSON.stringify(Array.from(selectedItems)));
        localStorage.setItem('rpg_calc_weekly', JSON.stringify(weeklyPts)); // 新增儲存週活躍
    }
    // ======================================


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

// === 週活躍懸浮窗控制 ===
function openWeeklyModal() {
    updateWeeklyUI();
    document.body.style.overflow = 'hidden';
    const modal = document.getElementById('weekly-modal');
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeWeeklyModal() {
    const modal = document.getElementById('weekly-modal');
    modal.classList.remove('open');
    setTimeout(() => document.body.style.overflow = '', 300);
}

function changeWeekly(stat, delta) {
    let newVal = weeklyPts[stat] + delta;
    if (newVal >= 0 && newVal <= 9) {
        weeklyPts[stat] = newVal;
        updateWeeklyUI();
        updateCalculation(); // 立即更新背景的總屬性與存檔
        renderItems();       // 更新首頁按鈕上的「階段文字」
    }
}

function updateWeeklyUI() {
    document.getElementById('w-atk').innerText = weeklyPts.atk;
    document.getElementById('w-hp').innerText = weeklyPts.hp;
    document.getElementById('w-def').innerText = weeklyPts.def;
    document.getElementById('w-crit').innerText = weeklyPts.critDmg;

    let minPts = Math.min(weeklyPts.atk, weeklyPts.hp, weeklyPts.def, weeklyPts.critDmg);
    let stageHtml = "目前進度：<strong style='color:#bbb;'>未達標</strong>";
    if (minPts >= 9) stageHtml = "目前進度：<strong style='color:#ffc107;'>後期階段 (全滿)</strong>";
    else if (minPts >= 6) stageHtml = "目前進度：<strong style='color:#03a9f4;'>中期階段</strong>";
    else if (minPts >= 3) stageHtml = "目前進度：<strong style='color:#8bc34a;'>初期階段</strong>";

    document.getElementById('w-stage').innerHTML = stageHtml;
}

// 點擊背景關閉
document.addEventListener("DOMContentLoaded", function() {
    const wModal = document.getElementById('weekly-modal');
    if(wModal) {
        wModal.addEventListener('click', function(e) {
            e.stopPropagation();
            if (e.target === this) closeWeeklyModal();
        });
    }
});

// === 五行屬性懸浮窗控制 ===
function openElementalModal() {
    updateElementalUI();
    document.body.style.overflow = 'hidden';
    const modal = document.getElementById('elemental-modal');
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeElementalModal() {
    const modal = document.getElementById('elemental-modal');
    modal.classList.remove('open');
    setTimeout(() => document.body.style.overflow = '', 300);
}

function changeElemental(stat, delta) {
    let newVal = elementalPts[stat] + delta;
    if (newVal >= 0 && newVal <= 5) { // 最大 5 級
        elementalPts[stat] = newVal;
        updateElementalUI();
        updateCalculation();
        renderItems();
    }
}

function updateElementalUI() {
    document.getElementById('e-metal').innerText = elementalPts.metal;
    document.getElementById('e-wood').innerText = elementalPts.wood;
    document.getElementById('e-water').innerText = elementalPts.water;
    document.getElementById('e-fire').innerText = elementalPts.fire;
    document.getElementById('e-earth').innerText = elementalPts.earth;

    // 組合新的進度字串：套用高級漸層與微光效果
    let displayStr =
        `<span style="background: linear-gradient(to bottom, #fff8db, #d4b476); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(212,180,118,0.4)); font-weight: bold;">金${elementalPts.metal}</span> ` +
        `<span style="background: linear-gradient(to bottom, #e3ffe3, #83bca9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(131,188,169,0.4)); font-weight: bold;">木${elementalPts.wood}</span> ` +
        `<span style="background: linear-gradient(to bottom, #dbeaff, #7a9ec2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(122,158,194,0.4)); font-weight: bold;">水${elementalPts.water}</span> ` +
        `<span style="background: linear-gradient(to bottom, #ffdfdf, #c97b84); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(201,123,132,0.4)); font-weight: bold;">火${elementalPts.fire}</span> ` +
        `<span style="background: linear-gradient(to bottom, #efe2cf, #c49970); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 2px rgba(196,153,112,0.4)); font-weight: bold;">土${elementalPts.earth}</span>`;

    document.getElementById('e-stage').innerHTML = `目前進度：${displayStr}`;
}

// 點擊背景關閉
document.addEventListener("DOMContentLoaded", function() {
    const eModal = document.getElementById('elemental-modal');
    if(eModal) {
        eModal.addEventListener('click', function(e) {
            e.stopPropagation();
            if (e.target === this) closeElementalModal();
        });
    }
});