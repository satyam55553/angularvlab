import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  title = 'angularpopup';
  showModal: boolean = false;
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }

  hide()
  {
    this.showModal = false;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Amplitude: ['', [Validators.required, Validators.minLength(1)]],
      Frequency: ['', [Validators.required, Validators.minLength(1)]],
      Frequency_Sensitivity: ['', [Validators.required, Validators.minLength(1)]],
      // mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
  });
  }

  // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  if(this.submitted)
  {
    this.showModal = false;
  }
 
}

}
