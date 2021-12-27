import { Component, OnInit } from '@angular/core';
import { Statment } from '../models/statment';
import { ExtractDataService } from '../services/extract-data.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profileData: Statment = this.dataService.getPersonalData()
  constructor(private dataService:ExtractDataService) { }

  ngOnInit(): void {
  }

}
