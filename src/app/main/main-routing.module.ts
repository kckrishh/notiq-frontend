import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from 'lucide-angular';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { NotesComponent } from './notes/notes.component';
import { mainGuard } from '../guards/main.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [mainGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { animation: 'DashboardPage' },
      },
      {
        path: 'notes',
        component: NotesComponent,
        data: { animation: 'NotesPage' },
      },
      {
        path: 'favorites',
        component: FavouritesComponent,
        data: { animation: 'FavouritesPage' },
      },
      {
        path: 'archives',
        component: ArchiveComponent,
        data: { animation: 'ArchivePage' },
      },
      {
        path: 'trash',
        component: TrashComponent,
        data: { animation: 'TrashPage' },
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        data: { animation: 'MainPage' },
      },
      {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        data: { animation: 'MainPage' },
      },
    ],
    data: { animation: 'MainPage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
