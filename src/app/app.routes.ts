import { Routes } from '@angular/router';
import { HomwComponent } from './features/homw/homw.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { CartPageComponent } from './features/cart-page/cart-page.component';

import { ContactComponent } from './features/contact/contact.component';
import { OrderPageComponent } from './features/order-page/order-page.component';

export const routes: Routes = [
    
    {
        path: '',
        component:HomwComponent
        

    },
    {
        path: 'Catalog',
        component:CatalogComponent
    },
    {path: 'view-details/:productid', 
    
    component:ProductDetailComponent},
    {path: 'signup',
    component:SignUpComponent},
    {path: 'cart-page', component:CartPageComponent},
    {path:'contact', component: ContactComponent},
    {path:'order-page', component:OrderPageComponent}
];
