import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { GenreListPageComponent } from './pages/genre-list-page/genre-list-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/search', 
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },
  { 
    path: 'search', 
    component: SearchPageComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'book', 
    component: DetailsPageComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'genres', 
    component: GenreListPageComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'books', 
    component: BookListPageComponent,
    canActivate: [AuthGuardService],
  },
  { 
    path: 'login',
    component: LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
