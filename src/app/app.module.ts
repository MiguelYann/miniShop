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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'products', component: ProductListComponent
      },

      {
        path: 'products/:id', component: ProductDetailsComponent
      },

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
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailsComponent

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
