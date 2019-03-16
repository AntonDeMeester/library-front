import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormField, MatInput, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  dataSource_DATA = [
    {id: 1, book_name:"The Bible", authors:"John, Matthew, Luke, Marc", genres: "Fiction, Religion"},
    {id: 2, book_name:"Thinking fast and slow", authors:"Kahneman", genres: "Non-fiction, psychology"},
    {id: 3, book_name:"A game of thrones", authors:"George R.R. Martin", genres: "Fiction, Fantasy"},
  ]
  dataSource = new MatTableDataSource(this.dataSource_DATA)
  displayedColumns: string[] = ["book_name", "authors", "genres"]

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) { 
  }
  

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  goToDetails(id: number) {
    console.log("Book id is " + id)
    this.router.navigate(['/book'])
  }

}