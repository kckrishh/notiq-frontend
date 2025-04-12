import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Archive,
  FileText,
  Heart,
  Home,
  LucideAngularModule,
  Menu,
  Search,
  Trash,
  X,
  Plus,
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { NoteCardComponent } from './shared/note-card/note-card.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FilterButtonComponent } from './shared/filter-button/filter-button.component';
import { AddNoteComponent } from './main/add-note/add-note.component';
import { QuillModule } from 'ngx-quill';
import { AlertNotificationComponent } from './shared/alert-notification/alert-notification.component';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    DashboardComponent,
    NotesComponent,
    FavouritesComponent,
    ArchiveComponent,
    TrashComponent,
    NoteCardComponent,
    SearchBarComponent,
    FilterButtonComponent,
    AddNoteComponent,
    AlertNotificationComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    QuillModule.forRoot(),

    LucideAngularModule.pick({
      Home,
      FileText,
      Heart,
      Archive,
      Trash,
      Menu,
      X,
      Search,
      Plus,
    }),
    FormsModule,
  ],
})
export class MainModule {}
