import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var bodymovin: any;

@Component({
  selector: 'lyc-gifts',
  standalone: true,
  imports: [],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss'
})
export class GiftsComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundMusic') backgroundMusic!: ElementRef<HTMLAudioElement>;
  isPlayMusic: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let svgContainerMusicAnimIcon = document.querySelector('.music-anim-icon');
    let animMusicAnimIcon = bodymovin.loadAnimation({
      wrapper: svgContainerMusicAnimIcon,
      animType: 'svg',
      autoplay: false,
      loop: true,
      path: 'img/reproductor.json'
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playPauseMusic();
    }, 1000);
  }

  playPauseMusic(): void {
    this.isPlayMusic = !this.isPlayMusic;
    this.isPlayMusic ? this.playMusic() : this.pauseMusic();
  }

  private playMusic(): void {
    this.backgroundMusic.nativeElement.play();
  }

  private pauseMusic(): void {
    this.backgroundMusic.nativeElement.pause();
  }
}
