import { Component, OnInit, inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HtmlTagDefinition } from '@angular/compiler';


@Component({
  selector: 'app-homw',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.css'
})
export class HomwComponent {
  toplist =[] 
  generateproduct(){
    
  }
 
 }

