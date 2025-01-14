import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preconfirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preconfirmation.component.html',
  styleUrl: './preconfirmation.component.scss'
})
export class PreconfirmationComponent implements OnInit{
  formData!: { salary: number; pan: string; aadhaar: string };
  constructor(private router:Router, private dataService:DataService){}
  goback(){
    this.router.navigate(['/salary-details'])
  }
  confirm(){
    this.router.navigate(['/document-upload'])
  }
  ngOnInit(): void {
    this.formData=this.dataService.getFormdata()
  }
}
