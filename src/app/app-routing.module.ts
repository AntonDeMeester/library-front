import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: SearchPageComponent },
  { path: 'book', component: DetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
