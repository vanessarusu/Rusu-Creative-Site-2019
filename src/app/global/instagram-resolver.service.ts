import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InstagramService } from './instagram-service.service';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class InstagramResolverService implements Resolve<any> {
	limit: number = 5;

  constructor(private instagramService : InstagramService) { }

  resolve(route: ActivatedRouteSnapshot) {
  	return this.instagramService.getFeed(this.limit).pipe(map(data => { return data.data }));
  }

}
