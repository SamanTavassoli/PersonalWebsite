import { Component, ViewChild, HostListener } from '@angular/core';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projectsSectionPosition = "fixed";
  projectsSectionTop = "0";

  @ViewChild("contactMeModal", {static: false}) modal: ContactMeSectionComponent

  openModal() {
    this.modal.open();
  }

  /**
   * This takes care of moving the main projects section down after the 
   * user has scrolled for a while. Changes position of section between
   * fixed and relative
   */
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (document.documentElement.scrollTop >= document.documentElement.offsetHeight*0.7) {
      if (this.projectsSectionTop == "0") {
        this.projectsSectionTop = String(document.documentElement.scrollTop)
        this.projectsSectionPosition = "relative"
      }
    } else {
      this.projectsSectionTop = "0";
      this.projectsSectionPosition = "fixed";
    }
  }


}
