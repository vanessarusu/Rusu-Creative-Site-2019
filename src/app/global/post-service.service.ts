import { Injectable } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';
import { Page } from '../page';

@Injectable({
  providedIn: 'root'
})


export class PostServiceService {
	posts: any;
	private baseUrl : string = 'https://vanessasink.com/wp-json/';
	private getUrl : string = this.baseUrl+'wp/v2/posts';
	private getCustomFieldsUrl : string = this.baseUrl+'acf/v3/posts';
	private getAuthorUrl: string = this.baseUrl+'wp/v2/users';
	private getPageUrl : string = this.baseUrl+'wp/v2/pages/';
	private getFormUrl : string = this.baseUrl+'contact-form-7/v1/contact-forms/';

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
	getForm(id: number, data:any) {
		const headers = new HttpHeaders()
		.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvMjAxOFwvYm93ZXJfY29tcG9uZW50c1wvd29yZHByZXNzIiwiaWF0IjoxNTQ4NTM0OTE2LCJuYmYiOjE1NDg1MzQ5MTYsImV4cCI6MTU0OTEzOTcxNiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.wIGDZBWYak3zp_211w7Buu9ZRn9bZ4ir3hsBUUKyOcM')
		return this.http.post(this.getFormUrl+id+'/feedback', data, {headers: headers});
	}
}

