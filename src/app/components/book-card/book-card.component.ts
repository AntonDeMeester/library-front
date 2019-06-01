import { Component, OnInit, Input } from '@angular/core';

import { Book, BookImage } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

    @Input() book: Book;

    imageUrl: string;
    showDetails: Boolean;

    constructor() { }

    ngOnInit() {
      this.showDetails = false;
      this.imageUrl = this.getImageFromList(this.book.book_image);
      if (!this.imageUrl) {
        this.showDetails = true;
      }
    }

    getImageFromList(bookImage: BookImage): string {
      if(bookImage.extra_large) return bookImage.extra_large.toString();
      if(bookImage.large) return bookImage.large.toString();
      if(bookImage.medium) return bookImage.medium.toString();
      if(bookImage.small) return bookImage.small.toString();
      if(bookImage.thumbnail) return bookImage.thumbnail.toString();
      if(bookImage.small_thumbnail) return bookImage.small_thumbnail.toString();
      return '';
    }

    toggleDetails(event): void {
      if(this.imageUrl) {
        this.showDetails = !this.showDetails;
      }
    }

}
