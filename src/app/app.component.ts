import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { NewReleaseComponent } from './new-release/new-release.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookInfoComponent } from './book-info/book-info.component';
import { CartComponent } from './cart/cart.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AnimationComponent } from './animation/animation.component';
import { DataService } from './data.service';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IBook} from './interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, BooksComponent, AdvanceSearchComponent, NewReleaseComponent, 
    SearchResultsComponent, BookInfoComponent, CartComponent, AnimationComponent,
    FormsModule, HttpClientModule, RouterLink, RouterLinkActive, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookWebsite';
  bookModel: IBook = {
    bookId: "",
    bookName: "",
    authorName: "",
    rating: 0,
    people: 0,
    cover: "",
    price: 0,
  };

  constructor(private dataService: DataService){
  }

  onSubmit() {
    this.dataService.getSearchBook(this.bookModel.bookId)
        .subscribe(
          res => console.log("Founded!", res),
          err => console.error("Error!", err)
        )
    //console.log(this.bookModel.bookId); 
  }
}


