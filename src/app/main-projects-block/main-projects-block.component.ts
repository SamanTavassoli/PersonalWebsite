import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-projects-block',
  templateUrl: './main-projects-block.component.html',
  styleUrls: ['./main-projects-block.component.css']
})
export class MainProjectsBlockComponent implements OnInit {

  // styling
  maxHeight: number = 500;
  maxWidth: number = 500;

  private _projectName: String; 
  private _projectDetails: String[];

  constructor() {
    this._projectName = "test";
    this._projectDetails = ["first", "second", "third"];
  }

  get projectName(): String {
    return this._projectName;
  }

  get projectDetails(): String[] {
    return this._projectDetails;
  }

  ngOnInit(): void {
  }

}
