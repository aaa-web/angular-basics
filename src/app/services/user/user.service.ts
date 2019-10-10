import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers = 'https://my-json-server.typicode.com/aaa-web/demo-db';

  constructor(private http: HttpClient) { }

  getAll() {
    const requestUrl = `${this.urlUsers}/users`;
    return this.http
    .get(requestUrl)
  }
}
