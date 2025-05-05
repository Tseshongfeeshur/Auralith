import { openDB } from 'idb';

const dbPromise = openDB('auralith-database', 1, {
  upgrade(db) {
    db.createObjectStore('games', { keyPath: 'id' });
  }
});

export async function addGame(data) {
  const db = await dbPromise;
  await db.add('games', data);
}

export async function deleteGame(id) {
  const db = await dbPromise;
  await db.delete('games', id);
}

export async function getGame(id) {
  const db = await dbPromise;
  const game = await db.get('games', id);
  console.log(game);
  return game;
}

export async function getAllGames() {
  const db = await dbPromise;
  const allGames = await db.getAll('games');
  return allGames;
}

export async function updateGame(data) {
  const db = await dbPromise;
  await db.put('games', data);
}