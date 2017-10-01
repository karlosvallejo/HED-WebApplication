import {Component, OnInit} from '@angular/core';
//import {GeneralServices} from "../services/services.service";
//providers: [GeneralServices]
import {Ng4FittextModule} from 'ng4-fittext';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  identidad_data: any;

/*  constructor(private services: GeneralServices) {
    this.identidad_data = this.services.data_identidad;
  }
  */

  constructor() {

  }

  ngOnInit() {
  }

}
