import { Component, OnInit } from '@angular/core';
import { Car } from "./car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car;
  carArray: Array<Car> = new Array;

  constructor() {
    this.car = new Car("","","","");
  }

  addCar() {
    this.carArray.push(this.car);
  }

  ngOnInit() {
    
  }
  
  onSubmit() {
    // this.addCar();
    console.log(this.car);
  }
}
