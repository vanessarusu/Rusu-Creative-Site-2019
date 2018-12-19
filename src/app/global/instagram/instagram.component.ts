import { Component, OnInit } from '@angular/core';
import { InstagramService } from './../instagram-service.service'
import { Instadata } from '../../instadata';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
	feed : Instadata;
	username: string;

  constructor(private instagramService: InstagramService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.forEach(data => {
      this.feed = data.feed;
      this.username = '@' + this.feed[0].user.username;
    });
  	
  }

}
