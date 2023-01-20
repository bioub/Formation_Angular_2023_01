import { Observable } from 'rxjs';

function interval(delayMs) {
  return new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next();
    }, delayMs);
  });
}

interval(1000).subscribe({
  next: () => {
    console.log('1s');
  },
});

// simplification si on écoute pas les erreurs et complete
// si on écoute que next :
interval(1000).subscribe(() => {
  console.log('1s');
});

// Autre différence majeure avec Promise
// Dans Promise l'opération asynchrone démarre au moment
// de new Promise
// Dans Observable l'opération asynchrone démarre au moment
// du .subscribe