import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title) {
  	this.title.setTitle('vanessa\'s ink — a branding and web development studio for start-ups and small businesses');
  }

  ngOnInit() {
  }

}
