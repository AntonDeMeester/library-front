import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField, MatInput, MatSort, MatTableDataSource } from '@angular/material';

import { Book } from '../../models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  
  books: Book[];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns: string[] = ["title", "authors", "genres"]


  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
    private booksService: BooksService) { 
  }
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getBooks();
  }

  goToDetails(id: number) {
    console.log("Book id is " + id)
    this.router.navigate(['/book'])
  }

  getBooks(): void {
    this.booksService.getBooks("").subscribe(books => this.dataSource.data = books);
    this.dataSource.connect();
  }

}