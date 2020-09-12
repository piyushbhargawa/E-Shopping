import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UserProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
