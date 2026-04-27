document.addEventListener("DOMContentLoaded", function() {

    // 手機版檢查
    if (window.innerWidth <= 1024) {
        return;
    }

    // =========================================================
    // ★★★ 模型設定區 (已新增 text 欄位) ★★★
    // =========================================================
    const models = [
        { id: "skin_container_tygh89071388",    skin: "images/tygh89071388.png",    width: 90, height: 120, action: "idle",text: "龍耀", modelType: "default", offsetY: 20},
        { id: "skin_container_Megumin__",       skin: "images/Megumin__.png",       width: 90, height: 120, action: "sit", text: "百香" },
        { id: "skin_container_commandslayer52", skin: "images/commandslayer52.png", width: 90, height: 120, action: "sit", text: "龍王" },
        { id: "skin_container_simon910107",     skin: "images/simon910107.png",     width: 90, height: 120, action: "sit", text: "賽門" },
        { id: "skin_container_Xiaoxuntw",     skin: "images/Xiaoxuntw.png",     width: 90, height: 120, action: "sit", text: "維尼", modelType: "default"},
        { id: "skin_container_Pikachu_0322",    skin: "images/Pikachu_0322.png",    width: 90, height: 120, action: "sit", text: "皮卡" },
        { id: "skin_container_linghui_1019",    skin: "images/linghui_1019.png",    width: 90, height: 120, action: "sit", text: "彗伊" },
        { id: "skin_container_Khakiowo030",     skin: "images/Khakiowo030.png",     width: 90, height: 120, action: "sit", text: "小貓" },
        { id: "skin_container_CYZ0307",         skin: "images/CYZ0307.png",         width: 90, height: 120, action: "sit", text: "小琋" },
        { id: "skin_container_EMTTT",           skin: "images/EMTTT.png",           width: 90, height: 120, action: "sit", text: "EMT" },
        { id: "skin_container_Duo_owo",         skin: "images/Duo_owo.png",         width: 90, height: 120, action: "sit", text: "多多多<3" }
    ];
    // =========================================================

    models.forEach(item => {
        let canvas = document.getElementById(item.id);
        if (canvas) {

            // ★★★ 新增：動態生成頭頂文字 ★★★
            if (item.text) {
                let label = document.createElement("div");
                label.innerHTML = item.text;
                // 加入 skin-fade 類別，這樣它就會跟著模型一起漸入漸出、一起被文章隱藏
                label.className = "model-label skin-fade";

                // --- 計算位置 (讓文字飄在 canvas 正上方) ---
                // 1. 設定高度：讀取 canvas 的 top，並往上扣除 10px
                // 優先讀取自訂的 offsetY，沒有的話預設為 10
                let dist = item.offsetY !== undefined ? item.offsetY : -5;
                label.style.top = `calc(${canvas.style.top} - ${dist}px)`;

                // 2. 設定水平位置：判斷原本是用 left 還是 right 定位
                if (canvas.style.left) {
                    // 如果 canvas 用 left，文字就要偏移 canvas 寬度的一半
                    label.style.left = `calc(${canvas.style.left} + ${item.width / 2}px)`;
                    label.style.transform = "translateX(-50%)"; // 修正中心點
                } else if (canvas.style.right) {
                    // 如果 canvas 用 right
                    label.style.right = `calc(${canvas.style.right} + ${item.width / 2}px)`;
                    label.style.transform = "translateX(50%)"; // 修正中心點
                }

                // 將文字加入網頁
                document.body.appendChild(label);
            }
            // ★★★ 文字生成結束 ★★★


            let skinViewer = new skinview3d.SkinViewer({
                canvas: canvas,
                width: item.width,
                height: item.height,
                skin: item.skin
            });

            skinViewer.renderer.setClearColor(0x000000, 0);

            skinViewer.loadSkin(item.skin, { model: item.modelType || "slim" })
                .then(() => {
                    if (item.action === "sit") {
                        const skin = skinViewer.playerObject.skin;
                        skinViewer.animation = null;

                        // 坐姿設定
                        skin.leftLeg.rotation.x = -1.57;
                        skin.leftLeg.rotation.y = 0;
                        skin.leftLeg.rotation.z = 0.25;

                        skin.rightLeg.rotation.x = -1.57;
                        skin.rightLeg.rotation.y = 0;
                        skin.rightLeg.rotation.z = -0.25;

                        skin.leftArm.rotation.x = -0.9;
                        skin.leftArm.rotation.z = -0.2;

                        skin.rightArm.rotation.x = -0.9;
                        skin.rightArm.rotation.z = 0.2;

                        skinViewer.playerObject.position.y = -8;

                    } else {
                        switch (item.action) {
                            case "walk": skinViewer.animation = new skinview3d.WalkingAnimation(); break;
                            case "run": skinViewer.animation = new skinview3d.RunningAnimation(); break;
                            case "fly": skinViewer.animation = new skinview3d.FlyingAnimation(); break;
                            case "none": skinViewer.animation = null; break;
                            default: skinViewer.animation = new skinview3d.IdleAnimation(); break;
                        }
                    }
                });
        }
    });
});