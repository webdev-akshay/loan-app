import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: { salary: number; pan: string; aadhaar: string } = {
    salary: 0,
    pan: '',
    aadhaar: '',
  };
  constructor() { }

  setFormData(data:{salary:number,pan:string,addhaar:string}):void{
    this.formData={...this.formData,...data}
  }
  getFormdata(): { salary: number, pan: string, aadhaar: string } {
   return this.formData
  }
}
