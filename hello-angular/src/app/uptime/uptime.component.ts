import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uptime',
  templateUrl: './uptime.component.html',
  styleUrls: ['./uptime.component.css']
})
export class UptimeComponent implements OnInit {
  seconds = 0;

  ngOnInit(): void {
    // setInterval reçoit 2 paramètres
    // un callback, () => {}
    // un délai en ms
    // le callback est une fonction qui est appelée à notre place
    // ici par le navigateur chaque seconde
    // cette fonction doit être définie avec la syntaxe fonction fléchée
    // sinon this n'aurait pas la valeur voulue à savoir l'objet
    // de type UptimeComponent
    setInterval(() => {
      this.seconds++;
      // le simple fait de mettre à jour le modèle (ici
      // les propriétés du composant) fait qu'Angular va détecter
      // les changements et ne mettre à jour que ce qui est nécessaire
      // au niveau du DOM (et donc de l'interface graphique)
    }, 1000);
  }
}
