import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var bodymovin: any;

@Component({
  selector: 'lyc-ceremony',
  standalone: true,
  imports: [],
  templateUrl: './ceremony.component.html'
})
export class CeremonyComponent implements OnInit {
  @ViewChild('animaRings', { static: true }) animaRings!: ElementRef;
  @ViewChild('animaParty', { static: true }) animaParty!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.loadAnimationRings();
    this.loadAnimationParty();
  }

  private loadAnimationRings(): void {
    let animRings = bodymovin.loadAnimation({
      wrapper: this.animaRings?.nativeElement,
      animType: 'svg',
      loop: true,
      path: 'img/ceremonia.json'
    });

    animRings.play();
  }

  private loadAnimationParty(): void {
    let animParty = bodymovin.loadAnimation({
      wrapper: this.animaParty?.nativeElement,
      animType: 'svg',
      loop: true,
      path: 'img/fiesta.json'
    });

    animParty.play();
  }
}
