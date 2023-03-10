import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  addEvent = new Subject<User>();

   // private httpClient: HttpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id: string) {
    const req$ = this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (id === '3') {
      return req$.pipe(
        delay(3000),
      );
    }

    return req$;
  }

  create(user: User) {
    return this.httpClient.post<User>('https://jsonplaceholder.typicode.com/users', user);
  }
}
