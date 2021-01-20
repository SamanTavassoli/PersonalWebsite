import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-projects-block',
  templateUrl: './main-projects-block.component.html',
  styleUrls: ['./main-projects-block.component.css']
})
export class MainProjectsBlockComponent implements OnInit {

  @Input()
  properties

  constructor() {
  }

  ngOnInit(): void {
  }

}
