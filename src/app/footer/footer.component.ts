import {Component, OnInit} from '@angular/core';
import {GeneralServices} from "../services/services.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'], providers: [GeneralServices]
})
export class FooterComponent implements OnInit {
  general_info: any;

  constructor(private services: GeneralServices) {
    this.general_info = this.services.general_info;
  }

  ngOnInit() {

  }

}
