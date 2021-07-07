import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signal } from 'src/app/signal';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  amplitude: number=0;
  frequency: number=0;
  frequency_sensitivity: number=0;
  @Output() inputAdd: EventEmitter<signal> = new EventEmitter();

  title = 'angularpopup';
  showModal: boolean = false;
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  show() {
    this.showModal = true; // Show-Hide Modal Check

  }

  hide() {
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

  // onSubmit() {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //   if (this.submitted) {
  //     this.showModal = false;
  //   }
  // }

  onSubmitInput() {
    console.log("On Submit Input");
    const input_signal = {
      amplitude: this.amplitude,
      frequency: this.frequency,
      frequency_sensitivity: this.frequency_sensitivity,
    }
    this.submitted = true;
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   console.log("Invalid");
    //   return;
    // }
    // if (this.submitted) {
    //   console.log("Input emitted");
    //   this.inputAdd.emit(input_signal);
    //   this.showModal = false;
    // }
    this.inputAdd.emit(input_signal);
    this.showModal = false;
  }
}
