import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../../global/post-service.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BrandsResolverService {
	brandsPageId: number = 86;

  constructor(private postService : PostServiceService, private activatedRoute: ActivatedRoute) { }
  resolve(route: ActivatedRouteSnapshot) {

  	if(route.data.brandsPageId) {
  		this.brandsPageId = route.data.brandsPageId;
  	}
  	console.log(this.brandsPageId)
		return this.postService.getPage(this.brandsPageId).pipe(map(data => { return data; }));
	}
}

