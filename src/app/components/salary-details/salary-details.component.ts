import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵNgNoValidate } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-salary-details',
  standalone: true,
  imports:[FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './salary-details.component.html',
  styleUrl: './salary-details.component.scss'
})
export class SalaryDetailsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      salary: [0, [Validators.required, Validators.min(1)]], 
      pan: ['', Validators.required],
      aadhaar: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.router.navigate(['/pre-confirmation'])
    } else {
      console.log('Form is invalid');
    }
  }
}
