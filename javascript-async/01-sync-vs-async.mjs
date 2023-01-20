import { readFile, readFileSync } from 'fs';

// Code synchrone
// tant que le fichier est en cours de lecture
// le thread reste bloqué sur la ligne readFileSync
// à éviter si une version asynchrone existe
// plus simple à écrire et à relire
const buffer = readFileSync('src.txt');
console.log(buffer.toString('utf-8'));

// Code asynchrone
// au moment où le fichier est lu, le thread est libéré
// le thread est disponible pour une autre opération
// privilégier la version asynchrone si possible
readFile('src.txt', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('Avant la ligne 16');
