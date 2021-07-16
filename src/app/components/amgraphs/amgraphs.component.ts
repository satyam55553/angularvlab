import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { signal } from 'src/app/signal';

@Component({
  selector: 'app-amgraphs',
  templateUrl: './amgraphs.component.html',
  styleUrls: ['./amgraphs.component.css']
})
export class AmgraphsComponent implements OnInit {
  Signal: signal = new signal;
  constructor() {
    this.Signal={
      amplitude:0,
      frequency:0,
      frequency_sensitivity:0,
    };
   }

  ngOnInit(): void {
    
  }

  createGraphs(signalFromLab:signal){
    function generateData(value: string, i1: number, i2: number, step = 0.5) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
    }

    //Input Signal
    var xValues: any[] = [];
    var yValues: any[] = [];
    var Am = signalFromLab.amplitude;//5;
    var fm = signalFromLab.frequency;//1 / 4;//frequency of i/p
    var phase = 0;//Math.PI/2
    var wm = 2 * Math.PI * fm;

    var eqn = Am + "*Math.sin(" + wm + "*x+phase)";

    generateData(eqn, 0, 10, 0.1);
    new Chart("ipChartAm", {
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
        scales:{
          yAxes:[
            {
              ticks:{
                display:false,
              }
            }
          ],
          xAxes:[
            {
              ticks:{
                display:false
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
        var Ac = 5;
        var fc = 1;//frrquency of carrier
        var phasec = 0;//Math.PI/2
        var wc = 2 * Math.PI * fc;
        var eqnc = Ac + "*Math.sin(" + wc + "*x+phasec)";
    
        generateData(eqnc, 0, 10, 0.1);
        new Chart("carrierChartAm", {
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
            scales:{
              yAxes:[
                {
                  ticks:{
                    display:false,
                  }
                }
              ],
              xAxes:[
                {
                  ticks:{
                    display:false
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
    var Ac = 5;
    var Am = 5;
    //var Ao = Ac + eqnn;
    //var kf = 0.2;
    

    var eqno = "("+(Ac+ "+" +Am + "*Math.sin(" + wm + "*x)")+")*Math.sin(" + wc + "*x)" ;
        
    //
    //var eqno = Ao + "*Math.cos(" + wc + "*x+" + mf + "*Math.sin(" + wm + "*x))";

    generateData(eqno, 0, 10, 0.1);
    new Chart("opChartAm", {
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
        scales:{
          yAxes:[
            {
              ticks:{
                display:false,//Make it true, to display the axis values
              }
            }
          ],
          xAxes:[
            {
              ticks:{
                display:false,
                
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

  // createGraphs(signalFromLab:signal){
  //   this.Signal=signalFromLab;
  //   //This function generates data for our graph
  //   function generateData(value: string, i1: number, i2: number, step = 0.01) {
  //     for (let x = i1; x <= i2; x += step) {
  //       yValues.push(eval(value));
  //       xValues.push(x);
  //     }
  //   }
  //   console.log("Inside graph onInit");
  //   //Input Signal Graph
  //   var xValues: any[] = [];
  //   var yValues: any[] = [];
  //   var Am =signalFromLab.amplitude//1;
  //   var fm =signalFromLab.frequency;//1 / 4;//frequency of i/p
  //   var phase = 0;//Math.PI/2
  //   var wm = 2 * Math.PI * fm;

  //   var eqn = Am + "*Math.cos(" + wm + "*x+phase)";

  //   generateData(eqn, 0, 10, 0.01);
  //   new Chart("ipChartAm", {
  //     type: "line",
  //     data: {
  //       labels: xValues,
  //       datasets: [{
  //         fill: false,
  //         pointRadius: 2,
  //         borderColor: "rgba(0,0,255,0.5)",
  //         data: yValues
  //       }]
  //     },
  //     options: {
  //       legend: { display: false },
  //       title: {
  //         display: true,
  //         text: "Input Signal",
  //         fontSize: 16
  //       },
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               display: true,
  //             }
  //           }
  //         ],
  //         xAxes: [
  //           {
  //             ticks: {
  //               display: false
  //               // callback: function(label,index,labels){
  //               //   return parseInt(label.toString()).toFixed(5);
  //               // }
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });

  //   //Carrier signal
  //   var xValues: any[] = [];
  //   var yValues: any[] = [];
  //   var Ac = 1;
  //   var fc = 1;//frrquency of carrier
  //   var phasec = 0;//Math.PI/2
  //   var wc = 2 * Math.PI * fc;
  //   var eqnc = Ac + "*Math.cos(" + wc + "*x+phasec)";

  //   generateData(eqnc, 0, 10, 0.01);
  //   new Chart("carrierChartAm", {
  //     type: "line",
  //     data: {
  //       labels: xValues,
  //       datasets: [{
  //         fill: false,
  //         pointRadius: 2,
  //         borderColor: "rgba(0,0,255,0.5)",
  //         data: yValues
  //       }]
  //     },
  //     options: {
  //       legend: { display: false },
  //       title: {
  //         display: true,
  //         text: "Carrier Signal",
  //         fontSize: 16
  //       },
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               display: true,
  //             }
  //           }
  //         ],
  //         xAxes: [
  //           {
  //             ticks: {
  //               display: false
  //               // callback: function(label,index,labels){
  //               //   return parseInt(label.toString()).toFixed(5);
  //               // }
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });

  //   //Output wave
  //   var xValues: any[] = [];
  //   var yValues: any[] = [];
  //   var Ao = Ac;

  //   // var eqno = "("+(Ac + "+" + Am + "*Math.cos(" + wm + "*x)") + ")*Math.cos(" + wc + "*x)";
  //   var eqno = Ac+"*(1+"+(Am/Ac)+"*Math.cos(" + wm + "*x))*Math.cos(" + wc + "*x)";
  //   console.log(eqno);
  //   generateData(eqno, 0, 10, 0.01);
  //   new Chart("opChartAm", {
  //     type: "line",
  //     data: {
  //       labels: xValues,
  //       datasets: [{
  //         fill: false,
  //         pointRadius: 2,
  //         borderColor: "rgba(0,0,255,0.5)",
  //         data: yValues
  //       }]
  //     },
  //     options: {
  //       legend: { display: false },
  //       title: {
  //         display: true,
  //         text: "Output Signal",
  //         fontSize: 16
  //       },
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               display: true,//Make it true, to display the axis values
  //             }
  //           }
  //         ],
  //         xAxes: [
  //           {
  //             ticks: {
  //               display: false,

  //               // callback: function(label,index,labels){
  //               //   return parseInt(label.toString()).toFixed(5);
  //               // }
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });
  // }
}
