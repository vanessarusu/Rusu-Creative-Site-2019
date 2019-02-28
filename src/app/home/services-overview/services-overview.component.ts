import { Component, HostListener, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Headers } from '@angular/http';
import { PostServiceService } from './../../global/post-service.service'
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss'],
  animations : [


  trigger('enterAnim', [

  	transition('false => true', [
  			query('div', [
  				style({
  					opacity: '0',
  					transform: 'translateY(10px)'
  				}),
			]),
			query('div', 
				stagger(200, [
            		animate('400ms ease-out', style({ 
            			opacity: 1, 
            			transform: 'translateY(0px)'
            		})),
          		]),
			)
  		])
	]),

  ]
})

export class ServicesOverviewComponent implements OnInit, AfterViewInit {
	threeKings: any;
  specificsList: any;
  valuesBlock: any;
	fadeIn: boolean = false;
  specs: boolean = false;

  constructor(private postService: PostServiceService, public el: ElementRef, private ref: ChangeDetectorRef) { }


  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition-400) {
        this.fadeIn = true;
      }
    }





	getPosts() {
		this.postService.getSinglePost(63)
		.subscribe(data => { this.threeKings = data; });

    this.postService.getSinglePost(143)
    .subscribe(data => { this.specificsList = data; });
	}
	animationDone($event) {
    	// console.log('End');
  	}
    specsClick() {
      this.specs = !this.specs;
    }


  ngOnInit() {
  	this.getPosts();
  }

  ngAfterViewInit() {
  	this.fadeIn = false;
  	this.ref.detectChanges();
  }

}
