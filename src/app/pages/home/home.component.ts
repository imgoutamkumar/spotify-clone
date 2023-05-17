import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public songCards = [
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://marketplace.canva.com/EAEqP7qwj8Y/1/0/1600w/canva-modern-song-cover-youtube-thumbnail-Z3mUXtsSVNU.jpg',
      title: 'Song about love',
      description: 'Favorite Song Cover',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
    },
    {
      thumbnail:
        'https://cdn.pixabay.com/photo/2015/12/09/22/09/music-1085655_960_720.png',
      title: 'Hum Tum',
      description: 'Sad Song with heart touching music',
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
