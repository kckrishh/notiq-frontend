import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainGuard } from './guards/main.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [mainGuard],
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
