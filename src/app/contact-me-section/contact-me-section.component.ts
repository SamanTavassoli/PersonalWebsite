import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.css']
})
export class ContactMeSectionComponent implements OnInit {

  emailForm: FormGroup;

  private _contactMessage = "";

  constructor() {
    this._contactMessage = "Contact me on the following email"

  }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      name: new FormControl(''),
      message: new FormControl('')
    })  
  }

  get contactMessage(): string {
    return this._contactMessage;
  }

  @ViewChild("modalView", {static: false}) modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = "block";
  }

  close() {
    this.modal.nativeElement.style.display = "none";
  }

  send() {

  }

}
