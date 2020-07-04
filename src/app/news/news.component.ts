import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	public showSuccess: boolean = false;
	public hideForm: boolean = false;

  constructor() { }
  submitToggle() {
  	 this.showSuccess = true;
  	 this.hideForm = true;
  }

  ngOnInit() {
  }

}
