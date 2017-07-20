export class Quote {
    id: number;
    quote: string;
    author: string;
    votes: number;

    constructor(){
        this.votes = 0;
    }
}