import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://via.placeholder.com/150',
    album: 'Massive rock hits',
    name: 'Smoke on the water',
  };
}
