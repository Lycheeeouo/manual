// 1. 這是原本的切換功能 (點分頁按鈕時執行)
function openTab(evt, tabName) {
    // 找到這個按鈕所在的那個大區塊 (article)
    // 這樣可以確保只影響當前頁面，不會誤關到別頁的內容
    var $article = $(evt.currentTarget).closest('article');

    // 先隱藏這個區塊內所有的內容
    $article.find('.tab-content').hide();

    // 移除這個區塊內所有按鈕的亮燈樣式 (primary)
    $article.find('.tab-btn, .tab-btn1').removeClass('primary');

    // 顯示目標內容
    $('#' + tabName).show();

    // 把被點擊的按鈕亮燈
    $(evt.currentTarget).addClass('primary');
}

// 2. 這是新增的：初始化重置功能 (給目錄頁的按鈕用的)
// 參數 articleId = 要去的頁面 ID (例如 'boss2')
// 參數 tabId     = 預設要開啟的分頁 ID (例如 '2normb12')
function initTab(articleId, tabId) {
    var $article = $('#' + articleId);

    // 先把該頁面裡面全部內容藏起來、按鈕燈滅掉
    $article.find('.tab-content').hide();
    $article.find('.tab-btn').removeClass('primary');
    $article.find('.tab-btn1').removeClass('primary');

    // 顯示預設的那個分頁
    $('#' + tabId).show();

    // 找到對應的按鈕並把它亮起來
    // 這裡使用程式碼自動去抓「哪個按鈕負責這個分頁」
    $article.find(".tab-btn[onclick*='" + tabId + "']").addClass('primary');
    $article.find(".tab-btn1[onclick*='" + tabId + "']").addClass('primary');
}

// 3. 新增：折疊選單開關功能，手風琴效果Accordion
function toggleCollapse(btn) {
    // 切換按鈕的 active 樣式 (改變外觀)
    $(btn).toggleClass("active");

    // 找到按鈕「正下方」的那個內容區塊，並做滑動特效
    // slideToggle() 會自動判斷：如果是開的就關起來，關的就滑開
    $(btn).next(".collapse-content").slideToggle();
}

// 3. 新增：技能子分頁切換功能 (Sub-Tabs)
// 這樣切換技能時，不會誤關掉整個 Boss 頁面
function openSkill(evt, skillId) {
    // 1. 找到這些技能按鈕的「爸爸」容器 (確保只影響這一組技能)
    var $container = $(evt.currentTarget).closest('.skill-container');

    // 2. 隱藏這個容器裡面的所有「技能內容」
    $container.find('.skill-content').hide();

    // 3. 把這個容器裡面的按鈕燈都關掉
    $container.find('.skill-btn').removeClass('primary');

    // 4. 顯示指定的技能內容，並把按鈕亮燈
    $('#' + skillId).show();
    $(evt.currentTarget).addClass('primary');
}