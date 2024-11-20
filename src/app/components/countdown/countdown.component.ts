import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var bodymovin: any;

@Component({
  selector: 'lyc-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html'
})
export class CountdownComponent implements OnInit {
  @ViewChild('heartPalpitation', { static: true }) heartPalpitation!: ElementRef;

  fechaCuentaRegresiva = '11/30/2024 19:00:00';

  distance: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadcountDate();
    this.loadAnimation();
  }

  private loadcountDate(): void {
    const countDownDate = new Date(this.fechaCuentaRegresiva).getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      this.distance = countDownDate - now;

      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      if (this.distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }

  private loadAnimation(): void {
    let animFlechaScroll = bodymovin.loadAnimation({
      wrapper: this.heartPalpitation?.nativeElement,
      animType: 'svg',
      loop: true,
      path: 'img/cuenta-regresiva.json'
    });
  }
}
