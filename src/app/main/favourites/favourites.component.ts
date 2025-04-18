import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NoteActionService } from '../services/note-action.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent implements OnInit {
  constructor(
    private noteService: NoteService,
    private dataService: DataService,
    private noteAction: NoteActionService
  ) {}

  ngOnInit(): void {
    this.fetchFavorites();

    this.dataService.refreshNeeded$.subscribe(() => {
      this.fetchFavorites();
    });
  }

  filteredFavorites: any = [];

  onSearch(query: string) {
    console.log('Search query:', query);
  }

  fetchFavorites() {
    this.noteService.getFavoriteNotes().subscribe({
      next: (res) => {
        this.filteredFavorites = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
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
}
