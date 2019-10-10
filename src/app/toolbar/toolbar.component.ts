import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  appName: string;
  appDescription: string;
  logged: boolean;  

  constructor(
    public loginService: LoginService,
    public userService: UserService
    ) { 
    this.appName = "ActiviTor";
    this.appDescription = "Activity recording app";    
  }

  ngOnInit() {
    this.logged = this.getLogged();
    console.log(this.logged);
    
    // this.logged = true;
  }

  getLogged() {
    // return this.userService.getAuth();
    return this.loginService.getLogged();
  }

}
