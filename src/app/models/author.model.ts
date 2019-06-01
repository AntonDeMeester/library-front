export class Author {
    id: number;
    name: string;

    constructor(data){
        if(data){
            this.id = data.id || 0:
            this.name = data.name || '';
        }
    }
}
