import { Component, OnInit, HostListener, Directive, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
  trigger('sticky', [
  	state('inactive', style({
  	//	backgroundColor:'pink',
  		//position: 'fixed',
  	})),
  	state('active', style({
  	//	backgroundColor:'red',
  		//position: 'fixed',
  	})),
  	transition('inactive <=> active', animate('200ms ease-in'))
  	])
  ]
})

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ],
  // ... more stuff ...
})


export class HeaderComponent implements OnInit {
	public navIsFixed: boolean = false;
	public state : string = 'inactive';

	private isActive: boolean = false;
	private show: boolean = false;

  constructor() {}

  @HostListener('window:scroll', ['$event.target'])
  onScroll(el) {
  	let offset = el.documentElement.scrollTop;
  	if(offset > 0) {
  		this.navIsFixed = true;
  		this.toggleState(true);
  	}
  	else if(this.navIsFixed && offset <= 0) {
  		this.navIsFixed = false;
  		this.toggleState(false);
  		
  	}

 }
 toggleState(bool : Boolean) {
 	if (bool && !(this.state == 'active')) {
 		this.state = 'active';
 		// console.log('call');
 	}

    else if(!bool) {
    	this.state = 'inactive';
    	// console.log('else');
    }
    return this.state;
  }

  ngOnInit() {
  }

}
