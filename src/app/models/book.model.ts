import { Author } from './author.model';
import { Genre } from './genre.model';
import { Url } from 'url';

export class BookImage {
    extra_large: Url;
    large: Url;
    medium: Url;
    small: Url;
    thumbnail: Url;
    small_thumbnail: Url;

    constructor(data?) {
        if (!(data === undefined || data === null)) {
            this.extra_large = data.extra_large || null;
            this.large = data.large || null;
            this.medium = data.medium || null;
            this.thumbnail = data.thumbnail || null;
            this.small_thumbnail = data.small_thumbnail || null;
        }
    }
}

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

    imageUrl: string;

    book_image: BookImage;

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
                this.book_image = new BookImage(data.book_image);
                this.imageUrl = this.getImageFromList(data.book_image);
            } else {
                this.book_image = null;
                this.imageUrl = null;
            }
          }
      
    }

    public getImageFromList(bookImage: BookImage): string {
        if(bookImage.extra_large) return bookImage.extra_large.toString();
        if(bookImage.large) return bookImage.large.toString();
        if(bookImage.medium) return bookImage.medium.toString();
        if(bookImage.small) return bookImage.small.toString();
        if(bookImage.thumbnail) return bookImage.thumbnail.toString();
        if(bookImage.small_thumbnail) return bookImage.small_thumbnail.toString();
        return '';
    }
}
