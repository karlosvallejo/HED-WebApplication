import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {GeneralServices} from '../services/services.service';
import {Subscription} from 'rxjs/Subscription';


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
export class PonentesComponent implements OnInit, OnDestroy, AfterViewInit {


  ponentesData: {};
  ponentesDataSus: Subscription;
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
  urlFoto: string;
  imgposition: string;
//  identidadData: AngularFireObject<any[]>;
  desvanecer = 'nodesvanecer';
  datos: string[]= [];

  constructor(private services: GeneralServices) {
    /*

    this.ponentesDataLocal = [{'nombre': 'KARLOS VALLEJO', 'subfrase': 'h01m1n1d n00b', 'urlWeb': 'ElH01m1do.com',
      'urlfacebook': 'notengo.com', 'urlPortafolio': 'facebook.com', 'urlPaloma': 'twitter.com',
      'urlLinkedIn': 'facebook.com', 'info': 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium' +
      ' doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae ' +
      'vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia ' +
      'consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, ' +
      'quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut ' +
      'labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam ' +
      'corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, ' +
      'qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas ' +
      'nulla pariatur?', 'cargo': 'el papu de los papus/ Papulon INC', 'urlFoto': '/assets/test/1.jpg'},


      {'nombre': 'PEDRO GOMES', 'subfrase': 'Portugal / ' +
      'Aveiro', 'urlWeb': 'PEDROGOMESDESIGN.COM', 'hrefWeb': 'http://pedrogomesdesign.com', 'urlfacebook': 'https://www.face' +
       'book.com/pedrogomesdesign', 'urlPortafolio': 'https://www.behance.n' +
      'et/pedrogomes', 'urlPaloma': '', 'urlLinkedIn': '', 'info': 'Pedro Gomes es un premiado diseñador, empresario y ' +
      'soñador de tiempo completo.' +
      'Con un enfoque holístico del diseño, Pedro es un apasionado de todo lo que hace. Cuenta con una trayectoria ' +
      'impresionante y exitosa trabajando con startups innovadoras, marcas internacionales y clientes privados. \n' +
      'Trabajando globalmente desde Aveiro, Portugal; Pedro y su equipo han desarrollado una impresionante serie de proyectos ' +
      'empresariales que permiten el impacto global del diseño. Como soñador a tiempo completo y director creativo de su ' +
      'estudio, le encanta empujar los límites del diseño, aprovechando el poder de la estrategia de diseño para ofrecer, ' +
      'la innovación entre plataformas y experiencias significativas.', 'cargo': 'Diseñador Industrial / Diseñador de ' +
      'Producto', 'urlFoto': '/assets/identidad/2017-2/ponentes/pedro.jpg'}];


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
    this.urlFoto = this.ponentesDataLocal[0].urlFoto;
  */

  }


  ngOnInit() {
      this.ponentesData = this.services.getPonentesInfoFinal();
      if (this.ponentesData) {
        this.nombre = this.ponentesData[0].nombre;
        this.subfrase = this.ponentesData[0].pais + ' / ' + this.ponentesData[0].ciudad;
        this.info = this.ponentesData[0].informacion;
        this.urlPortafolio = this.ponentesData[0].redes.behance;
        this.urlfacebook = this.ponentesData[0].redes.facebook;
        this.urlPaloma = this.ponentesData[0].redes.twitter;
        this.urlLinkedIn = this.ponentesData[0].redes.linkedIn;
        this.cargo = this.ponentesData[0].cargo;
        this.hrefWeb = this.ponentesData[0].redes.paginaPersonalAcortada;
        this.urlWeb = this.ponentesData[0].redes.pagina_personal;
        this.urlFoto = this.ponentesData[0].src_image;
        if (this.ponentesData[0].imagePosition) {
          this.imgposition = this.ponentesData[0].imagePosition;
        } else {
          this.imgposition = 'top';
        }
      }




  }

  ngAfterViewInit(): void {
    if (!this.ponentesData) {
      this.ponentesDataSus =  this.services.getPonentesInfo().subscribe(data => {
        this.ponentesData = data;
        this.nombre = this.ponentesData[0].nombre;
        this.subfrase = this.ponentesData[0].pais + ' / ' + this.ponentesData[0].ciudad;
        this.info = this.ponentesData[0].informacion;
        this.urlPortafolio = this.ponentesData[0].redes.behance;
        this.urlfacebook = this.ponentesData[0].redes.facebook;
        this.urlPaloma = this.ponentesData[0].redes.twitter;
        this.urlLinkedIn = this.ponentesData[0].redes.linkedIn;
        this.cargo = this.ponentesData[0].cargo;
        this.hrefWeb = this.ponentesData[0].redes.paginaPersonalAcortada;
        this.urlWeb = this.ponentesData[0].redes.pagina_personal;
        this.urlFoto = this.ponentesData[0].src_image;
        if (this.ponentesData[0].imagePosition) {
          this.imgposition = this.ponentesData[0].imagePosition;
        } else {
          this.imgposition = 'top';
        }
      });
    }

  }

  ngOnDestroy(): void {
    if (this.ponentesDataSus) {
      this.ponentesDataSus.unsubscribe();
    }
  }




  public asignarInfo(infotito: string, nombri: string, slogitan: string, websito: string,
                     behancito: string, feisuri: string, palomaNoOp: string, linkin: string, cargin: string,
                     hrefiso: string, urlfotin: string, position: string) {
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
    this.datos.push(urlfotin);
    this.datos.push(position);
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
      this.urlFoto = this.datos[10];
      if (this.datos[11]) {
        this.imgposition = this.datos[11];
      } else {
        this.imgposition = 'top';
      }
      this.desvanecer = 'nodesvanecer';
      this.datos = [];
    }
  }

}
