import { Component, OnInit, ViewChild } from '@angular/core';
import { signal } from 'src/app/signal';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  constructor() { }

  input_signal_fromPopup!: signal;

  ngOnInit(): void {
    // this.input_signal_fromPopup = {
    //   amplitude: 0,
    //   frequency: 0,
    //   frequency_sensitivity: 0,
    // };
  }

  //getting signal data from popup
  getSignalFromPopup(signal: signal) {
    this.input_signal_fromPopup = signal;
    console.log("Input Signal From popup in lab is " , this.input_signal_fromPopup);
  }
}
