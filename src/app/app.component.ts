import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public barChartData1: ChartData<'line'>;
  public barChartOptions1: ChartConfiguration['options'];
  public barChartData2: ChartData<'bar'>;
  public barChartOptions2: ChartConfiguration['options'];

  constructor() {
    const data1 = [
      4800, 2200, 5950, 5000, 3800, 5900, 4000, 3600, 6600, 3100, 3300, 3350,
    ];
    const data2 = [
      9900, 5100, 3800, 1000, 800, 2400, 3400, 5700, 9800, 4400, 4100, 3400,
    ];
    const data3 = [1800, 3800, 7200, 6800, 2050, 0, 0, 0, 0, 0, 0, 0];
    const labels = [
      'JAN (1)',
      'FEB (2)',
      'MAR (3)',
      'APR (4)',
      'MAY (5)',
      'JUN (6)',
      'JUL (7)',
      'AUG (8)',
      'SEP (9)',
      'OCT (10)',
      'NOV (11)',
      'DEC (12)',
    ];
    const d1: number[] = [];
    data1.forEach((value, index) => {
      d1[index] = (d1.length > 0 ? d1[index - 1] : 0) + value;
    });
    const d2: number[] = [];
    data2.forEach((value, index) => {
      d2[index] = (d2.length > 0 ? d2[index - 1] : 0) + value;
    });
    const d3: number[] = [];
    data3.forEach((value, index) => {
      if (index < 7) {
        d3[index] = (d3.length > 0 ? d3[index - 1] : 0) + value;
      }
    });
    this.barChartData1 = {
      labels: labels,
      datasets: [
        {
          label: '2019 累計金額',
          data: d1,
          borderColor: '#6C77AC',
          backgroundColor: '#6C77AC',
          pointBackgroundColor: '#6C77AC',
        },
        {
          label: '2020 累計金額',
          data: d2,
          borderColor: '#50CD9F',
          backgroundColor: '#50CD9F',
          pointBackgroundColor: '#50CD9F',
        },
        {
          label: '2021 累計金額',
          data: d3,
          borderColor: '#FF0000',
          backgroundColor: '#FF0000',
          pointBackgroundColor: '#FF0000',
        },
      ],
    };
    this.barChartOptions1 = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '中東',
        },
        legend: {
          position: 'bottom',
          labels: { boxWidth: 30, boxHeight: 1 },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          offset: true,
        },
        y: {
          title: {
            display: true,
            text: 'Salse Amount (NTD)',
            color: 'rgba(100, 143, 195, 1)',
          },
          suggestedMin: 0,
          suggestedMax: 100000,
          beginAtZero: true,
          ticks: {
            count: 3,
            color: 'rgba(100, 143, 195, 1)',
            callback: (label, index, labels) => {
              return label.toLocaleString() + 'M';
            },
          },
        },
      },
    };

    this.barChartData2 = {
      labels: labels,
      datasets: [
        {
          label: '2019 接單總計金額',
          data: data1,
          borderColor: '#6C77AC',
          backgroundColor: '#6C77AC',
        },
        {
          label: '2020 接單總計金額',
          data: data2,
          borderColor: '#50CD9F',
          backgroundColor: '#50CD9F',
        },
        {
          label: '2021 接單總計金額',
          data: data3,
          borderColor: '#FF0000',
          backgroundColor: '#FF0000',
        },
      ],
    };
    this.barChartOptions2 = {
      responsive: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          position: 'bottom',
          labels: { boxWidth: 15 },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Salse Amount (NTD)',
            color: 'rgba(100, 143, 195, 1)',
          },
          suggestedMin: 0,
          suggestedMax: 10000,
          beginAtZero: true,
          ticks: {
            count: 6,
            color: 'rgba(100, 143, 195, 1)',
            callback: (label, index, labels) => {
              return label.toLocaleString() + 'M';
            },
          },
        },
      },
    };
  }

  ngOnInit() {}
}
