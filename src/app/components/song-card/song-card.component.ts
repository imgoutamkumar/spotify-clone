import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent implements OnInit {
  @Input() playlistThumbnail!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() song_id!: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    console.warn(this.playlistThumbnail);
    console.warn(this.title);
    console.warn(this.description);
  }
  onNavigateToSong(song_id: number) {
    this.activatedRoute.paramMap.subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    this.router.navigate(['/song/', song_id]);
  }
}
