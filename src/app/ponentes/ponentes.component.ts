import {Component, HostBinding, OnInit} from '@angular/core';
import {GeneralServices} from '../services/services.service';
import {FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {trigger, state, style, animate, transition} from '@angular/animations';
//import {fadeInAnimation} from '../_animations/fade-in-component';

@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.component.html',
  styleUrls: ['./ponentes.component.css'],
  providers: [GeneralServices],
  animations: [
    trigger('desvanecerInfo', [
      state('desvanecer', style({
        opacity: '0'
      })),
      state('nodesvanecer', style({
        opacity: '1'
      })),
      transition('nodesvanecer => desvanecer', animate('400ms ease-in')),
      transition('desvanecer => nodesvanecer', animate('400ms ease-out'))
    ])
  ]

})
export class PonentesComponent implements OnInit {
//  @HostBinding('@fadeInAnimation') fadeInAnimation: '';
  ponentesData: FirebaseListObservable<any[]>;
  nombre: string;
  info: string;
  subfrase: string;
  urlWeb: string;
  urlPortafolio: string;
  urlfacebook: string;
  urlPaloma: string;
  urlLinkedIn: string;
  identidadData: FirebaseObjectObservable<any[]>;
  desvanecer = 'nodesvanecer';
  datos: string[]= [];

  constructor(private services: GeneralServices) {
//    this.identidadData = services.getIdentidad();
//    this.ponentesData = services.getPonentes();

    this.info = ('Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ' +
      'totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. ' +
      'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,' +
      ' sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, ' +
      'qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora ' +
      'inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.');
    this.nombre = ('karlos vallejo');
    this.subfrase = ('h01m1n1d n00b');
    this.urlWeb = ('ElH01m1do.com');
    this.urlfacebook = ('notengo.com');
    this.urlPortafolio = ('facebook.com');
    this.urlPaloma = ('twitter.com');
    this.urlLinkedIn = ('facebook.com');
/*
    this.ponentesData.subscribe(items => {
      // items is an array
      this.nombre = items[0].nombre;
      this.subfrase = items[0].subFrase;
      this.info = items[0].info;
      this.urlWeb = items[0].urlWeb;
      this.urlPortafolio = items[0].urlBehance;
      this.urlfacebook = items[0].urlFacebook;
      this.urlPaloma = items[0].urlTwitter;
      this.urlLinkedIn = items[0].urlLinkedIn;
      items.forEach(item => {
        // this.nombres.push(item.nombre);
        // this.info.push(item.info);
      });
    });
    */
  }

  /*
  public asignarInfo(infotito: string, nombri: string, slogitan: string, websito: string,
                     behancito: string, feisuri: string, palomaNoOp: string, linkin: string) {
    this.datos.push(infotito);
    this.datos.push(nombri);
    this.datos.push(slogitan);
    this.datos.push(websito);
    this.datos.push(behancito);
    this.datos.push(feisuri);
    this.datos.push(palomaNoOp);
    this.datos.push(linkin);
    this.desvanecer = 'desvanecer';

  }
  */

  /*
  animationDone($event) {
    if (this.desvanecer === 'desvanecer') {
      this.info = this.datos[0];
      this.nombre = this.datos[1];
      this.subfrase = this.datos[2];
      this.urlWeb = this.datos[3];
      this.urlPortafolio = this.datos[4];
      this.urlfacebook = this.datos[5];
      this.urlPaloma = this.datos[6];
      this.urlLinkedIn = this.datos[7];
      this.desvanecer = 'nodesvanecer';
      this.datos = [];
    }
  }
*/
  ngOnInit() {


  }
}
