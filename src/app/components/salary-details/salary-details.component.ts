import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
@Component({
  selector: 'app-salary-details',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.scss'
})
export class SalaryDetailsComponent {
  formData:{salary:string,pan:string,aadhaar:string}={
    salary:'',
    pan:'',
    aadhaar:''
  }
  constructor(private router:Router, private dataService:DataService) {

  }
  onNext(){
    this.dataService.setFormData(this.formData)
    this.router.navigate(['/pre-confirmation'])

  }
}
