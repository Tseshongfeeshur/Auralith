// 设置新故事创建
function setAdd() {
    // 获取节点
    const addFab = document.getElementById('add-fab');
    const addDialog = document.getElementById('add-dialog');
    const addInputId = document.getElementById('add-input-id')
    const addInputName = document.getElementById('add-input-name');
    // 显示创建故事对话框
    function showAddDialog() {
        // 生成随机 id（年月日-时分秒-两位随机数）
        function getId() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hour = String(now.getHours()).padStart(2, '0');
            const minute = String(now.getMinutes()).padStart(2, '0');
            const second = String(now.getSeconds()).padStart(2, '0');
            const random = String(Math.floor(Math.random() * 100)).padStart(2, '0');
            return `${year}${month}${day}-${hour}${minute}${second}-${random}`;
        }
        // 随机 id 填充至输入框
        addInputId.value = getId();
        addInputName.value = '';
        // 打开对话框
        addDialog.showed = true;
    }
    // 绑定对话框打开动作
    addFab.addEventListener('click', showAddDialog);
    
    // 获取节点
    const addSubmitButton = document.getElementById('add-submit-button');
    // 提交以创建新故事
    function addSumbit() {
        const newGameTitle = addInputName.value;
        if (newGameTitle) {
            
        } else {
            
        }
        
    }
    // 绑定新故事创建动作
    addSubmitButton.addEventListener('click', addSumbit)
}

// 数据库相关
// 增
async function addGame(data) {
    const db = await dbPromise;
    await db.add('games', data);
}
// 删
async function deleteGame(id) {
    const db = await dbPromise;
    await db.delete('games', id);
}
// 查
async function getGame(id) {
    const db = await dbPromise;
    const game = await db.get('games', id);
    console.log(game);
    return game;
}
// 改
async function updateGame(data) {
    const db = await dbPromise;
    await db.put('games', data);
}

    // 初始化数据库
    const dbPromise = idb.openDB('auralith-database', 1, {
        upgrade(db) {
            // 仓库 games 和唯一标识
            db.createObjectStore('games', { keyPath: 'id' });
        }
    });