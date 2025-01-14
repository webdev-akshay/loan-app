import { Routes } from '@angular/router';
import { SalaryDetailsComponent } from './components/salary-details/salary-details.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { PreconfirmationComponent } from './components/preconfirmation/preconfirmation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'salary-details', pathMatch: 'full' },
  { path: 'salary-details', component: SalaryDetailsComponent },
  { path: 'pre-confirmation', component: PreconfirmationComponent },
  { path: 'document-upload', component: DocumentUploadComponent },
];
