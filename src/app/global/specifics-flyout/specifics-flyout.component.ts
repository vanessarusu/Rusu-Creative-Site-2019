import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './../../global/post-service.service'


@Component({
  selector: 'app-specifics-flyout',
  templateUrl: './specifics-flyout.component.html',
  styleUrls: ['./specifics-flyout.component.scss']
})
export class SpecificsFlyoutComponent implements OnInit {
	specificsList: any;
	specs: boolean = false;
  constructor(private postService: PostServiceService) { }

	ngOnInit() {
		this.getContent();
	}

	getContent() {
		this.postService.getSinglePost(143)
		.subscribe(data => { this.specificsList = data; });
	}

	specsClick() {
		this.specs = !this.specs;
	}

}
