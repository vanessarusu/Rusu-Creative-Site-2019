import { Injectable } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Page } from '../page';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
	posts: any;
	private getUrl : string = 'http://localhost:8888/2018/bower_components/wordpress/wp-json/wp/v2/posts';
	private getCustomFieldsUrl : string = 'http://localhost:8888/2018/bower_components/wordpress/wp-json/acf/v3/posts';
	private getAuthorUrl: string = 'http://localhost:8888/2018/bower_components/wordpress/wp-json/wp/v2/users';
	private getPageUrl : string = 'http://localhost:8888/2018/bower_components/wordpress/wp-json/wp/v2/pages/';

  constructor(private wpApiPosts: WpApiPosts, private http: HttpClient) { }

	getPostsByCategory(id : number){
		let params = {
			search: '?&_embed&categories='+id 
		} 
		return this.http.get<Post[]>(this.getUrl+params.search);
	}

	getSinglePost(id : number) {
		return this.http.get<Post[]>(this.getUrl + '/' + id +'?_embed=true');
	}
	
	getSinglePostBySlug(slug: string) {
		let params = {
			slug: '?slug='+slug
		}
		return this.http.get<Post[]>(this.getUrl+params.slug);
	}

	getSinglePostCustomFields(id: number) {
		return this.http.get<Post[]>(this.getCustomFieldsUrl + '/' + id);
	}

	getAuthor(id: number) {
		return this.http.get(this.getAuthorUrl + '/' + id);
	}
	getPage(id: number) {
		return this.http.get<Page>(this.getPageUrl + id);
	}

}
