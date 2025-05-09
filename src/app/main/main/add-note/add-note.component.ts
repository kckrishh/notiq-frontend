import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from '../../services/data.service';
import { NoteActionService } from '../../services/note-action.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class AddNoteComponent implements OnInit {
  note: any = {
    title: '',
    content: '',
  };

  @Output() pannelOpen = new EventEmitter<void>();
  @Output() pannelClose = new EventEmitter<void>();
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  isPanelOpen = false;
  iseditNoteMode = false;
  editNodeId: any = null;

  constructor(
    private noteService: NoteService,
    private dataService: DataService,
    private noteAction: NoteActionService
  ) {}

  ngOnInit() {
    this.noteAction.editNote$.subscribe((note) => {
      if (note) {
        this.iseditNoteMode = true;
        this.editNodeId = note.id;
        this.note = {
          title: note.title,
          content: note.content,
        };
        this.openPanel();
      }
    });
  }

  openPanel() {
    this.isPanelOpen = true;
    if (!this.iseditNoteMode) {
      this.resetForm();
    }
    this.pannelOpen.emit();
  }

  closePanel() {
    this.isPanelOpen = false;
    this.pannelClose.emit();
  }

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      [{ color: [] }, { background: [] }], // dropdown with defaults
      [{ header: 1 }, { header: 2 }], // custom heading sizes
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'], // remove formatting
    ],
  };

  resetForm() {
    this.note = { title: '', content: '' };
    this.errorMessage = '';
    this.successMessage = '';
    this.loading = false;
  }

  submitNote() {
    const plainText = this.note.content.replace(/<[^>]*>/g, '').trim();
    if (!this.note.title || !plainText) {
      this.errorMessage = 'Please fill out all fields.';
      return;
    }

    this.loading = true;

    if (this.iseditNoteMode && this.editNodeId) {
      this.noteService.editNote(this.editNodeId, this.note).subscribe({
        next: (res) => {
          this.successMessage = res;
          this.loading = false;
          this.dataService.triggerRefresh();
          this.resetForm();
          this.closePanel();
        },
        error: (err) => {
          this.errorMessage =
            err.error?.message || 'An error occurred. Please try again.';
          this.loading = false;
        },
      });
    } else {
      this.noteService.createNote(this.note).subscribe({
        next: (res) => {
          this.successMessage = res;
          this.loading = false;
          this.dataService.triggerRefresh();
          this.resetForm();
          this.closePanel();
        },
        error: (err) => {
          this.errorMessage =
            err.error?.message || 'An error occurred. Please try again.';
          this.loading = false;
        },
      });
    }
  }
}
