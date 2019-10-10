import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { User } from '../services/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { 
    
  }

  ngOnInit() {
    this.login();
  }

  login(){
    let user: User = new User("", "andrec230@gmail.com", "123","");
    this.loginService.getLogin(user);
  }

}
