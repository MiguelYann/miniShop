import { StarComponent } from './shared/stars/star.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { ProductsDetailsGuard } from './products-details.guard';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     
      {
        path: 'home', component: WelcomeComponent
      },

      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },

      {
        path: '**', component: WelcomeComponent
      },

      

    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
