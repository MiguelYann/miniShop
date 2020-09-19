import { StarComponent } from './shared/stars/star.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
