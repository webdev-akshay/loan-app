import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: { salary: string; pan: string; aadhaar: string } = {
    salary: '',
    pan: '',
    aadhaar: '',
  };
  constructor() { }

  setFormData(data:any){
    this.formData={...this.formData,...data}
  }
  getFormdata(){
   return this.formData
  }
}
