import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* => izquierda', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%',   height: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('* => derecha', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' })
        , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
