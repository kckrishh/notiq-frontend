import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { DataService } from '../services/data.service';
import { NoteActionService } from '../services/note-action.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css',
})
export class TrashComponent implements OnInit {
  filteredTrashedNotes: any = [];

  constructor(
    private noteService: NoteService,
    private data: DataService,
    private noteAction: NoteActionService
  ) {}

  ngOnInit(): void {
    this.fetchTrashedNotes();

    this.data.refreshNeeded$.subscribe(() => {
      this.fetchTrashedNotes();
    });
  }

  fetchTrashedNotes() {
    this.noteService.getTrashNotes().subscribe({
      next: (res) => {
        this.filteredTrashedNotes = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleTrash(note: any) {
    this.noteAction.handleTrash(note);
  }

  onSearch(query: string) {
    console.log('Search query:', query);
  }
}
