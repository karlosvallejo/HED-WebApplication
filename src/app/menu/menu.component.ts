import {Component, OnInit} from '@angular/core';
import {GeneralServices} from "../services/services.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'], providers:[GeneralServices]
})
export class MenuComponent implements OnInit {
  identidad_data: any;

  constructor(private services: GeneralServices) {
    this.identidad_data = this.services.data_identidad;
  }


  ngOnInit() {
  }

}
