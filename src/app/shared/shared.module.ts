import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './stars/star.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StarComponent,
    ConvertToSpacePipe,
    FormsModule,
    
  ]
})
export class SharedModule { }
