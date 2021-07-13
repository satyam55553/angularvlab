import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { signal } from 'src/app/signal';
// Import above components

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
})
export class GraphsComponent implements OnInit {
  // @Input() signalFromLab: any;
  
  Signal: signal;
  constructor() {
    this.Signal={
      amplitude:0,
      frequency:0,
      frequency_sensitivity:0,
    };
   }

  ngOnInit(): void {
    // if(typeof this.signalFromLab==='undefined'){
    //   console.log("Signal From lab = ",this.signalFromLab)
    //   this.signalFromLab = {
    //     //getting values from form fields
    //     amplitude: 1,
    //     frequency: 1,
    //     frequency_sensitivity: 1,
    //   };
    
    // }
      this.createGraphs(this.Signal);
  }

  createGraphs(signalFromLab:signal){
    this.Signal=signalFromLab;
    //This function generates data for our graph
    function generateData(value: string, i1: number, i2: number, step = 0.5) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
      console.log(xValues,"  ",yValues);
    }
    console.log("Inside graph onInit");
    //Input Signal Graph
    var xValues: any[] = [];
    var yValues: any[] = [];
    var Am =signalFromLab.amplitude//1;
    var fm =signalFromLab.frequency;//1 / 4;//frequency of i/p
    var phase = 0;//Math.PI/2
    var wm = 2 * Math.PI * fm;

    var eqn = Am + "*Math.cos(" + wm + "*x+phase)";

    generateData(eqn, 0, 10, 0.1);
    new Chart("ipChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Input Signal",
          fontSize: 16
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: true,
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                display: false
                // callback: function(label,index,labels){
                //   return parseInt(label.toString()).toFixed(5);
                // }
              }
            }
          ]
        }
      }
    });

    //Carrier signal
    var xValues: any[] = [];
    var yValues: any[] = [];
    var Ac = 1;
    var fc = 1;//frrquency of carrier
    var phasec = 0;//Math.PI/2
    var wc = 2 * Math.PI * fc;
    var eqnc = Ac + "*Math.cos(" + wc + "*x+phasec)";

    generateData(eqnc, 0, 10, 0.1);
    new Chart("carrierChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Carrier Signal",
          fontSize: 16
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: true,
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                display: false
                // callback: function(label,index,labels){
                //   return parseInt(label.toString()).toFixed(5);
                // }
              }
            }
          ]
        }
      }
    });

    //Output wave
    var xValues: any[] = [];
    var yValues: any[] = [];
    var Ao = Ac;
    var kf =signalFromLab.frequency_sensitivity;//0.2;
    var mf = (kf * Am) / fm;

    var eqno = Ao + "*Math.cos(" + wc + "*x+" + mf + "*Math.sin(" + wm + "*x))";
    // var eqno = "("+(Ac + "+" + Am + "*Math.cos(" + wm + "*x)") + ")*Math.cos(" + wc + "*x)";
    console.log(eqno);
    generateData(eqno, 0, 10, 0.1);
    new Chart("opChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 2,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Output Signal",
          fontSize: 16
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: true,//Make it true, to display the axis values
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                display: false,

                // callback: function(label,index,labels){
                //   return parseInt(label.toString()).toFixed(5);
                // }
              }
            }
          ]
        }
      }
    });
  }
}
