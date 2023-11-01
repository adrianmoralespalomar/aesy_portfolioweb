import { style, animate, trigger, transition, keyframes, state } from '@angular/animations';

export const SqueezeInOut = trigger('jelloAnimation', [
    state('false', style({
      transform: 'scale(1, 1)'
    })),
    state('true', style({
      transform: 'scale(1, 1)'
    })),
    transition('false => true', [
      animate('0.9s', keyframes([
        style({ transform: 'scale(1, 1)' }),
        style({ transform: 'scale(1.25, 0.75)' }),
        style({ transform: 'scale(0.75, 1.25)' }),
        style({ transform: 'scale(1.15, 0.85)' }),
        style({ transform: 'scale(0.95, 1.05)' }),
        style({ transform: 'scale(1.05, 0.95)' }),
        style({ transform: 'scale(1, 1)' })
      ]))
    ]),
    transition('true => false', [
      animate('0.9s', keyframes([
        style({ transform: 'scale(1, 1)' }),
        style({ transform: 'scale(1.25, 0.75)' }),
        style({ transform: 'scale(0.75, 1.25)' }),
        style({ transform: 'scale(1.15, 0.85)' }),
        style({ transform: 'scale(0.95, 1.05)' }),
        style({ transform: 'scale(1.05, 0.95)' }),
        style({ transform: 'scale(1, 1)' })
      ]))
    ])
  ]);