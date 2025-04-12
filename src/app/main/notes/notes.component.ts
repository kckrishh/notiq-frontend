import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  notes = [
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
      id: 2,
      title: 'Grocery List',
      content:
        '<ul><li>Milk</li><li>Eggs</li><li>Bread</li><li>Spinach</li></ul>',
      favorite: false,
      archived: false,
      trashed: false,
      createdAt: new Date('2025-04-02T14:30:00'),
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

  onToggleFavorite(id: number) {
    console.log(id);
  }

  onEditNote(id: number) {
    console.log(id);
  }

  onSearch(a: any) {
    console.log(a);
  }
}
