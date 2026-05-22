import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Dashboard } from './pages/dashboard/dashboard';
import { Settings } from './pages/settings/settings';
import { Support } from './pages/support/support';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Reports } from './pages/reports/reports';

export const routes: Routes = [
  { path: 'auth', component: Auth },
  { path: 'dashboard', component: Dashboard },
  { path: 'reports', component: Reports },
  { path: 'settings', component: Settings },
  { path: 'support', component: Support },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }