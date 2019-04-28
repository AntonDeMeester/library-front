import { Component, OnInit, Input } from '@angular/core';

import { Genre } from '../../models/genre.model';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {

  @Input() genre: Genre;

  constructor() { }

  ngOnInit() {
  }

}
