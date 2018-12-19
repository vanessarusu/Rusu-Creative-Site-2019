import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../global/post-service.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WorkResolverService implements Resolve<any> {

  constructor(private postService : PostServiceService, private activatedRoute: ActivatedRoute) { }
  resolve(route: ActivatedRouteSnapshot) {
		return this.postService.getPostsByCategory(route.data.projectCategoryId).pipe(map(data => { return data; }));
	}
}