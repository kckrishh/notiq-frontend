import { Component } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
})
export class ArchiveComponent {
  filteredArchivedNotes = [
    {
      id: 4,
      title: 'Books to Read',
      content:
        '<p><strong>Deep Work</strong> by Cal Newport, <em>Atomic Habits</em> by James Clear</p>',
      favorite: false,
      archived: true,
      trashed: false,
      createdAt: new Date('2025-04-04T17:20:00'),
      updatedAt: null,
    },
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
