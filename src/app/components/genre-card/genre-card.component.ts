import { Component, OnInit, Input } from '@angular/core';

import { Genre } from '../../models/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {

  @Input() genre: Genre;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToGenre(event) {
    this.router.navigate(
        ['/books/'], 
        { queryParams: {
            genre: this.genre.genre
            }
        }
    )
  }

}
