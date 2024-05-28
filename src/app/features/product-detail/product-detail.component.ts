import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink ,RouterOutlet,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  constructor(private api:ApiService, private Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid=this.Activatedroute.snapshot.paramMap.get('productid')
    console.log('product id is ', productid)
  }

  
  
}
