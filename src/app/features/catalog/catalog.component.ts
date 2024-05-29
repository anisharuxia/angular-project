
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from '../../app.component';
import { ApiService } from '../../shared/api.service';
import { product } from './productmodel';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, AppComponent, CommonModule,RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit  {
  data!:any|product[]
  constructor(private api:ApiService){}
  
  ngOnInit(): void {
   this.displayproduct();
  }

  displayproduct(){
    this.api.getproduct().subscribe(res=>{
          this.data = res;
          console.log(res)
    })
  }
}