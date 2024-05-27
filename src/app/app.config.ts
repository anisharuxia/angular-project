import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomwComponent } from './features/homw/homw.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

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
