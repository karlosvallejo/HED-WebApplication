import {Component, OnInit} from '@angular/core';
import {AngularFireObject} from 'angularfire2/database';
import {trigger, state, style, animate, transition} from '@angular/animations';
// import {fadeInAnimation} from '../_animations/fade-in-component';

@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.component.html',
  styleUrls: ['./ponentes.component.css'],
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
  ponentesData: AngularFireObject<any[]>;
  ponentesDataLocal: any[];
  nombre: string;
  info: string;
  subfrase: string;
  urlWeb: string;
  urlPortafolio: string;
  urlfacebook: string;
  urlPaloma: string;
  urlLinkedIn: string;
  cargo: string;
  hrefWeb: string;
  identidadData: AngularFireObject<any[]>;
  desvanecer = 'nodesvanecer';
  datos: string[]= [];

  constructor() {
//    this.identidadData = services.getIdentidad();
//    this.ponentesData = services.getPonentes();

    this.ponentesDataLocal = [{'nombre': 'karlos vallejo', 'subfrase': 'h01m1n1d n00b', 'urlWeb': 'ElH01m1do.com',
      'urlfacebook': 'notengo.com', 'urlPortafolio': 'facebook.com', 'urlPaloma': 'twitter.com',
      'urlLinkedIn': 'facebook.com', 'info': 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium' +
      ' doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae ' +
      'vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia ' +
      'consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, ' +
      'quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut ' +
      'labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam ' +
      'corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, ' +
      'qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas ' +
      'nulla pariatur?', 'cargo': 'el papu de los papus/ Papulon INC'}, {'nombre': 'Pedro Gomes', 'subfrase': 'Portugal / ' +
      'Aveiro', 'urlWeb': 'PEDROGOMESDESIGN.COM', 'hrefWeb': 'http://pedrogomesdesign.com', 'urlfacebook': 'https://www.face' +
       'book.com/pedrogomesdesign', 'urlPortafolio': 'https://www.behance.n' +
      'et/pedrogomes', 'urlPaloma': '', 'urlLinkedIn': '', 'info': 'Pedro Gomes es un premiado diseñador, empresario y ' +
      'soñador de tiempo completo.' +
      'Con un enfoque holístico del diseño, Pedro es un apasionado de todo lo que hace. Cuenta con una trayectoria ' +
      'impresionante y exitosa trabajando con startups innovadoras, marcas internacionales y clientes privados. \n' +
      'Trabajando globalmente desde Aveiro, Portugal; Pedro y su equipo han desarrollado una impresionante serie de proyectos ' +
      'empresariales que permiten el impacto global del diseño. Como soñador a tiempo completo y director creativo de su ' +
      'estudio, le encanta empujar los límites del diseño, aprovechando el poder de la estrategia de diseño para ofrecer, ' +
      'la innovación entre plataformas y experiencias significativas.', 'cargo': 'Diseñador Industrial / Diseñador de Producto'}];

    this.info = this.ponentesDataLocal[0].info;
    this.nombre = this.ponentesDataLocal[0].nombre;
    this.subfrase = this.ponentesDataLocal[0].subfrase;
    this.urlWeb = this.ponentesDataLocal[0].urlWeb;
    this.urlfacebook = this.ponentesDataLocal[0].urlfacebook;
    this.urlPortafolio = this.ponentesDataLocal[0].urlPortafolio;
    this.urlPaloma = this.ponentesDataLocal[0].urlPaloma;
    this.urlLinkedIn = this.ponentesDataLocal[0].urlLinkedIn;
    this.cargo = this.ponentesDataLocal[0].cargo;
    this.hrefWeb = this.ponentesDataLocal[0].hrefWeb;


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


  public asignarInfo(infotito: string, nombri: string, slogitan: string, websito: string,
                     behancito: string, feisuri: string, palomaNoOp: string, linkin: string, cargin: string, hrefiso: string) {
    this.datos.push(infotito);
    this.datos.push(nombri);
    this.datos.push(slogitan);
    this.datos.push(websito);
    this.datos.push(behancito);
    this.datos.push(feisuri);
    this.datos.push(palomaNoOp);
    this.datos.push(linkin);
    this.datos.push(cargin);
    this.datos.push(hrefiso);
    this.desvanecer = 'desvanecer';

  }



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
      this.cargo = this.datos[8];
      this.hrefWeb = this.datos[9];
      this.desvanecer = 'nodesvanecer';
      this.datos = [];
    }
  }

  ngOnInit() {


  }
}
