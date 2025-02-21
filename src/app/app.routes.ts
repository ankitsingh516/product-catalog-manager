import { Routes } from '@angular/router';
import { ProductListComponent } from './modules/product/product-list/product-list.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: '**', redirectTo: 'products' }, // Redirect to Product Catalog page by default
  ];
