import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NoteActionService } from '../services/note-action.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
})
export class ArchiveComponent implements OnInit {
  filteredArchivedNotes: any = [];

  constructor(
    private noteService: NoteService,
    private noteAction: NoteActionService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.loadArchivedNotes();

    this.data.refreshNeeded$.subscribe(() => {
      this.loadArchivedNotes();
    });
  }

  onSearch(query: string) {
    console.log('Search query:', query);
  }

  loadArchivedNotes() {
    this.noteService.getArchivedNotes().subscribe({
      next: (res) => {
        this.filteredArchivedNotes = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleArchive(note: any) {
    this.noteAction.handleArchive(note);
  }

  handleTrash(note: any) {
    this.noteAction.handleTrash(note);
  }
}
