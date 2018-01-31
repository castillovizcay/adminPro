import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: []
})
export class ChartsComponent implements OnInit {

  @Input('labels') public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') public doughnutChartData: number[] = [350, 450, 100];
  @Input('type') public doughnutChartType: string = 'doughnut';
  @Input ('leyenda') leyenda: string = '';

  constructor() { }

  ngOnInit() {
  }

}
