import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cuadro-info',
  templateUrl: './cuadro-info.component.html',
  styleUrls: ['./cuadro-info.component.css']
})
export class CuadroInfoComponent implements OnInit {
 @Input() titulo: string;
 @Input() descripcion: string;
 @Input() hora: string;
 @Input() idioma: string;
 @Input() arrayEventos = [];
 public arrayDisplay;
  constructor() {

  }

  ngOnInit() {
    for (const i of this.arrayEventos){
      console.log(i);
    }
    this.arrayDisplay = this.arrayEventos[0];
    console.log(this.arrayEventos.length);
  }
  cambiarInfo(id: number): void {
    if (this.arrayDisplay === this.arrayEventos[id]) {
      this.arrayDisplay = this.arrayEventos[id];
    } else {
      this.arrayDisplay = this.arrayEventos[id];
    }
  }

}
