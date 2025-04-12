import { Component, Input } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-alert-notification',
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.css',
})
export class AlertNotificationComponent {
  constructor(private messageService: MessageService) {
    this.messageService.message$.subscribe((msg) => (this.message = msg));
    this.messageService.type$.subscribe((t) => (this.type = t));
    this.messageService.show$.subscribe((s) => (this.show = s));
  }

  message: string = '';
  type: 'success' | 'error' = 'success';
  show: boolean = false;
}
