import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteActionService } from '../../services/note-action.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  @Input() note: any;
  @Input() context: 'notes' | 'dashboard' | 'favorites' | 'archives' | 'trash' =
    'dashboard';

  constructor(private noteAction: NoteActionService) {}

  @Output() toggleFavorite = new EventEmitter<void>();
  @Output() toggleArchive = new EventEmitter<void>();
  @Output() toggleTrash = new EventEmitter<void>();

  onEditNote(note: any) {
    this.noteAction.triggerEdit(note);
  }

  onToggleFavourite() {
    this.toggleFavorite.emit();
  }
  onToggleArchive() {
    this.toggleArchive.emit();
  }

  onToggleTrash() {
    this.toggleTrash.emit();
  }

  getExcerpt(content: string): string {
    const plain = content.replace(/<[^>]*>/g, '');
    return plain.length > 60 ? plain.substring(0, 60) + '...' : plain;
  }

  getWordCount(content: string): number {
    const plain = content.replace(/<[^>]*>/g, '');
    return plain.trim().split(/\s+/).length;
  }
}
