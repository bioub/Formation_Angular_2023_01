import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll()
      .subscribe((users) => {
        this.users = users;
        this.loading = false;
      });

    this.userService.addEvent.subscribe((user) => {
      this.users.push(user);
    });
  }
}
