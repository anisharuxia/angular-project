import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< Updated upstream
import { provideHttpClient } from '@angular/common/http'
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
=======

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
>>>>>>> Stashed changes



NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
