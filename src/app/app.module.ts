import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CommonModule } from '@angular/common';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { BarChartComponent } from './plots/bar-chart/bar-chart.component';
import { PieChartComponent } from './plots/pie-chart/pie-chart.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PlotComponent } from './plots/plot/plot.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent, 
    FileUploadComponent, 
    BarChartComponent, 
    PieChartComponent, 
    MyProfileComponent, 
    PlotComponent
  ],
  imports: [
    CommonModule, 
    PlotlyModule,
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
