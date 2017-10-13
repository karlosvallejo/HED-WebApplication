import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {trigger, transition, style, stagger, animate, query, group, keyframes} from '@angular/animations';



export const enterAndLeave = trigger('cuadroTransision', [

  // route 'enter' transition
  transition(':enter', [
    query('#cuadro', style({ opacity: 0, position: 'absolute'})),
    // css styles at start of transition
    query('#cuadro',  [
      style({ transform: 'translateY(-120%)'}),
      animate('0.6s ease-in-out', keyframes([
        style({position: 'relative', transform: 'translateY(-120%)', opacity: 0.0, offset: 0.1}),
        style({transform: 'translateY(0)', opacity: 1, offset: 1})
      ])),
    ]),
  ]),
  transition(':leave', [
    query('#cuadro', style({ opacity: 1 })),
    // css styles at start of transition
    query('#cuadro',  [
      style({ transform: 'translateY(0)' }),
      animate('0.4s ease-in-out', style({transform: 'translateY(0)', opacity: 0})),
    ]),
  ])
]);

@Component({
  selector: 'app-cuadro-info',
  templateUrl: './cuadro-info.component.html',
  styleUrls: ['./cuadro-info.component.css'],
  animations: [enterAndLeave]
})
export class CuadroInfoComponent implements OnInit {
 @HostBinding('@cuadroTransision') enterAndLeave: '';
 @Input() titulo: string;
 @Input() descripcion: string;
 @Input() hora: string;
 @Input() idioma: string;
 @Input() arrayEventos = [];
 public arrayDisplay;
  constructor() {

  }

  ngOnInit() {
    /*
    for (const i of this.arrayEventos){
      console.log(i);
    }
    */
    this.arrayDisplay = this.arrayEventos[0];
  //  console.log(this.arrayEventos.length);
  }
  cambiarInfo(id: number): void {
    if (this.arrayDisplay === this.arrayEventos[id]) {
      this.arrayDisplay = this.arrayEventos[id];
    } else {
      this.arrayDisplay = this.arrayEventos[id];
    }
  }

}
