import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  private _message = new BehaviorSubject<string>('');
  private _type = new BehaviorSubject<'success' | 'error'>('success');
  private _show = new BehaviorSubject<boolean>(false);

  readonly message$ = this._message.asObservable();
  readonly type$ = this._type.asObservable();
  readonly show$ = this._show.asObservable();

  showMessage(message: string, type: 'success' | 'error' = 'success') {
    this._message.next(message);
    this._type.next(type);
    this._show.next(true);

    setTimeout(() => {
      this._show.next(false);
    }, 3000);
  }
}
