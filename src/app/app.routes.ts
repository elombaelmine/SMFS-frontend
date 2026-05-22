import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Settings } from './pages/settings/settings';
import { Support } from './pages/support/support';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: 'auth', component: Auth },
  { path: 'settings', component: Settings },
  { path: 'support', component: Support },
  { path: 'dashboard', component: Dashboard},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }