# Exercices 

## Exercice 1

Générer un nouveau composant `Clock`

Dans la classe `ClockComponent` créer une propriété `now` initialisée avec `new Date()` (`now = new Date();`)

Dans la méthode `ngOnInit` (implémenter `OnInit` au passage) affecter une nouvelle date à `now` chaque seconde.

Dans le template `clock.component.html` afficher la valeur de `now` en utilisant le pipe `date` comme ceci `| date:'HH:mm:ss'`

Dans le template `app.component.html` utiliser le composant `app-clock` à la suite des autres.
