// Dans ES2018
// Async Iterator permet d'utiliser les promesses
// avec des callbacks appelés plusieurs fois
// la fin de RxJS ?

import { setInterval } from "timers/promises";

// Plus lourd à mettre que Observalbe
// Mais dans Node.js setInterval de timers/promises
// fait déjà l'implémentation

for await (const _ of setInterval(1000)) {
  console.log('1s');
}
