import { Component, OnInit } from '@angular/core';
import { Blog } from '../blogModel';


@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
	panelOpenState = false;
	blogList: Blog[] = [];
	pagedBlogList: Blog[] = [];
	selectedBlog: Blog;
	pageIdx = 1;
	maxPageIdx = 0;
	onSelect(blog: Blog, idx: string): void {
		this.selectedBlog = blog;
		this.panelOpenState = false;
	}
	onNavSelect(idx: string): void {
		let startIdx = -1;
		let stopIdx = -1;
		if (idx === '+') {
			if (this.pageIdx < this.maxPageIdx + 1) {
				startIdx = this.pageIdx * 10;
				stopIdx = startIdx + 10;
				this.pageIdx++;
				console.log(this.pageIdx);
			}
		}
		if (idx === '-') {
			if (this.pageIdx > 0) {
				this.pageIdx--;
				console.log(this.pageIdx);
				stopIdx = this.pageIdx * 10;
				startIdx = stopIdx - 10;
			}
		}
		if (startIdx + stopIdx >= 0) {
			this.pagedBlogList = [];
			for (let t = startIdx; t < stopIdx;) {
				if (this.blogList[t]) {
					this.pagedBlogList.push(this.blogList[t]);
				}
				t++;
			}
			console.log('start - ' + startIdx + '- stop -' + stopIdx);
			this.pagedBlogList.push(new Blog('_nav', '', '', ''));
		}
	}

	constructor() { }

	ngOnInit() {
		this.blogList.push(new Blog('01012018', 'Layered application', '', 'Monday, 1 Jan 2018'));
		this.blogList.push(new Blog('01022018', 'Classes explained', '', 'Tuesday, 2 Jan 2018'));
		this.blogList.push(new Blog('01032018', 'Business objects', '', 'Wednesday, 3 Jan 2018'));
		this.blogList.push(new Blog('01042018', 'XML', '', 'Thrursday, 4 Jan 2018'));
		this.blogList.push(new Blog('01052018', 'JSON', '', 'Friday, 5 Jan 2018'));
		this.blogList.push(new Blog('01062018', 'Server-side Applications', '', 'Saturday, 6 Jan 2018'));
		this.blogList.push(new Blog('01072018', 'Client-side applications', '', 'Monday, 8 Jan 2018'));
		this.blogList.push(new Blog('01082018', 'Web services', '', 'Tuesday, 9 Jan 2018'));
		// this.blogList.push(new Blog('01092018','Server-server communications','','10 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST1 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP2 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST3 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP4 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST5 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP6 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST7 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP8 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST9 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP11 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST12 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP13 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST14 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP15 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST16 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP17 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST18 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP19 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST20 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP21 services', '', 'Thrusday, 12 Jan 2018'));
		this.blogList.push(new Blog('01102018', 'REST22 Services', '', 'Wednesday, 10 Jan 2018'));
		this.blogList.push(new Blog('01122018', 'SOAP23 services', '', 'Thrusday, 12 Jan 2018'));
		/*
		this.blogList.push(new Blog('01132018','SOAP services','','13 Jan 2018'));
		this.blogList.push(new Blog('01142018','API services','','14 Jan 2018'));

		this.blogList.push(new Blog('01152018','Encode and decode','','15 Jan 2018'));
		this.blogList.push(new Blog('01162018','Entity and context','','16 Jan 2018'));
		this.blogList.push(new Blog('01172018','Encryption and decryption','','17 Jan 2018'));

		this.blogList.push(new Blog('01192018','Certificates explained','','19 Jan 2018'));
		this.blogList.push(new Blog('01202018','Setup .NET environment','','20 Jan 2018'));
		this.blogList.push(new Blog('01212018','Setup java environment','','21 Jan 2018'));

		this.blogList.push(new Blog('01222018','Setuo node.js with angular','','22 Jan 2018'));
		this.blogList.push(new Blog('01232018','Design patterns','','23 Jan 2018'));
		this.blogList.push(new Blog('01242018','Abstract factory','','24 Jan 2018'));
		*/

		this.selectedBlog = this.blogList[0];
		for (let n = 0; n < 10;) {
			this.pagedBlogList.push(this.blogList[n]);
			n++;
		}
		this.maxPageIdx = Math.floor(this.blogList.length / 10);
		this.pageIdx = 1;
		console.log(this.pageIdx);
		this.pagedBlogList.push(new Blog('_nav', '', '', ''));
	}
}
