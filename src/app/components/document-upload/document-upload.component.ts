import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss'
})
export class DocumentUploadComponent {
  uploadedFile: File | null = null;

  onFileSelect(event: any) {
    this.uploadedFile = event.target.files[0];
  }

  onScan() {
    alert('Scanner functionality is not implemented yet.');
  }


}
