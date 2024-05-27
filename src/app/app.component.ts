import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomwComponent } from './features/homw/homw.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CatalogComponent } from './features/catalog/catalog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomwComponent, FooterComponent,HeaderComponent,CatalogComponent]  ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'last-project';
}
