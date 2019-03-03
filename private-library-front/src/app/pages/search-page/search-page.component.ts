import { Component, OnInit } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  dataSource = [
    {book_name:"The Bible", authors:"John, Matthew, Luke, Other guy", genres: "Fiction, Religion"},
    {book_name:"Thinking fast and slow", authors:"Kahneman", genres: "Non-fiction, psychology"},
    {book_name:"A game of thrones", authors:"George R.R. Martin", genres: "Fiction, Fantasy"},
  ]
  displayedColumns: string[] = ["book_name", "authors", "genres"]

  constructor() { }

  ngOnInit() {
  }

}
