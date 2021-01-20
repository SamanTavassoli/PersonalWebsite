import { Component, OnInit } from '@angular/core';

class ProjectProperties {
  name: string;
  backgroundImageUrl: string;
  details: string[]

  constructor(name: string, backgroundImageUrl: string, details) {
    this.backgroundImageUrl = backgroundImageUrl;
    this.name = name;
    this.details = details;
  }

}

@Component({
  selector: 'app-main-projects-section',
  templateUrl: './main-projects-section.component.html',
  styleUrls: ['./main-projects-section.component.css']
})
export class MainProjectsSectionComponent implements OnInit {

  project1 = new ProjectProperties(
    "IOS Development", 
    "assets/image1.png",
    ["Main language: Swift", "Period: Summer 2019"]
    );
  project2 = new ProjectProperties(
    "University Application Project",
    "assets/image2.png",
    ["Main languages: Java/TypeScript/Html", "Period: Summer 2020"]
    );
  project3 = new ProjectProperties(
    "Youtube Video Recommender",
    "assets/image3.png",
    ["Main language: Java", "Period: March-May 2020"]
    );

  projectsProperties = [this.project1, this.project2, this.project3];

  projectsSectionMinWidth = 1000;
  projectsSectionMinHeight = 1000;

  constructor() { }

  ngOnInit(): void {
  }

}
