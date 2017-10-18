import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {GeneralServices} from '../services/services.service';
import {query as q, trigger, transition, group, sequence, animateChild, style, animate, stagger} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';

const query = (s, a, o= {optional: true}) => q(s, a, o);
const animarHijos = trigger('cuadritosTransition', [
  transition('1 => 0', [
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
  ])
]);

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  animations: [animarHijos]
})
export class AgendaComponent implements OnInit, OnDestroy {
  diaSel: {actividades: any[], dia_semana: '', fecha: ''};
  agendaData: any[];
  actividades: any[];
  agendaDataSus: Subscription;
  permitirCambio = true;


  constructor(private services: GeneralServices) {
    /*
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
    */
  }

  cambiarDia(dia: {actividades: any[], dia_semana: '', fecha: ''}): void {
    if (this.permitirCambio) {
      this.diaSel = dia;
      this.permitirCambio = false;
      this.actividades = this.diaSel.actividades;
      setTimeout(() => {
        this.permitirCambio = true;
      }, 3000);
/*
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
*/
 //     this.diaSel = dia;
    }
  }

  ngOnInit() {
    this.agendaDataSus =  this.services.getAgendaInfo().subscribe(data => {
      this.agendaData = data;
      this.diaSel = this.agendaData[0];
      console.log(this.diaSel);
      this.actividades = this.diaSel.actividades;
    });
  }

  ngOnDestroy(): void {
    this.agendaDataSus.unsubscribe();
  }

}
