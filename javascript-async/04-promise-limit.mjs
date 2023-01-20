// setTimeout(() => {
//   console.log('1s');
// }, 1000);

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });
}

// Pas de problème avec setTimeout
timeout(1000)
  .then(() => {
    console.log('1s setTimeout');
  });

function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, delayMs);
  });
}

// Problème avec setInterval
// Promise ne fonctionne que si le callback est appelé
// une seule fois
interval(1000)
  .then(() => {
    console.log('1s setInterval');
  });
