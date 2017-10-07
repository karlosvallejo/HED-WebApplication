import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  eventosJueves: String[][]= [];
  eventoGroup = [];

  constructor() {
    const eventoUno = {'titulo': 'INCRIPCION', 'descripcion': '', 'hora': '07:00_08:00 AM', 'idioma': ''};
    this.eventoGroup.push(eventoUno);
    this.eventosJueves.push(this.eventoGroup);
    this.eventoGroup = [];
    const eventoDos = {'titulo': 'PEDRO GOMEZ', 'descripcion': 'Will Design Destroy The World?', 'hora': '07:00_' +
    '08:00 AM', 'idioma': 'INGLES'};
    const eventoDosDos = {'titulo': 'Torneo de Overwatch', 'descripcion': 'No se permiten pussies', 'hora': '07:00_' +
    '08:00 AM', 'idioma': ''};
    this.eventoGroup.push(eventoDos);
    this.eventoGroup.push(eventoDosDos);
    this.eventosJueves.push(this.eventoGroup);
    this.eventoGroup = [];

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
