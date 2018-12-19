import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { PostServiceService } from './../post-service.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectResolverService implements Resolve<any> {

	constructor(private postService : PostServiceService, private activatedRoute: ActivatedRoute) {}
	resolve(route: ActivatedRouteSnapshot) {
		return this.postService.getSinglePostBySlug(route.params.slug).pipe(map(data => { console.log(data[0]); return data[0] }));
	}
}
