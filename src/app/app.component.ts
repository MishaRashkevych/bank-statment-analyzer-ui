import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-statment-infografics-ui';
  response = localStorage.getItem("response");

  ngDoCheck(){
    this.response = localStorage.getItem("response");
  }
}
