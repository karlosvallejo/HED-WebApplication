import {Component, OnInit} from '@angular/core';
import {GeneralServices} from "../services/services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], providers:[GeneralServices]
})
export class HomeComponent implements OnInit {
  private identidad_data: any;

  constructor(private services: GeneralServices) {
    this.identidad_data = this.services.data_identidad;
  }

  ngOnInit() {

  }

}
