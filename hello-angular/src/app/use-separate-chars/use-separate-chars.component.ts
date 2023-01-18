import { Component } from '@angular/core';
import { separateChars } from '../utils/separate-chars';

@Component({
  selector: 'app-use-separate-chars',
  templateUrl: './use-separate-chars.component.html',
  styleUrls: ['./use-separate-chars.component.css']
})
export class UseSeparateCharsComponent {
  name = 'Romain';

  separateCharsInName() {
    console.log('separateCharsInName')
    return separateChars(this.name);
  }
}
