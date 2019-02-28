import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../global/post-service.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
	services: Post[];
	brandRefinement: Post;
	webDesign: Post;
	brandSupport: Post;

  constructor(private postService: PostServiceService, private activatedRoute: ActivatedRoute, private title: Title) {
  	this.title.setTitle('Services - Vanessa\'s Ink / a creative studio')
  }

  scroll(el) {
    el.scrollIntoView({behavior: "smooth"});
  }

  ngOnInit() {
  	this.services = this.activatedRoute.snapshot.data.services;
  	this.brandRefinement = this.services[2];
  	this.webDesign = this.services[1];
  	this.brandSupport = this.services[0];
  }

}