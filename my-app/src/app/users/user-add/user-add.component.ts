import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'my-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  // user: User = {
  //   name: 'Romain',
  //   email: 'romain.bohdanowicz@formation.tech',
  //   phone: '06 00 00 00 00',
  // };
  // userForm = new FormGroup({
  //   name: new FormControl('Romain', { nonNullable: true, validators: [Validators.required] }),
  //   email: new FormControl('romain.bohdanowicz@formation.tech', { nonNullable: true, validators: [Validators.email] }),
  //   phone: new FormControl('06 00 00 00 00', { nonNullable: true }),
  // });

  userForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.email] }),
    phone: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(): void {
    // this.userForm.valueChanges.subscribe((user) => {
    //   console.log(user);
    // })

    // this.userForm.get('email')?.valueChanges.subscribe((email) => {
    //   console.log(email);
    // });
  }
}
