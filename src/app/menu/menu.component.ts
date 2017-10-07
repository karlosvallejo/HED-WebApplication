import {Component, Input, OnInit} from '@angular/core';
import {GeneralServices} from '../services/services.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'], providers: [GeneralServices]
})
export class MenuComponent implements OnInit {
 @Input() identidad_data_Menu: any;


  constructor(private services: GeneralServices) {
  }

  ngOnInit() {
  }

}
