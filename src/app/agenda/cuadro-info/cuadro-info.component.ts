import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {trigger, transition, style, stagger, animate, query as q, group, keyframes} from '@angular/animations';

const query = (s, a, o= {optional: true}) => q(s, a, o);


export const enterAndLeave = trigger('cuadroTransision', [

  // route 'enter' transition
  transition(':enter', [
    query('#cuadro', style({ opacity: 0, position: 'fixed'})),
    // css styles at start of transition
    query('#cuadro',  [
      style({ transform: 'translateY(-100%)'}),
      animate('0.7s ease-in-out', keyframes([
        style({position: 'relative', transform: 'translateY(-100%)', opacity: 0.0, offset: 0.05}),
        style({position: 'relative', transform: 'translateY(0)', opacity: 1, offset: 1})
      ])),
    ]),
  ]),
  transition(':leave', [
    query('#cuadro', style({ opacity: 1 })),
    // css styles at start of transition
    query('#cuadro',  [
      style({ transform: 'translateY(0)' }),
      animate('0.5s ease-in-out', style({transform: 'translateY(0)', opacity: 0})),
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
