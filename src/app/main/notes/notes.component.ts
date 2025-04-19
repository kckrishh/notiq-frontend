import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NoteActionService } from '../services/note-action.service';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  ngOnInit(): void {
    this.loadNotes();

    this.data.refreshNeeded$.subscribe(() => {
      this.loadNotes();
    });
  }

  notes: any = [];

  constructor(
    private noteService: NoteService,
    private noteAction: NoteActionService,
    private message: MessageService,
    private data: DataService
  ) {}

  loadNotes() {
    this.noteService.getAllNotes().subscribe({
      next: (res) => {
        this.notes = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onToggleFavorite(note: any) {
    this.noteAction.handleFavorite(note);
  }

  onArchive(note: any) {
    this.noteAction.handleArchive(note);
  }

  onSearch(a: any) {
    console.log(a);
  }

  onTrash(note: any) {
    this.noteAction.handleTrash(note);
  }
}
