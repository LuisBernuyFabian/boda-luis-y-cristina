import { AfterViewInit, Component, OnInit } from '@angular/core';
import { COMPONENTS } from './components';

declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  device: string = '';
  imageParallax: string = '';

  constructor() {}

  ngOnInit(): void {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.device = 'mobile';
    } else {
      this.device = 'desktop';
    }
  }

  ngAfterViewInit(): void {
    if (this.device == 'mobile' || $(window).width() < 768) {
      this.imageParallax = 'img/fondo-mobile.webp';
    } else {
      this.imageParallax = 'img/fondo.webp';
    }

    $('.portada').parallax({ imageSrc: this.imageParallax });
    AOS.init();
  }
}
