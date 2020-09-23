import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { StarComponent } from '../shared/stars/star.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductsDetailsGuard } from '../products-details.guard';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    
    {
      path: 'products', component: ProductListComponent
    },

    {
      path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductsDetailsGuard]
    },
  ])
  ]
})
export class ProductModule { }
