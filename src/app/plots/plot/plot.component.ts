import { Component, OnInit } from '@angular/core';
import { ExtractDataService } from 'src/app/services/extract-data.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  constructor(private dataService: ExtractDataService) { }

  ngOnInit(): void {
  }

  withdrawDates: string[] = this.dataService.getWithdrawsDates()
  balanceDates: string[] = this.dataService.getDates()
  startBalance: number[] = this.dataService.getStartDayBalance()
  withdrawals: number[] = this.dataService.getWithdrawsSums()
  endBalance: number[] = this.dataService.getEndDayBalance()

  public graph1 = {
    data: [
      {
        x: this.balanceDates, y: this.startBalance, name: 'Balance',
        histnorm: "probability density",
        marker: {
          color: "rgba(255, 100, 102, 0.7)",
          line: {
            color: "rgba(255, 100, 102, 1)",
          }
        },
      },
      {
        x: this.withdrawDates, y: this.withdrawals, name: "Withdrawals",
        marker: {
          color: "rgba(100, 200, 102, 0.7)",
          line: {
            color: "rgba(100, 200, 102, 1)",
          }
        },
      }
    ],
    layout : {
      title: "Balance vs Withdrawals",
      xaxis: { title: "Date" },
      yaxis: { title: "Money" },
      width: 900, height: 450,
    }
  };

  public graph2 = {
    data: [
      {
        x: this.balanceDates,
        y: this.startBalance,
        name: 'Start Balance',
        histnorm: "probability density",
        marker: {
          color: "rgba(255, 100, 102, 0.7)",
          line: {
            color: "rgba(255, 100, 102, 1)",
          }
        },
      },
      {
        x: this.balanceDates,
        y: this.endBalance,
        marker: {
          color: "rgba(100, 200, 102, 0.7)",
          line: {
            color: "rgba(100, 200, 102, 1)",
          }
        },
        name: "End Balance",
      }
    ],
    layout : {
      title: "Start/End Balance per day",
      xaxis: { title: "Date" },
      yaxis: { title: "Money" },
      width: 900, height: 450,
    }
  };
}
