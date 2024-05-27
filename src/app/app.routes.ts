import { Routes } from '@angular/router';
import { HomwComponent } from './features/homw/homw.component';
import { CatalogComponent } from './features/catalog/catalog.component';

export const routes: Routes = [
    
    {
        path: '',
        component:HomwComponent
        

    },
    {
        path: 'Catalog',
        component:CatalogComponent
    }
];
