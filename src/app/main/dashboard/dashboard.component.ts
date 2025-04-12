import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(
    private noteService: NoteService,
    private dataService: DataService,
    private messageService: MessageService
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

  handleFavorite(id: number) {
    this.noteService.handleFavorite(id).subscribe({
      next: () => {
        const note = this.notes.find((n: any) => n.id == id);
        if (note.isFavorite) {
          this.messageService.showMessage(
            'Note removed from favorite',
            'success'
          );
          note.isFavorite = !note.isFavorite;
        } else {
          this.messageService.showMessage('Note added to favorite', 'success');
          note.isFavorite = !note.isFavorite;
        }
      },
      error: (err) => {
        this.messageService.showMessage(
          'Sorry could not add to favorite',
          'error'
        );
      },
    });
  }

  handleArchive(id: number) {
    this.noteService.handleArchive(id).subscribe({
      next: () => {
        const note = this.notes.find((n: any) => n.id == id);
        note.isArchive = !note.isArchive;
        this.fetchDashboardNotes();
        this.messageService.showMessage('Note Archived', 'success');
      },
      error: (err) => {
        this.messageService.showMessage('Failed to archive the note', 'error');
      },
    });
  }

  handleSubmit() {
    this.fetchDashboardNotes();
  }
}
