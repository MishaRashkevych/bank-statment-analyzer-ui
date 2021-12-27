import { Component, OnInit } from '@angular/core';
import { ExtractDataService } from 'src/app/services/extract-data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  particulars : any = Object.keys(this.dataService.getTransactionParticulars())
  amount: any = Object.values(this.dataService.getTransactionParticulars())
  commonPurticulars: any = Object.keys(this.dataService.getWithdrawalSumsOnTypes())
  withdrawalSums: any = Object.values(this.dataService.getWithdrawalSumsOnTypes())

  constructor(private dataService:ExtractDataService) { }

  public ultimateColors = ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)']

  public data = [{
    values: this.amount,
    labels: this.particulars,
    type: 'pie'
  }]

  public data2 = [{
    values: this.withdrawalSums,
    labels: this.commonPurticulars,
    type: 'pie',
    marker: {
      colors: this.ultimateColors
    },
    hole: .4,
  }]
  
  public layout = {
    height: 500,
    width: 600,
    title: 'Total operations'
  }

  public layout2 = {
    height: 500,
    width: 500,
    title: 'Total withdrawal sums'
  };

  ngOnInit(): void {
  }
  

}
