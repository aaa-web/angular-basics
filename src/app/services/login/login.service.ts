import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public logged: boolean; 
  public loggedAux: any = {}; 

  constructor(public userService: UserService) {    
    //this.logged = false;
  }

  getAllUser() {
    return this.userService.getAll();
  }

  getLogin(user: User) {
    // this.logged = false;
    this.getAllUser().subscribe((data:Array<User>) => {
      data.forEach(element => {
        if (element.name === user.name && element.password === user.password) {          
          this.logged = true;
          this.loggedAux.logged=true;
          console.log("logged getLogin", this.logged);
          
        } 
        return this.logged;
      });
    });
    
  }

  getLogged(){
    console.log(this.logged);
    return this.logged;    
  }

  getLoggedAux(){
    console.log(this.loggedAux);
    return this.loggedAux;    
  }

}
