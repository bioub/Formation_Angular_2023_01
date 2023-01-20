import { readFile, readFileSync, writeFile, writeFileSync } from 'fs';

try {
  const buffer = readFileSync('src.txt');
  writeFileSync('dest.txt', buffer);
  console.log('Copy done');
} catch (err) {
  console.log('Copy failed');
}

// Enchainer plusieurs opérations asynchrone
// et faire une gestion d'erreur
readFile('src.txt', (err, buffer) => {
  if (err) {
    console.log('Copy failed');
  } else {
    writeFile('dest.txt', buffer, (err) => {
      if (err) {
        console.log('Copy failed');
      } else {
        console.log('Copy done');
      }
    });
  }
});
