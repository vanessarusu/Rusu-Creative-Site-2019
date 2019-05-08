import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, HostBinding, HostListener , Inject} from '@angular/core';
import { PostServiceService } from '../../global/post-service.service'
import { map } from 'rxjs/operators';
import { Post } from '../../post';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss'],
  animations : [

  trigger('hoverTrigger', [
      state('true', style({
        background: '{{bg}}',
        opacity: '0.95'
      }), {params: { bg: "blue"}}),
      state('false', style({
        background: 'transparent',
        opacity: '1'
      })),
      transition('false => true', [
        animate('0.2s')
      ])
    ]),
  ]
})

export class FeaturedWorkComponent implements OnInit {
	posts: Post[];
	width: number;

  constructor(@Inject(WINDOW) private window: Window, private postService: PostServiceService, private activatedRoute: ActivatedRoute) { }

	@HostListener('window:resize', ['$event'])
		onResize(event) {
		this.width = event.currentTarget.innerWidth;
	}

	mouseEnter(post) {
		if(this.width >= 769) {
			post.hover = true;
		}
	}
	mouseLeave(post) {
		if(this.width >= 769) {
			post.hover = false;
		}
	}
  stripTrailingSlash(str) {
    return str.endsWith('/') ?
        str.slice(0, -1) :
        str;
  }
  sortPosts(posts) {
    posts.map(el => {
        el.primaryColor = el.acf.custom_primary_color;
        //strip away file name so webp can be added
        el.link = this.stripTrailingSlash(el._embedded['wp:featuredmedia']['0'].source_url.replace(/\.[^/.]+$/, ""));
        if(el.acf.dark_hover_title === true) {
          el.darkHeader = true;
        }
        else {
          el.darkHeader = false;
        }
        if(el.acf.light_hover_description === true) { el.lightDescription = true }
          else {
            el.lightDescription = false;
          }
      });
  }

  ngOnInit() {
    if(this.activatedRoute.snapshot.data.posts) {
      this.posts = this.activatedRoute.snapshot.data.posts;
      this.sortPosts(this.posts);
    }
    else {
      this.postService.getPostsByCategory(4).subscribe((res) => {
        this.posts = res;
        this.sortPosts(this.posts);
      });
    }
  	this.width = this.window.innerWidth;
  }
}
