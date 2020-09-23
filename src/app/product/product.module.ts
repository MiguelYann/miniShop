import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsDetailsGuard } from './products-details.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    RouterModule.forChild([
    
    {
      path: 'products', component: ProductListComponent
    },

    {
      path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductsDetailsGuard]
    },
  ]),
    SharedModule
  ]
})
export class ProductModule { }
