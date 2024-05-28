import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomwComponent } from './features/homw/homw.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { HeaderComponent } from './shared/header/header.component';

import { CatalogComponent } from './features/catalog/catalog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet,RouterLink, HomwComponent, FooterComponent, HttpClientModule]  ,
=======
  imports: [RouterOutlet, HomwComponent, FooterComponent, CatalogComponent,HeaderComponent]  ,
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'last-project';
}
