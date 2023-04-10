import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { TableBooksComponent } from './table-books/table-books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksReadComponent } from './books-read/books-read.component';
import { HomeComponent } from './home/home.component';
import { BooksReadingComponent } from './books-reading/books-reading.component';
import { BookService } from './service/book.service';
import { StillReadingPipePipe } from './still-reading-pipe.pipe';
import { RandomComponent } from './random/random.component';




@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    TableBooksComponent,
    BooksReadComponent,
    HomeComponent,
    BooksReadingComponent,
    StillReadingPipePipe,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
