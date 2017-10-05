import {Component, OnInit} from '@angular/core';
import {GeneralServices} from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  identidad_data: any;

  constructor(private services: GeneralServices) {}

  ngOnInit(): void {
    this.identidad_data = this.services.data_identidad;
  }
  getIdentidadData(): any {
    return this.identidad_data;
  }
}
