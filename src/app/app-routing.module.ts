import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { GenreListPageComponent } from './pages/genre-list-page/genre-list-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: SearchPageComponent },
  { path: 'book', component: DetailsPageComponent },
  { path: 'genres', component: GenreListPageComponent },
  { path: 'books', component: BookListPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
