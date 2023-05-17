import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent implements OnInit {
  @Input() playlistThumbnail =
    'https://marketplace.canva.com/EAEqP7qwj8Y/1/0/1600w/canva-modern-song-cover-youtube-thumbnail-Z3mUXtsSVNU.jpg';
  @Input() title = 'Song about love';
  @Input() description = 'Favorite Song Cover';
  constructor() {}
  ngOnInit(): void {
    console.warn(this.playlistThumbnail);
    console.warn(this.title);
    console.warn(this.description);
  }
}
