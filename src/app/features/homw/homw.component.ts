<<<<<<< Updated upstream
import { Component, OnInit, inject } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/api.service';
import { product } from '../catalog/productmodel';
import { FooterComponent } from '../../shared/footer/footer.component';



=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-homw',
  standalone: true,
<<<<<<< Updated upstream
  imports: [CommonModule,FooterComponent ],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.css'
})
export class HomwComponent   {
  
 }
=======
  imports: [],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.css'
})
export class HomwComponent  {
>>>>>>> Stashed changes

}
