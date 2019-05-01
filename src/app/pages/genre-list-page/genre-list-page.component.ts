import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from '../../services/books.service';
import { Genre } from '../../models/genre.model';

@Component({
  selector: 'app-genre-list-page',
  templateUrl: './genre-list-page.component.html',
  styleUrls: ['./genre-list-page.component.css']
})
export class GenreListPageComponent implements OnInit {

  @ViewChild('genreScrollContainer', { read: ElementRef }) public genreScroll: ElementRef<any>;

  public genres: Genre[];

  constructor(
      private bookService: BooksService
    ) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.bookService.getGenres().subscribe(
      genres => {this.genres = genres}
    )
  }

  scrollLeft(event) {
    this.genreScroll.nativeElement.scrollTo(
      { left: (this.genreScroll.nativeElement.scrollLeft - 300), behavior: 'smooth'}
    )
  }

  scrollRight(event) {
    this.genreScroll.nativeElement.scrollTo(
      { left: (this.genreScroll.nativeElement.scrollLeft + 300), behavior: 'smooth'}
    )
  }

}
