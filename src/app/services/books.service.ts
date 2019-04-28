import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs/index';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { Book } from '../models/book.model';
import { Genre } from '../models/genre.model';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = environment.backendUrl
  private tokenEndPoint = this.baseUrl + "/token/"
  private booksEndPoint = this.baseUrl + "/books/"
  private registerEndPoint = this.baseUrl + "/register/"
  private genreEndPoint = this.baseUrl + "/genres/"

  private csrfToken: string;

  public token$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) {
    this.token$ = new Subject<string>();
    this.token$.subscribe(token => this.setToken(token));
    //this.login('anton', 'creafien')
  }

  login(email:string, password:string) {
    return this.http.post<any>(this.tokenEndPoint, {'username': email, 'password': password})
      .subscribe(response => {
        console.log('Token is ' + response.token)
        this.token$.next(response.token);
        this.setToken(response.token)
      });
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksEndPoint)
      .pipe(
        tap(books => {
          console.log(books);
        }),
      )
  }

  getBookById(id): Observable<Book> {
    return this.http.get<Book>(this.booksEndPoint + id)
    .pipe(
      tap(book => {
        console.log(book)
      })      
    );
  }
  
  registerBook(file: File): Observable<void> {
    let data: FormData = new FormData();
    data.append('image', file, 'fileName')
    return this.http.post<void>(this.registerEndPoint, data)
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreEndPoint)
  }
}
