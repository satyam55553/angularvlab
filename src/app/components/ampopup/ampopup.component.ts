import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signal } from 'src/app/signal';
import { AmgraphsComponent } from '../amgraphs/amgraphs.component';
import { GraphsComponent } from '../graphs/graphs.component';

@Component({
  selector: 'app-ampopup',
  templateUrl: './ampopup.component.html',
  styleUrls: ['./ampopup.component.css']
})
export class AmpopupComponent implements OnInit {
// @Output() popuptolab: EventEmitter<signal> = new EventEmitter();
input_signal!: signal;

graphCompObj=new GraphsComponent();
amgraphCompObj=new AmgraphsComponent();

title = 'angularpopup';
showModal: boolean = false;
registerForm!: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder) {
 }

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
    // Frequency_Sensitivity: ['', [Validators.required, Validators.minLength(1)]],
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
  this.input_signal = {
    //getting values from form fields
    amplitude: this.registerForm.value.Amplitude,
    frequency: this.registerForm.value.Frequency,
    frequency_sensitivity: 0,
  };
  console.log(this.input_signal);
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    console.log("Invalid Form");
    return;
  }
  if (this.submitted) {
    // this.popuptolab.emit(this.input_signal);
    // console.log("Input emitted is",this.input_signal);
    this.showModal = false;
    // this.graphCompObj.createGraphs(this.input_signal);
    this.amgraphCompObj.createGraphs(this.input_signal);
  }
}
}
