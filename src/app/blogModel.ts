export class Blog {
	id: string;
	title: string;
	content: string;
	date: string;
	constructor(id,title, content, date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}