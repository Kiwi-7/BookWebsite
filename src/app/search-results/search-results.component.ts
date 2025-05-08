import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';
import { defer } from 'rxjs';

//declare function setStarValues(num: number): void

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{
  public bookData = [
    {"bookId": "", "bookName": "Book Name", "authorName": "Author Name", "rating": 0, "people": 0, "cover": "Cover", "price": 0}
  ];

  constructor( private dataService: DataService,){ 
  }

  ngOnInit() {
    this.dataService.getBook()
        .subscribe(
          data => this.bookData = data,
        );
    //setStarValues(4);
    /*fetch("http://localhost:3000/api/book/ath")
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));*/
  }
}
