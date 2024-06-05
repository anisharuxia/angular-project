import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomwComponent } from './features/homw/homw.component';
import { FooterComponent } from './shared/footer/footer.component';

import { CatalogComponent } from './features/catalog/catalog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { FormGroup, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';


@Component({
  selector: 'app-root',
  standalone: true,

  
 imports: [RouterOutlet, 
  HomwComponent, 
  FooterComponent, 
  CatalogComponent,
  AppRoutingModule,
  
  
  RouterLink,
  HttpClientModule,
  

]  ,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public cartitems:number=0;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartitems = res.length;
    }) 
  }
   
  menuValue:boolean=false;
  menu_icon:string='fa-solid fa-bars'

  openmenu(){
    this.menuValue=!this.menuValue;
  }

  title = 'last-project';
}
