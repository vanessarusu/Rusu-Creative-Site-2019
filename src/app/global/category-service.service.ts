import { Injectable } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {

  posts: any;
	private getUrl : string = 'http://localhost:8888/2018/bower_components/wordpress/wp-json/wp/v2/categories';
	private getCustomFieldsUrl : string = 'http://localhost:8888/2018/bower_components/wordpress/wp-json/acf/v3/posts'

  constructor(private wpApiPosts: WpApiPosts, private http: HttpClient) { }

	getCategoryNames() {
		return this.http.get(this.getUrl);
	}
}

