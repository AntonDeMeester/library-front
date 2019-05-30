import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private bookService: BooksService,
              private formBuilder: FormBuilder,
              private snackbarService: SnackbarService,
              private router: Router) {
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
    this.bookService.login(username, password).subscribe(result => {
      this.router.navigate(['genres']);
    });
  }

}
