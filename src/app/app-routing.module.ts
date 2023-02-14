import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from './core/guards/validate-session.guard';

const routes: Routes = [{ path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

{ path: 'dashboard',
canActivate: [ValidateSessionGuard],
loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
