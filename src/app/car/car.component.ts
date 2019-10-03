import { Component, OnInit } from '@angular/core';
import { Car } from "./car.model";
import { RequestService } from "../services/request.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public car: Car;
  carArray: Array<Car>;

  constructor(public requestService: RequestService) {
    
    this.car = new Car("","","","");
  }
  
  ngOnInit() {
     this.loadCars();
  }

  addCar() {
    this.carArray.push(this.car);
  }
  
  onSubmit() {
    // this.addCar();
    this.carArray.push(this.car);
  }

  loadCars() {
    return this.requestService.getCars().subscribe((data:[]) => {
      this.carArray = data;
    })
  }
}
