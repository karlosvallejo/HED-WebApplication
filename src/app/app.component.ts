import {Component, OnInit} from '@angular/core';
import {GeneralServices} from './services/services.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  identidad_data: Observable<any[]>;
  general_info: Observable<any[]>;

  constructor(private services: GeneralServices) {}

  ngOnInit(): void {
    this.general_info = this.services.general_info.valueChanges();
    this.identidad_data = this.services.data_identidad.valueChanges();
  }

}
