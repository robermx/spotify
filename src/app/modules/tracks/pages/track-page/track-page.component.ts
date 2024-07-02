import { Component } from '@angular/core';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent {
  mockTracksList = [
    {
      name: 'Track 1',
    },
    {
      name: 'Track 2',
    },
    {
      name: 'Track 3',
    },
  ];
}
