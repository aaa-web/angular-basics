import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public logged: boolean;  

  constructor(public userService: UserService) {    
    this.logged = false;
  }

  getAllUser() {
    return this.userService.getAll();
  }

  getLogin(user: User) {
    var logged = false;
    this.getAllUser().subscribe((data:Array<User>) => {
      data.forEach(element => {
        if (element.name === user.name && element.password === user.password) {
          logged = true;
        } 
      });
      return logged;
    });
    
  }

  getLogged(){
    return this.logged;
  }

}
