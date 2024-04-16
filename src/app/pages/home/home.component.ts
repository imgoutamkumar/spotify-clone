import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public songCards = [
    {
      song_id: 1,
      thumbnail:
        'https://media5.bollywoodhungama.in/wp-content/uploads/2023/04/The-Kerala-Story-2.jpg',
      title: 'Na Zameen Mili',
      description:
        'Nulla suscipit semper lorem, at consectetur ipsum commodo in',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 2,
      thumbnail:
        'https://c4.wallpaperflare.com/wallpaper/158/101/125/movies-bollywood-movies-wallpaper-preview.jpg',
      title: 'Disco Song',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 3,
      thumbnail:
        'https://media5.bollywoodhungama.in/wp-content/uploads/2016/09/Tiger-Zinda-Hai-7.jpg',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 4,
      thumbnail:
        'https://e1.pxfuel.com/desktop-wallpaper/609/870/desktop-wallpaper-jubin-nautiyal-bollywood-singer-and-musician-jubin-nautiyal-song.jpg',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 5,
      thumbnail:
        'https://e0.pxfuel.com/wallpapers/313/540/desktop-wallpaper-kabhie-khushi-kabhie-gham-blockbuster-film-bollywood-songs-bollywood-movies.jpg',
      title: 'Kabhi Khusi Kabhi Gham',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'https://c4.wallpaperflare.com/wallpaper/586/10/575/movies-bollywood-movies-wallpaper-preview.jpg',
      title: 'Jab Tak Hai Jaan',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 7,
      thumbnail:
        'https://c4.wallpaperflare.com/wallpaper/938/179/647/movies-bollywood-movies-wallpaper-preview.jpg',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 8,
      thumbnail:
        'https://c4.wallpaperflare.com/wallpaper/975/459/664/movies-bollywood-movies-wallpaper-preview.jpg',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
    {
      song_id: 9,
      thumbnail:
        'https://c4.wallpaperflare.com/wallpaper/720/197/127/movies-bollywood-movies-wallpaper-preview.jpg',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
      song_link: 'assets/Tu_Mila.mp3',
    },
  ];
  constructor(private sb: SearchBarService) {}
  ngOnInit(): void {}

  onNavigate(pageName: string) {
    if (pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }
}
