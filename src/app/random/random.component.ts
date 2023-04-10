import { Component, OnInit } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { Book } from '../interface/book';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent extends BooksComponent implements OnInit {
  randomBook: Book;
  visibility: boolean;
  checker: number = 0;
  override ngOnInit() {
    this.getBooksReading();
  }

  getRandomBook() {
    if (this.booksReading.length > 0) {
      let i = Math.floor(Math.random() * this.booksReading.length);
      if (this.checker !== i) {
        this.checker = i;
        this.randomBook = this.booksReading.at(i);
        this.visibility = true;
      } else if(this.checker === i) {
        while(this.checker === i) {
          i = Math.floor(Math.random() * this.booksReading.length);
        }
        this.randomBook = this.booksReading.at(i);
        this.visibility = true;
      }
    } else {
      this.visibility = false;
    }
  }
}
