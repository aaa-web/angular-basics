import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  
  urlAllCars = 'https://my-json-server.typicode.com/aaa-web/demo-db';
  
  getCars() {
    return this
    .http
    .get(`${this.urlAllCars}/users`);
  }
}
