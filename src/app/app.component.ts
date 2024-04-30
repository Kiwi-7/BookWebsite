import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { NewReleaseComponent } from './new-release/new-release.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,BooksComponent,AdvanceSearchComponent,NewReleaseComponent,
    RouterLink,RouterLinkActive,CommonModule
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookWebsite';
}
