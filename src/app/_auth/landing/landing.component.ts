import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('landingSlider', { static: true })  slides: IonSlides;

  constructor() { }

  ngOnInit() {}
  swipeNext(){
    this.slides.slideNext();
  }

}
