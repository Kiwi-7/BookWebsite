import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { NewReleaseComponent } from './new-release/new-release.component';

export const routes: Routes = [
   { path: 'books', component: BooksComponent},
   { path: 'advance-search', component: AdvanceSearchComponent},
   { path: 'new-release', component: NewReleaseComponent}
];
