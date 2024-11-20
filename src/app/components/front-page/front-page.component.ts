import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var bodymovin: any;

@Component({
  selector: 'lyc-front-page',
  standalone: true,
  imports: [],
  templateUrl: './front-page.component.html'
})
export class FrontPageComponent implements OnInit {
  @ViewChild('arrowContinue', { static: true }) arrowContinue!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.loadAnimationArrow();
  }

  private loadAnimationArrow(): void {
    let animFlechaScroll = bodymovin.loadAnimation({
      wrapper: this.arrowContinue?.nativeElement,
      animType: 'svg',
      loop: true,
      path: 'img/down-scroll.json'
    });

    animFlechaScroll.setSpeed(0.6);
  }
}
