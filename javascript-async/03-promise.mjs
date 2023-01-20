import { readFile, writeFile } from 'fs/promises';

readFile('src.txt')
  .then((buffer) => {
    return writeFile('dest.txt', buffer);
  })
  .then(() => {
    console.log('Copy done');
  })
  .catch((err) => {
    console.log('Copy failed');
  });

// En version plus condensée
readFile('src.txt')
  .then((buffer) => writeFile('dest.txt', buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log('Copy failed'));

// Avec la syntaxe async/await de ES2017
async function copy() {
  try {
    const buffer = await readFile('src.txt');
    await writeFile('dest.txt', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log('Copy failed');
  }
}

copy();

// Avec la syntaxe Top level await de ES2022
// Uniquement avec les modules ES
try {
  const buffer = await readFile('src.txt');
  await writeFile('dest.txt', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Copy failed');
}