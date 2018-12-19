import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Instadata } from '../instadata';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

	private getUrl : string = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
	private accessToken: string = '5382817305.8cb2231.7c27fd41e3d544368133abdb65063a75';

  constructor(private http: HttpClient) { }



	getFeed(count: number) {
		return this.http.get<Instadata>(this.getUrl + this.accessToken + '&count=' + count);
	}
}
