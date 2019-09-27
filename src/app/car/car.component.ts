import { Component, OnInit } from '@angular/core';
import { Car } from "./car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public car: Car;
  carArray: Array<Car>;

  constructor() {
    this.car = new Car("","","","");
    this.carArray = [
      new Car("Corsa","1996","Red","1.2"),
      new Car("Sandero","1027","Blue","1.8")
    ];
  }

  addCar() {
    this.carArray.push(this.car);
  }

  ngOnInit() {
     
  }
  
  onSubmit() {
    // this.addCar();
    this.carArray.push(this.car);
  }
}
