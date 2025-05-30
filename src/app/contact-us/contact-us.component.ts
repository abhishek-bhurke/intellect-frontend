import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [AppService],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactUsForm!: FormGroup;
  file: any[] = [];
  constructor(private fb: FormBuilder, private appService: AppService, private toastr: ToastrService, private loaderService: LoaderService) { }
  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.contactUsForm = this.fb.group({
      'whoYouAre': ['Hiring Manager / Client', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'emailId': ['', Validators.required],
      'mobileNumber': [''],
      'message': ['']
    })
  }
  inputFile(event: any) {
    if (event.target.files[0].type == 'application/pdf') {
      this.file = event.target.files;
    }
    else {
      this.toastr.error('Kindly upload PDF file only.')
    }
  }
  sendMessage() {
    if (this.contactUsForm.invalid) {
      Object.values(this.contactUsForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    else {
      this.loaderService.show();
      let formData = new FormData();
      formData.append('whoYouAre', this.contactUsForm.controls['whoYouAre'].value)
      formData.append('name', this.contactUsForm.controls['firstName'].value + ' ' + this.contactUsForm.controls['lastName'].value)
      formData.append('email', this.contactUsForm.controls['emailId'].value)
      formData.append('mobileNumber', this.contactUsForm.controls['mobileNumber'].value ? this.contactUsForm.controls['mobileNumber'].value : '')
      formData.append('message', this.contactUsForm.controls['message'].value)

      if (this.file.length) {
        formData.append('file', this.file[0], this.file[0].name)
      }
      this.appService.sendData(formData).subscribe(res => {
        this.loaderService.hide();
        this.toastr.success(res.message);
        this.contactUsForm.reset();
        this.contactUsForm.controls['whoYouAre'].setValue('Hiring Manager / Client');
        this.file = [];
      }, err => {
        this.loaderService.hide();
        this.toastr.error(err.error)
      })
    }
  }
  goToLinkedin() {
    window.open('https://www.linkedin.com/company/intellect-isolutions', '_blank')
  }
}
