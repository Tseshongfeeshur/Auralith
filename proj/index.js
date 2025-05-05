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