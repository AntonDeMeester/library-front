import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS,  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationInterceptor } from './services/authentication.service'
import { Xsrfinterceptor } from './services/xsrfinterceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { UploadBookComponent } from './components/upload-book/upload-book.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { GenreListPageComponent } from './pages/genre-list-page/genre-list-page.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    DetailsPageComponent,
    UploadBookComponent,
    LoginButtonComponent,
    GenreListPageComponent,
    GenreCardComponent,
    BookCardComponent,
    BookListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ 
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: Xsrfinterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
