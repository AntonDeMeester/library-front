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

    book_image: URL;

    constructor(data?){
        if (!(data === undefined || data === null)) {
            this.id = data.id || 0;
            this.isbn10 = data.isbn10 || '';
            this.isbn13 = data.isbn13 || '';
            this.title = data.title || '';
            this.subtitle = data.subtitle || '';
            if(data.authors){
               data.authors.forEach(element => {
                   this.authors.push(new Author(element))
               });
            }
            if(data.genres){
                data.genres.forEach(element => {
                    this.genres.push(new Genre(element))
                });
            }
            this.publisher = data.publisher || '';
            this.published_date = data.published_date || '';
            this.description = data.description || '';
            this.page_count = data.page_count || 0;
            this.language = data.language || '';

            if(data.book_image) {
                this.book_image = this.getImageFromList(data.book_image)
            } else this.book_image = null;
          }
      
    }

    getImageFromList(bookImage) {
        if(bookImage.extra_large) return bookImage.extra_large;
        if(bookImage.large) return bookImage.large;
        if(bookImage.medium) return bookImage.medium;
        if(bookImage.small) return bookImage.small;
        if(bookImage.thumbnail) return bookImage.thumbnail;
        if(bookImage.small_thumbnail) return bookImage.small_thumbnail;
        return '';
    }
}
