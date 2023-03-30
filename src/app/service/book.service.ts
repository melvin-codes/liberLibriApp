import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';

@Injectable({providedIn: 'root'})

export class BookService {
  private readonly apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/book/all`);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/find/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/book/add`, book);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/book/update`, book);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/book/delete/${id}`);
  }
}
