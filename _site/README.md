# 有用的筆記 ∠( ᐛ 」∠)_

這是為了解決打團時總是遇到重複失誤、或是不知道該如何摸索 BOSS 技能機制而誕生的實用工具網站！
同時內建了「屬性加成計算機」，幫助大家快速統計各種稱號與道具帶來的數值提升 d(`･∀･)b

🔗 **[點這裡前往網站](https://lycheeeouo.github.io/manual/)**

---

## ✨ 網站功能 (Features)

* **團副 Boss 機制解析**：收錄困難/普通團副 Boss 的重點技能圖文與影片教學。
* **屬性加成計算機**：勾選你擁有的稱號、料理與道具，一鍵計算目前的總屬性加成。
* **傷害試算系統**：輸入面板傷害與加成，自動幫你算出平A、暴擊、與1000次總傷害的期望值。
* **3D 模型預覽**：內建夥伴們的可愛 3D Skin 展示 (使用 skinview3d)。

---

## 📂 專案架構 (Structure)

本專案基於 [HTML5 UP - Dimension](https://html5up.net/dimension) 模板修改，並使用 **Jekyll** 進行模組化切割，方便日後維護。

```text
📁 專案根目錄
├── 📄 index.html           # 網站主入口 (已將複雜區塊抽離)
├── 📄 README.md            # 專案說明書 (就是這份檔案)
├── 📁 _includes/           # HTML 模組區 (GitHub Pages 會自動拼裝)
│   ├── boss-hard-1.html    # 困難一王區塊
│   ├── boss-normal-2.html  # 普通二王區塊
│   ├── title-attributes.html # 屬性加成面板
│   └── damage-modal.html   # 傷害計算機視窗
├── 📁 assets/
│   ├── 📁 css/
│   │   └── custom.css      # 網站所有的自訂樣式、顏色與排版
│   └── 📁 js/
│       ├── tabs.js         # 分頁與折疊選單切換邏輯
│       ├── 3d-models.js    # 3D 人物模型與動作設定
│       └── calculator.js   # 稱號資料庫與傷害計算核心邏輯
└── 📁 images/              # 存放所有的圖片與 GIF
```


---

## 🛠️ 維護與更新 (How to Update)

* **1. 想要新增或修改 Boss 的技能**

  修改現有內容：直接進入 _includes/ 資料夾，找到對應的檔案（例如 boss-hard-1.html）進行編輯。
    
  新增一隻全新的王：在 _includes/ 建立新的 HTML 檔案（例如 boss-new-king.html）。
  回到 index.html 的內容區塊，加入 {% include boss-new-king.html %} 即可。


* **2. 新增或修改「稱號/料理」加成數據**

  打開 assets/js/calculator.js，找到最上面的 const statData = [...]。
  
  照著格式新增資料，例如：
  { id: 999, name: "傳奇稱號", type: "攻擊傷害", value: 15.0 }


* **3. 更換 3D 人物模型**

  打開 assets/js/3d-models.js。

  在 const models = [...] 裡面修改對應的 ID、顯示名稱 (text) 或皮膚路徑 (skin)。

  注意：圖片請記得先上傳到 images/ 資料夾。

---

## ⚠️ 本地測試注意事項 (Local Testing)

本專案使用了 Jekyll 的 {% include %} 語法進行模組化切割。

* **禁止直接開啟**：不能直接用瀏覽器或一般編輯器的 Live Server 打開 index.html，否則切換出去的模組會因語法無法解析而消失。


* **推薦測試方式**：直接 Commit 並 Push 到 GitHub。GitHub Pages 會在背後自動編譯拼裝網頁，這也是最準確的驗證方式。


* **進階測試方式**：若要在電腦本機預覽，需安裝 Ruby 環境並在終端機執行
    ```text
    gem install jekyll bundler
    cd /d D:\test
    jekyll serve
    ```
