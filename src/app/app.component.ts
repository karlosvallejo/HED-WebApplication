import {Component, OnInit} from '@angular/core';
import {GeneralServices} from './services/services.service';
import {routerTransition} from './animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
  providers: [GeneralServices]
})
export class AppComponent implements OnInit {
  identidad_data: {};
  general_info: {};

  // variables para las animaciones del router
  secciones: string[];
  indexActual: number;
  estadoFuturo: string;

  constructor(private services: GeneralServices) {
    this.indexActual = 0;
  }

  ngOnInit(): void {
    this.services.getGeneral_Info().subscribe(data => this.general_info = data);
    this.services.getIdentidad().subscribe(data => this.identidad_data = data);
    this.secciones = ['home', 'ponentes', 'agenda', 'about', 'galeria'];

  }

  getState(outlet): string {
      return outlet.activatedRouteData.state;
  }

  direction(estado: string): string {
      if (this.indexActual < this.secciones.indexOf(estado)) {
        this.estadoFuturo = estado;
        return 'derecha';
      } else if (this.indexActual > this.secciones.indexOf(estado)) {
        this.estadoFuturo = estado;
        return 'izquierda';
      }
  }

  animationDone(): void {
    this.indexActual = this.secciones.indexOf(this.estadoFuturo);
  }




}
