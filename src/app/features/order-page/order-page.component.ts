import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit{
  public totalamount:number=0;
  constructor(private api:ApiService, private router:Router){

  }
ngOnInit(): void {
  setTimeout(()=>{
    this.router.navigate(['/'])
  },4000);
  // totalamount from api
  this.totalamount=this.api.calculateprice();
}
}
