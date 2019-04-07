import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-brand-audit',
  templateUrl: './brand-audit.component.html',
  styleUrls: ['./brand-audit.component.scss']
})
export class BrandAuditComponent implements OnInit {

  constructor(private title:Title) {
  	this.title.setTitle('[ brand audit guide ] — vanessa\'s ink — a branding and web development studio for start-ups and small businesses')
  }

  ngOnInit() {
  }

}
