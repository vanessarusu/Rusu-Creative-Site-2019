import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../global/post-service.service'
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Title } from "@angular/platform-browser";

import { Post } from '../post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	aboutContent:Post;

  constructor(private postService: PostServiceService, private activatedRoute: ActivatedRoute, private title:Title) {
  	this.title.setTitle('About - Vanessa\'s Ink / a creative studio')
  }

  ngOnInit() {
  	this.aboutContent = this.activatedRoute.snapshot.data.content;
  }

}
