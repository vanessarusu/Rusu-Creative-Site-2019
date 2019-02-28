import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
import { PostServiceService } from '../global/post-service.service';

@Injectable({
  providedIn: 'root'
})
export class AboutResolverService implements Resolve<any> {

  constructor(private postService : PostServiceService, private activatedRoute: ActivatedRoute) {}
  resolve(route: ActivatedRouteSnapshot) {
		return this.postService.getSinglePost(route.data.postID).pipe(map(data => { return data; }));
	}
}
