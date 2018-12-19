import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PostServiceService } from './../post-service.service'
import { CategoryServiceService } from './../category-service.service'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Post } from '../../post';
import * as moment from 'moment';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})

export class PostSingleComponent implements OnInit, AfterViewInit {

	@ViewChildren('sliderImage') sliderImage: QueryList<any>;
	@ViewChildren('sliderContainer') sliderContainer: QueryList<any>;

	postId: any;
	currentPost : Post;
	heroImages: any;
	sliderImages: any[];
	supportingCallout : String;
	active: boolean = false;
  readableDate: any;
  customFields: any;
  superTitle: string;
  categoryData: any;
  author: string;
  primaryColor: string;
  secondaryColor: string;


  constructor(private postService: PostServiceService, private categoryService: CategoryServiceService, private activatedRoute: ActivatedRoute) { }

  getPost(id) {
  	this.postService.getSinglePost(id)
  	.subscribe(data => {
  		this.currentPost = Object.assign(new Post(), data); 
  		this.readableDate = this.currentPost.readableDate(this.currentPost.date);
      this.postService.getAuthor(this.currentPost.author)
      .subscribe(res => {
        //this.author = res.name;
      })
  	});
  }

  getCustomFields(id) {
  	this.postService.getSinglePostCustomFields(id)
  	.subscribe(data => {this.customFields = data; 
		var parser = new DOMParser();
		var doc = parser.parseFromString(this.customFields.acf.hero_images, "application/xml");
		this.heroImages = doc.querySelectorAll('img');

		this.supportingCallout = this.customFields.acf.supporting_callout;
    this.superTitle = this.customFields.acf.super_title;
    this.primaryColor = this.customFields.acf.custom_primary_color;
    this.secondaryColor = this.customFields.acf.custom_secondary_color;
    this.setColorTheme();
  	});
  }

  getCategoryNames() {
    this.categoryService.getCategoryNames()
    .subscribe(data => {
      this.categoryData = data;
    });
  }

  getAuthorData(id) {
    this.categoryService.getCategoryNames()
    .subscribe(data => {
      this.categoryData = data;
    });
  }

  ngOnInit() {
  	this.activatedRoute.params.subscribe((params: Params) => {
  		this.postId = params.id;
  	});
  	this.getPost(this.postId);
  	this.getCustomFields(this.postId);
    this.getCategoryNames();
    
  }
  ngAfterViewInit() {
  	this.sliderImage.changes.subscribe((val) => {
  		this.sliderImages = val._results.map((el) => { return el.nativeElement });
	 });
  }

  setColorTheme() {
    document.documentElement.style.setProperty('--primary-color', this.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);

  }

}
