import { Author } from './author.model';
import { Genre } from './genre.model';

export class Book {
    id: number;

    isbn10: string;
    isbn13: string;
    title: string;
    subtitle: string;
    authors: Author[];
    genres: Genre[];

    publisher: string;
    published_date: Date;
    description: string;

    page_count: number;
    language: string;
}
