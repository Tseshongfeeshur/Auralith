import { openDB } from 'idb';

const dbPromise = openDB('auralith-database', 1, {
  upgrade(db) {
    db.createObjectStore('games', { keyPath: 'id' });
  }
});

export async function addGame(data) {
  const db = await dbPromise;
  await db.add('games', data);
  window.dispatchEvent(new Event('games-updated'));
}

export async function deleteGame(id) {
  const db = await dbPromise;
  await db.delete('games', id);
  window.dispatchEvent(new Event('games-updated'));
}

export async function getGame(id) {
  const db = await dbPromise;
  const game = await db.get('games', id);
  console.log(game);
  return game;
}

export async function getAllGameIds() {
  const db = await dbPromise;
  const ids = await db.getAllKeys('games');
  return ids;
}

export async function updateGame(data) {
  const db = await dbPromise;
  await db.put('games', data);
  window.dispatchEvent(new Event('games-updated'));
}