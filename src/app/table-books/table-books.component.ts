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

  

  //SORTING
  sortTitle() {
      this.books.sort((a,b) => (a.bookTitle > b.bookTitle) ? 1 : -1);
  }

  

}
