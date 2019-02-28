import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './../../global/post-service.service'

@Component({
  selector: 'app-values-block',
  templateUrl: './values-block.component.html',
  styleUrls: ['./values-block.component.scss']
})
export class ValuesBlockComponent implements OnInit {
	valuesBlock: any;
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
  	this.getContent();
  }

  getContent() {
  	this.postService.getSinglePost(145)
    .subscribe(data => { this.valuesBlock = data; });
  }

}
