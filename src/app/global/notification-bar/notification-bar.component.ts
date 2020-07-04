import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostServiceService } from '../../global/post-service.service'


@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})

export class NotificationBarComponent implements OnInit {
	public show: boolean = true;
	public copy: any = null;

  constructor(private postService: PostServiceService, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  	this.postService.getPostsByCategory(8).subscribe((res) => {
	    this.copy = res[0];
	    this.cdRef.detectChanges();
	  });
  }
  dismiss() {
  	return this.show = false;
  }

}
