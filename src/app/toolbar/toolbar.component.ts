import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  appName: string;
  appDescription: string;
  logged: boolean;  

  constructor(public loginService: LoginService) { 
    this.appName = "ActiviTor";
    this.appDescription = "Activity recording app";    
  }

  ngOnInit() {
    this.logged = this.getLogged();
    // this.logged = true;
  }

  getLogged() {
    return this.loginService.getLogged();
  }

}
