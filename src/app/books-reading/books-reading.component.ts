import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-books-reading',
  templateUrl: './books-reading.component.html',
  styleUrls: ['./books-reading.component.css']
})
export class BooksReadingComponent extends BooksComponent implements OnInit {
  override ngOnInit() {
      this.getBooksReading();
  }
}
