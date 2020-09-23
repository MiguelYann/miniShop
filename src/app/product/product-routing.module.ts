import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../products/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsDetailsGuard } from './products-details.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([

      {
        path: 'products', component: ProductListComponent
      },

      {
        path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductsDetailsGuard]
      },
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
