import { Component } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css',
})
export class TrashComponent {
  filteredTrashedNotes = [
    {
      id: 5,
      title: 'Quick Code Snippet',
      content: `<pre><code>console.log("Hello, Notiq!");</code></pre>`,
      favorite: false,
      archived: false,
      trashed: true,
      createdAt: new Date('2025-04-05T08:15:00'),
      updatedAt: null,
    },
  ];

  onSearch(query: string) {
    console.log('Search query:', query);
  }
}
