import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-brand-audit',
  templateUrl: './brand-audit.component.html',
  styleUrls: ['./brand-audit.component.scss']
})
export class BrandAuditComponent implements OnInit {

  constructor(private title:Title) {
  	this.title.setTitle('Brand Audit Guide - Vanessa\'s Ink / a creative studio')
  }

  ngOnInit() {
  }

}
