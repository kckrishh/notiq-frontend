import { Injectable } from '@angular/core';
import { NoteService } from './note.service';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteActionService {
  constructor(
    private note: NoteService,
    private message: MessageService,
    private data: DataService
  ) {}

  handleFavorite(note: any) {
    this.note.handleFavorite(note.id).subscribe({
      next: (res) => {
        if (note.isFavorite) {
          this.message.showMessage('Note removed from favorite', 'success');
          this.data.triggerRefresh();
        } else {
          this.message.showMessage('Note added to favorite', 'success');
          this.data.triggerRefresh();
        }
        note.isFavorite = !note.isFavorite;
      },
      error: (err) => {
        this.message.showMessage('Sorry could not add to favorite', 'error');
      },
    });
  }

  handleArchive(note: any) {
    this.note.handleArchive(note.id).subscribe({
      next: (res) => {
        this.message.showMessage('Note archived', 'success');
        note.isArchived = !note.isArchived;
        this.data.triggerRefresh();
      },
      error: (err) => {
        this.message.showMessage('Sorry could not archive', 'error');
      },
    });
  }

  handleTrash(note: any) {
    this.note.handleTrash(note.id).subscribe({
      next: (res) => {
        this.message.showMessage('Note moved to trash', 'success');
        note.isTrashed = !note.isTrashed;
        this.data.triggerRefresh();
      },
      error: (err) => {
        this.message.showMessage('Sorry could not move to trash', 'error');
      },
    });
  }

  private _editNote = new BehaviorSubject<any>(null);

  readonly editNote$ = this._editNote.asObservable();

  triggerEdit(note: any) {
    this._editNote.next(note);
  }
}
