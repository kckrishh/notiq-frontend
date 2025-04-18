import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';
import { NoteActionService } from '../services/note-action.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(
    private noteService: NoteService,
    private dataService: DataService,
    private noteAction: NoteActionService
  ) {}

  notes: any = [];

  fetchDashboardNotes() {
    this.noteService.getDashboardNotes().subscribe({
      next: (res) => {
        this.notes = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.fetchDashboardNotes();

    this.dataService.refreshNeeded$.subscribe(() => {
      this.fetchDashboardNotes();
    });
  }

  handleFavorite(note: any) {
    this.noteAction.handleFavorite(note);
  }

  handleArchive(note: any) {
    this.noteAction.handleArchive(note);
  }

  handleTrash(note: any) {
    this.noteAction.handleTrash(note);
  }

  handleSubmit() {
    this.fetchDashboardNotes();
  }

  openNewNotePanel() {
    const btn = document.querySelector('app-add-note button');
    if (btn) (btn as HTMLButtonElement).click();
  }
}
