import {Component, Input, OnInit} from '@angular/core';
import {GeneralServices} from '../services/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 @Input() general_info_footer: any;
 eventoActual: string;

  constructor(private services: GeneralServices) {
  }

  ngOnInit() {
    this.eventoActual = this.services.evento_actual;
  }

  openUrl(url: string) {
    console.log(url);
    if (url === '2017-1') {
      window.open('http://papelypixel.hoyesdiseno.com/');
    }

  }

}
