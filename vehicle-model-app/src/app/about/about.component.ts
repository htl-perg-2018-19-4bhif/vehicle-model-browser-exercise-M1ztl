import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lorem;

  constructor(private location: Location) {
    this.loadText();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

  loadText() {
    const loremObj = new LoremIpsum();
    this.lorem = loremObj.generateParagraphs(5);
  }

}
