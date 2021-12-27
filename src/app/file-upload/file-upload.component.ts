import { Statment } from '../models/statment';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

loading: boolean = false; 
file!: File; 
statment:Statment = new Statment()
error:boolean = false

constructor(private fileUploadService: FileUploadService, private router: Router) { }

ngOnInit(): void {
}

onChange(event:any) {
    this.file = event.target.files[0];
}

onUpload() {
    if (this.file.name.split(".").pop() == "csv" || this.file.name.split(".").pop() == "pdf") {
      this.error = false
      this.fileUploadService.upload(this.file).subscribe(
        (data) => {
            this.statment = data
            console.log(data)
            this.loading = false;
            localStorage.setItem('response', JSON.stringify(this.statment));
            this.router.navigate(['my-profile']);
        }
      );
    }
    else{
      this.error = true
      console.log(this.file.name.split(".").pop())
    }
  }
}