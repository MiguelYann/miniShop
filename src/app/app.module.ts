import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
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
