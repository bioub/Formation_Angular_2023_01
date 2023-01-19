import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   // private httpClient: HttpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id: string) {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
