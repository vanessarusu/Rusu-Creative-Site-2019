import { Component, OnInit, Input } from '@angular/core';
import { Headers } from '@angular/http';
import { PostServiceService } from './../post-service.service'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	//@Input() token;
    posts : any;

  constructor(private postService: PostServiceService) {}

	 getPosts() {
		this.postService.getPostsByCategory(2)
		.subscribe(data => { this.posts = data; });
	}

  ngOnInit() {
  	this.posts = this.getPosts()
  }

}
