import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsDetailsGuard } from './products-details.guard';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
