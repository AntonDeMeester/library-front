export class Genre {
    id: number;
    genre: string;
    book_count: number;

    constructor(data?) {
        if(data) {
            this.id = data.id || 0;
            this.genre = data.genre || '';
            this.book_count = data.book_count || '';
        }
    }
}
