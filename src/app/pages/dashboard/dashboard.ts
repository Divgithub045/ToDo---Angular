import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements AfterViewInit {
  @ViewChild('pieChart') pieChartRef!: ElementRef<HTMLCanvasElement>;
  
  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = this.pieChartRef.nativeElement.getContext('2d');
    
    new Chart(ctx!, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Pending', 'In Progress'],
        datasets: [{
          data: [2, 3, 0],
          backgroundColor: ['#2dd4bf', '#facc15', '#4f8cff'],
          borderColor: '#161a22',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#e6e8ee',
              padding: 15,
              font: { size: 12, weight: 'bold' }
            }
          }
        }
      }
    });
  }
}