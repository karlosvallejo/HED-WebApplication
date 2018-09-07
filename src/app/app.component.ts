import {AfterViewInit, Component, OnInit} from '@angular/core';
import {routerTransition} from './animations/router.animations';
import {GeneralServices} from './services/services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, AfterViewInit {
  canvasito: any;
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

  ngAfterViewInit(): void {





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
