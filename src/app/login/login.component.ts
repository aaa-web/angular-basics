import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { User } from '../services/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(public loginService: LoginService) { 
    this.user = new User("","","","");
  }

  ngOnInit() {
    // this.login();
  }

  login(){
    console.log(this.user);
    this.loginService.getLogin(this.user);
  }

  logged(){
    console.log("logged: ", this.loginService.getLogged());
    console.log("loggedAux: ", this.loginService.getLoggedAux());
  }

}
