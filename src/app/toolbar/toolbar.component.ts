import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  appName: string;
  appDescription: string;
  logged: boolean;  

  constructor() { 
    this.appName = "ActiviTor";
    this.appDescription = "Activity recording app";
    this.logged = true;
  }

  ngOnInit() {
  }

}
