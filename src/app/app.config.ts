import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomwComponent } from './features/homw/homw.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
