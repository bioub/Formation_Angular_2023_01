import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    UsersComponent,
    UserAddComponent,
    UserDetailsComponent
  ],
  imports: [
    SharedModule, // importe également CommonModule
    UsersRoutingModule
  ],
})
export class UsersModule { }
