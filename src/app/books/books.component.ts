import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Genre } from '../enum/genre';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  booksRead: Book[] = [];
  booksReading: Book[] = [];
  editBook: Book;
  deleteBook: Book;
  infoBook: Book;
  bookById: Book;

  editModalBox: boolean = false;
  deleteModalBox: boolean = false;
  addModalBox: boolean = false;
  infoModalBox: boolean = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  //GET ALL BOOKS
  getAllBooks(): void {
    this.bookService.getAll().subscribe({
      next: (response: Book[]) => {
        this.books = response;
        console.log("All Books:")
        console.log(response);
      },
      error: (e) => console.error(e),
    });
  }

  //GET BOOKS READING
  getBooksReading(): void {
    this.bookService.getAll().subscribe({
      next: (response: Book[]) => {
        for(let i = 0; i < response.length; i++) {
          if(response[i].stillReading === true) {
            this.booksReading.push(response[i]);
          }
        }

        console.log("Reading" + this.booksReading);
      }
    })
  }

  //GET BOOKS READ
  getBooksRead(): void {
    this.bookService.getAll().subscribe({
      next: (response: Book[]) => {
        for(let i = 0; i < response.length; i++) {
          if(response[i].stillReading === false) {
            this.booksRead.push(response[i]);
          }
        }
        console.log("Read:");
        console.log(this.booksRead);
      }
    })
  }

  //GET BOOK BY ID
  getBookById(id: number): void {
    this.bookService.getById(id)
      .subscribe({
        next: (response: Book) => {
          console.log(response);
          this.bookById = response;
        },
        error: (e: HttpErrorResponse) => {
          alert(e.message);
        }
      })
  }

  //ADD BOOK
  onAddBook(addForm: NgForm): void {
    document.getElementById('add-book-form').click();
    this.bookService.create(addForm.value)
      .subscribe({
        next: (response: Book) => {
          console.log(response);
          this.getAllBooks();
          addForm.reset();
        },
        error: (e: HttpErrorResponse) => {
          alert(e.message);
          addForm.reset();
        }
      })
  }

  //UPDATE BOOK
  onUpdateBook(book: Book): void {
    this.bookService.update(book)
      .subscribe({
        next: (response: Book) => {
          console.log(response);
          this.getAllBooks();
        },
        error: (e: HttpErrorResponse) => {
          alert(e.message);
        }
      })
  }

  //DELETE BOOK
  onDeleteBook(bookId: any): void {
    this.bookService.delete(bookId)
      .subscribe({
        next: (response: void) => {
          console.log(response);
          this.getAllBooks();
        },
        error: (e: HttpErrorResponse) => {
          alert(e.message);
        }
      })
  }

  
  

  //OPEN MODALS
  openModal(book: Book, mode: string): void {
    if(mode === 'add') {
      this.addModalBox = true;
    }
    if(mode === 'edit') {
      this.editBook = book;
      this.editModalBox = true;
      
    }
    if(mode === 'delete') {
      this.deleteBook = book;
      this.deleteModalBox = true;
    }
    if(mode === 'info') {
      this.infoBook = book;
      this.infoModalBox = true;
    }
  }

  genreType = Object.values(Genre);



  

}
