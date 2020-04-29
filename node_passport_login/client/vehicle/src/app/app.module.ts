import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [

  { path: '',      component: DashboardComponent },
 { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent
   
    
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
