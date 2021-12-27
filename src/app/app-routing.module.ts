import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BarChartComponent } from './plots/bar-chart/bar-chart.component';
import { PieChartComponent } from './plots/pie-chart/pie-chart.component';
import { PlotComponent } from './plots/plot/plot.component';


const myRoutes:Route[]=[
  {path:'file-upload',component:FileUploadComponent},
  {path:'bar-chart',component:BarChartComponent},
  {path:'pie-chart',component:PieChartComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'plot',component:PlotComponent},
  {path: '', redirectTo: '/file-upload', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
