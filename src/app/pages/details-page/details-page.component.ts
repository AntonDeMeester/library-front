import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  book: Book;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    this.booksService.getBookById(1).subscribe(book => this.book = book)
  }

}
