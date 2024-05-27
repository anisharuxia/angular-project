import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from '../features/catalog/catalog.component';
import { ProductDetailComponent } from '../features/product-detail/product-detail.component';

const routes: Routes = [
  {path:'catalog', component: CatalogComponent },
  {path: 'product-detail', component: ProductDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
