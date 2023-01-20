import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User = {};

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Snapshot (valeur à un instant donné)
    // const id = this.activatedRoute.snapshot.params['userId'];
    // console.log('id snapshot', id);

    // Observable (valeur dans le temps)
    // this.activatedRoute.params.subscribe((params) => {
    //   const id = params['userId'];
    //   this.userService.getById(id).subscribe({
    //     next: (user) => {
    //       this.user = user;
    //     },
    //     error: (err) => {
    //       console.log('Failed');
    //     },
    //   });
    // });

    this.activatedRoute.params
      .pipe(
        map((params) => params['userId']),
        switchMap((id) => this.userService.getById(id))
      )
      .subscribe((user) => {
        this.user = user;
      });
  }
}
