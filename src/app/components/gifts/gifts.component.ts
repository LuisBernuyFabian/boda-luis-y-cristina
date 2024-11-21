import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var bodymovin: any;
declare var YT: any;
declare var $: any;

@Component({
  selector: 'lyc-gifts',
  standalone: true,
  imports: [],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss'
})
export class GiftsComponent implements OnInit, AfterViewInit {
  player: any;
  musicPlay: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let svgContainerMusicAnimIcon = document.querySelector('.music-anim-icon');
    let animMusicAnimIcon = bodymovin.loadAnimation({
      wrapper: svgContainerMusicAnimIcon,
      animType: 'svg',
      autoplay: false,
      loop: true,
      path: 'img/reproductor.json'
    });

    this.player = new YT.Player('playermusicafondo', {
      height: '10',
      width: '10',
      videoId: 'X0rJieOM2NY',
      playerVars: { autoplay: 1, controls: 0 },
      events: {
        onReady: (event: any) => {
          this.onPlayerReady(event);
        }
      }
    });
  }

  playPauseMusic(): void {
    this.musicPlay = !this.musicPlay;
    if (this.musicPlay) {
      this.player.playVideo();
    } else {
      this.player.pauseVideo();
    }
  }

  private onPlayerReady(event: any): void {
    event.target.setVolume(80);
    event.target.playVideo();
  }
}
