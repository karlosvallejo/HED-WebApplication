import {Component, HostBinding, OnInit} from '@angular/core';

import {query as q, trigger, transition, group, sequence, animateChild, style, animate, stagger} from '@angular/animations';

const query = (s, a, o= {optional: true}) => q(s, a, o);
const animarHijos = trigger('cuadritosTransition', [
  transition('jueves => viernes', [
    sequence([
      query(':leave',  stagger(100, [
        animateChild()
      ])),
      query(':enter',  stagger(200, [
        animateChild()
      ])),
      group([

      ])
    ])
  ]),
  transition('viernes => jueves', [
      sequence([
        query(':leave',  stagger(100, [
          animateChild()
        ])),
        query(':enter',  stagger(200, [
          animateChild()
        ])),
        group([

        ])
      ])
  ]),
]);

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  animations: [animarHijos]
})
export class AgendaComponent implements OnInit {
  eventosJueves: any[][]= [];
  eventosViernes: any[][]= [];
  display: any[][] = [];
  diaSel = 'jueves';
  permitirCambio = true;


  constructor() {
    const primerEventoJueves = [{'titulo': 'INCRIPCION', 'descripcion': '', 'hora': '07:00_08:00 AM', 'idioma': ''}];
    const segundoEventoJueves = [{'titulo': 'PEDRO' +
    ' GOMEZ', 'descripcion': 'Will Design Destroy The World?', 'hora': '07:00_08:00 AM', 'idioma': 'INGLES'}, {'titulo': 'Torneo ' +
    'de Overwatch', 'descripcion': 'No se permiten pussies', 'hora': '07:00_' +
    '08:00 AM', 'idioma': ''}];
    this.eventosJueves = [ primerEventoJueves, segundoEventoJueves];

    const primerEventoViernes = [{'titulo': 'Una conferencia', 'descripcion': 'hola soy una conferencia', 'hora': '10:00_' +
    '12:00 AM', 'idioma': 'Italiano'}, {'titulo': 'otra conferencia', 'descripcion': 'hola soy una conf, pero mas pro', 'hora': '10:00_' +
    '12:00 AM', 'idioma': 'Ingles mexicano'}];
    const segundoEventoViernes = [{'titulo': 'merendar', 'descripcion': 'empanadas o miedo', 'hora': '01:00_' +
    '2:00 AM', 'idioma': 'combo empanada'}];
    const tercerEventoViernes = [{'titulo': 'curso de paint con stemen', 'descripcion': 'enseñar a hacer momazos', 'hora': '04:00_' +
    '6:00 AM', 'idioma': 'cualquiera we'}];

    this.eventosViernes = [primerEventoViernes, segundoEventoViernes, tercerEventoViernes];

    this.display = this.eventosJueves;
  }

  cambiarDia(dia: string): void {
    if (this.permitirCambio) {
      switch (dia) {
        case 'jueves':
          this.display = this.eventosJueves;
          this.permitirCambio = false;
          setTimeout(() => {
            this.permitirCambio = true;
          }, 3000);
          break;

        case 'viernes':
          this.display = this.eventosViernes;
          this.permitirCambio = false;
          setTimeout(() => {
            this.permitirCambio = true;
          }, 3000);
          break;
      }

      this.diaSel = dia;
    }
  }

  ngOnInit() {
    /*
    for (const i of this.eventosJueves){
      for (const j of i){
        console.log(j);
        this.arraySend.push(j);
      }
    }
    */
  }

}
