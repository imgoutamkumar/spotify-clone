import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent implements OnInit {
  @Input() playlistThumbnail!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() song_id!: number | string;
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.warn(this.playlistThumbnail);
    console.warn(this.title);
    console.warn(this.description);
  }
  onNavigateToSong() {
    this.router.navigateByUrl('/song/${this.song_id}');
  }
}
