import { Component } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  filteredFavorites = [
    {
      id: 1,
      title: 'Meeting Notes',
      content:
        '<p>Discuss project timeline, budget constraints, and deliverables.</p>',
      favorite: true,
      archived: false,
      trashed: false,
      createdAt: new Date('2025-04-01T09:00:00'),
      updatedAt: null,
    },
    {
      id: 3,
      title: 'UI Design Ideas',
      content: '<p>Use soft shadows, rounded cards, and minimalist icons.</p>',
      favorite: true,
      archived: false,
      trashed: false,
      createdAt: new Date('2025-04-03T11:45:00'),
      updatedAt: null,
    },
  ];

  onSearch(query: string) {
    console.log('Search query:', query);
  }
}
