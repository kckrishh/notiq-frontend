import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideAnimation } from '../../route-animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  animations: [slideAnimation],
})
export class AuthComponent {
  preparetRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
