import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  @Input() note: any;

  @Output() toggleFavorite = new EventEmitter<void>();
  @Output() toggleArchive = new EventEmitter<void>();

  onToggleFavourite() {
    this.toggleFavorite.emit();
  }
  onToggleArchive() {
    this.toggleArchive.emit();
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
