import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  isValid: boolean | null = null;
  message: string = 'string';

  constructor(private route: ActivatedRoute, private router: Router) {
    const queryParams = this.route.snapshot.queryParamMap;

    const valid = queryParams.get('valid');
    const message = queryParams.get('message');

    if (valid !== null && message !== null) {
      if (valid === 'true') {
        this.isValid = true;
      } else {
        this.isValid = false;
        this.message = message;
      }
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
