import { Genre } from "../enum/genre";

export interface Book {
    id: number;
    bookTitle: string;
    author: string;
    yearPublished: number;
    isbn: string;
    genre: Genre;
    stillReading: boolean;
    pages: number;
    pagesRead: number;
}