import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-projects-section',
  templateUrl: './main-projects-section.component.html',
  styleUrls: ['./main-projects-section.component.css']
})
export class MainProjectsSectionComponent implements OnInit {

  temp = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
