import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),

    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          opacity: 0,
        }),
      ],
      { optional: true }
    ),

    query(
      ':enter',
      [
        style({ transform: 'translateX(-30px)', opacity: 0 }),
        animate(
          '800ms ease',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
