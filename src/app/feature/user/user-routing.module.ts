import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from '../../shared/auth.guard';

import { UserComponent } from "./user.component";
import { ParticularProductComponent } from './particular-product/particular-product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "",
  component: UserComponent,
},
  { path: "particularProduct", component: ParticularProductComponent },
  { path: "cart", component: CartComponent,
  canActivate: [AuthGuard]  },
  {
    path: "userProfile",
    loadChildren: () =>
      import("./user-profile/user-profile.module").then(
        (m) => m.UserProfileModule
      ),
  },
  { path: 'checkoutPage', loadChildren: () => import('./checkout-page/checkout-page.module').then(m => m.CheckoutPageModule) ,
  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule],
})
export class UserRoutingModule {}
