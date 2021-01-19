import { Component, ViewChild } from '@angular/core';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  @ViewChild("contactMeModal", {static: false}) modal: ContactMeSectionComponent

  openModal() {
    this.modal.open();
  }


}
