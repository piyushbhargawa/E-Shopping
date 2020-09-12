import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../feature/admin/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: DashboardComponent
  },
  { path: 'admin', loadChildren: () => import('src/app/feature/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
