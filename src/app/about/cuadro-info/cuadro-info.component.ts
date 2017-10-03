import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro-info',
  templateUrl: './cuadro-info.component.html',
  styleUrls: ['./cuadro-info.component.css']
})
export class CuadroInfoComponent implements OnInit {
  titulo: string;
  descripcion: string;
  hora: string;
  idioma: string;

  constructor() {
    this.titulo = 'PEDRO GOMEZ';
    this.descripcion = 'Will Design Destroy The World?';
    this.hora = '07:00_08:00 AM';
    this.idioma = 'INGLES';
  }

  ngOnInit() {
  }

}
