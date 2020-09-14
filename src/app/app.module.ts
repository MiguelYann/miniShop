import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
