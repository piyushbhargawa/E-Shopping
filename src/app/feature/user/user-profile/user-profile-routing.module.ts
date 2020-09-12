import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { OrderComponent } from './order/order.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent,
  children:[
    {
      path: 'profile',
      component: ProfileViewComponent
    },
    {
      path: 'order',
      component: OrderComponent
    },
    {
      path: 'changePassword',
      component: ChangePasswordComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
