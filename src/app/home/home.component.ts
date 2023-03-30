import { Component } from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BooksComponent {

}
