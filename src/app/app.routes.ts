import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { NewReleaseComponent } from './new-release/new-release.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { CartComponent } from './cart/cart.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
   { path: '', component: SearchResultsComponent},
   { path: 'books', component: BooksComponent},
   { path: 'advance-search', component: AdvanceSearchComponent},
   { path: 'new-release', component: NewReleaseComponent},
   { path: 'book-info', component: BookInfoComponent},
   { path: 'cart', component: CartComponent}
];
