import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-books-read',
  templateUrl: './books-read.component.html',
  styleUrls: ['./books-read.component.css'],
})
export class BooksReadComponent extends BooksComponent implements OnInit {
  override ngOnInit() {
    this.getBooksRead();
  }
  
}
