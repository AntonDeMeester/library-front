import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.css']
})

export class BookListPageComponent implements OnInit {

    @ViewChild('bookScrollContainer', { read: ElementRef }) public bookScroll: ElementRef<any>;

    public books: Book[];
    private genre: string;

    constructor(
        private bookService: BooksService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log("Attempting to get query params")
        this.route
            .queryParams
            .subscribe(params => {
                this.genre = params['genre'] || '';
                console.log("Got query params: " + this.genre)
                this.bookService.getBooks(this.genre).subscribe(
                    books => {this.books = books}
                )
            })
        
    }

    scrollLeft(event) {
        this.bookScroll.nativeElement.scrollTo(
          { left: (this.bookScroll.nativeElement.scrollLeft - 300), behavior: 'smooth'}
        )
      }
    
      scrollRight(event) {
        this.bookScroll.nativeElement.scrollTo(
          { left: (this.bookScroll.nativeElement.scrollLeft + 300), behavior: 'smooth'}
        )
      }

}
