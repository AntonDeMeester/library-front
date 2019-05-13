import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private bookService: BooksService,
              private formBuilder: FormBuilder) {
  }

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  formLogin: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password,
  });


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formLogin);
    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;
    this.bookService.login(username, password);
  }

}
