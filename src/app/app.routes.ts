import { Routes } from '@angular/router';
import { HomwComponent } from './features/homw/homw.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';

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
    
    component:ProductDetailComponent}

];
