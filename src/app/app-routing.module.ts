import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
  exports: [ RouterModule
  ]
})
export class AppRoutingModule { }
