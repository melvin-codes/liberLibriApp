import { Component, OnInit } from '@angular/core';

import { BooksComponent } from '../books/books.component';
import { Book } from '../interface/book';



@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css']
})
export class TableBooksComponent extends BooksComponent implements OnInit {

  override ngOnInit(): void {
      this.getAllBooks();
  }

  

  progress: any;

  

  //SORTING
  sortTitle() {
      this.books.sort((a,b) => (a.bookTitle > b.bookTitle) ? 1 : -1);
  }

  getProgress(book: Book): any {
    if(book.pagesRead === 0) {
      this.progress = "0"
    } else {
      this.progress = (book.pagesRead / book.pages) * 100;
    }
    return this.progress;
  }

}
