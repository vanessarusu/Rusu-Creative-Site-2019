import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import {Router, NavigationEnd} from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import * as moment from 'moment';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
	apiHost = 'https://vanessasink.com/wp/wp-json';
  showDefaultMessage = true; // default state
  title = 'vanessa\'s ink &mdash; a branding and web development studio for start-ups and small businesses';
  token = null;
  headers;



  constructor(private http: HttpClient, public router:Router) {
  	this.router.events.subscribe(event => {
  		if(event instanceof NavigationEnd) {
  			ga('set', 'page', event.urlAfterRedirects);
  			ga('send', 'pageview');
  		}
  	});
  }

  ngOnInit() {
  	if(! (this.getCookie('jauth'))) {
		this.headers = new HttpHeaders();
		this.createAuthorizationHeader(this.headers);
		this.http.post(this.apiHost + '/jwt-auth/v1/token', {
		username: 'application',
		password: 'OLBMzH4qzJ2a4yD4'
		}, {headers : this.headers})
		.subscribe((response:any) => {
		if(response.token) {
		this.token = response.token;
		this.setCookie('jauth',response.token, 20);
		this.headers = this.headers.set('Authorization', 'Bearer '+this.getCookie('jauth'));

		}
      } )
  	}

  }


  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

	setCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}

	getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	eraseCookie(name) {   
		document.cookie = name+'=; Max-Age=-99999999;';  
	}



  toggleDefaultMessage(state: boolean) {
    this.showDefaultMessage = state;
}

}