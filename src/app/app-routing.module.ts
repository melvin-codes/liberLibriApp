import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksReadComponent } from './books-read/books-read.component';
import { BooksReadingComponent } from './books-reading/books-reading.component';
import { HomeComponent } from './home/home.component';
import { TableBooksComponent } from './table-books/table-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'booksRead', component: BooksReadComponent},
  { path: 'booksReading', component: BooksReadingComponent},
  { path: 'tableView', component: TableBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
