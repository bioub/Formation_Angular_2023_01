import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = {
    username: 'romain',
    age: 37,
    isActive: true,
  };

  updateUsername(event: Event) {
    this.user.username = (event.target as HTMLInputElement).value;
  }
}
