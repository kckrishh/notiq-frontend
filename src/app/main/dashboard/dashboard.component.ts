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
  noNotes: boolean = false;
  total: number = 0;
  favCount: number = 0;
  archiveCount: number = 0;
  trashCount: number = 0;
  grettings: string = '';

  fetchDashboardNotes() {
    this.noteService.getDashboardNotes().subscribe({
      next: (res) => {
        this.notes = res;
        console.log(res);
        if (this.notes.length === 0) {
          this.noNotes = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setGrettings() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.grettings = 'Good Morning!';
    } else if (hour < 18) {
      this.grettings = 'Good Afternoon!';
    } else {
      this.grettings = 'Good Evening!';
    }
  }

  fetchSummary() {
    this.noteService.getSummary().subscribe({
      next: (res: any) => {
        this.total = res.total;
        this.favCount = res.favorite;
        this.archiveCount = res.archived;
        this.trashCount = res.trashed;
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.fetchDashboardNotes();
    this.fetchSummary();
    this.setGrettings();

    this.dataService.refreshNeeded$.subscribe(() => {
      this.fetchDashboardNotes();
      this.fetchSummary();
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
