import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(
    private bookService: BooksService
  ) { }

  ngOnInit() {
  }

  login($event): void {
    this.bookService.login('anton@0smosis.com', 'creafien')
  }


}
