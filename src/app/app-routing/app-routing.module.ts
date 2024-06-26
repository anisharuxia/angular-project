
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from '../features/catalog/catalog.component';
import { ProductDetailComponent } from '../features/product-detail/product-detail.component';
import { SignUpComponent } from '../features/sign-up/sign-up.component';
import { CartPageComponent } from '../features/cart-page/cart-page.component';
import { ContactComponent } from '../features/contact/contact.component';
import { OrderPageComponent } from '../features/order-page/order-page.component';

const routes: Routes = [
  {path:'catalog', component: CatalogComponent },
  {path: 'view-details/:productid', component: ProductDetailComponent},
  {path: 'signup',component:SignUpComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'contact', component:ContactComponent},
  {path:'order-page', component:OrderPageComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {

  
 }



