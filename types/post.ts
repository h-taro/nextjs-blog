export class Post {
    id: string;
    date: string;
    title: string;
    content: string;

    constructor(id: string, date: string, title: string, content: string) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.content = content;
    }
}