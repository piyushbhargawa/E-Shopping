import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashBoardComponent } from './core/dash-board/dash-board.component';
import {CoreComponent} from './core/core.component';
import {DashBoardComponent} from './core/dash-board/dash-board.component'
import {DashboardComponent} from './feature/admin/dashboard/dashboard.component'
import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { AuthGuard } from './shared/auth.guard';
import { ProductPageComponent } from './feature/user/product-page/product-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: DashBoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productPage',
    component: ProductPageComponent
  },
  {
    path: '',
    component: DashBoardComponent,
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  // {
  //     path: '',
  //     component: CoreComponent
  // },
  {
    path: '',
    // path: '',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: 'admin', loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', initialNavigation: 'enabled' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
