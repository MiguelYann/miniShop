import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    WelcomeComponent,

  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
