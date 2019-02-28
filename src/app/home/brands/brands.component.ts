import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Page } from '../../page';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  page : Page;
  logos: any = [];

  configureData(data) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(data.content.rendered, "text/html");
		const img = doc.getElementsByTagName("img");

		for (const item of Array.from(img)) {
     		this.logos.push(item);
		}
}

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.brands;
  	this.configureData(this.page);
  }

}
