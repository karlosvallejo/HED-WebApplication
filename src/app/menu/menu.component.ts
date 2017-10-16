import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 @Input() identidad_data_Menu: any;


  constructor() {
  }

  ngOnInit() {
  }

}
