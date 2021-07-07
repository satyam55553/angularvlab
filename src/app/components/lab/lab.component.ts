import { Component, OnInit } from '@angular/core';
import { signal } from 'src/app/signal';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  signalFromPopup: signal = new signal;
  constructor() { }

  ngOnInit(): void {
  }
  //getting signal data from popup
  getSignal(signal: signal) {
    console.log("From popup"+signal);

  }
  fwdSignalToGraph($event:any) {
    this.signalFromPopup = $event;
  }
}
