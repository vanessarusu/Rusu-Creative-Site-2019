import * as moment from 'moment';

export class Post {
	id: number;
	public date: any;
	public newDate: any = this.readableDate;
	public acf: any;
	public author: any;
	public _embedded: any;
	public primaryColor: string;
	public secondaryColor: string;
	public darkHeader: boolean;
	public lightDescription: boolean;
	public content: any;
	public title: any;
	public link: string;
	constructor() {

	}
	public readableDate(input: void) : any {
		this.newDate = moment(input).format('dddd MMMM D Y');
		return this.newDate;
	}
}
