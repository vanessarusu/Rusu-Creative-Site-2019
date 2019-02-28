import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';


@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
	animations : [

		trigger('enterAnim', [
			transition('* => *', [
				query('p', 
					style({
						opacity: '0',
						clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 10%)',
						transform: 'translateY(30px)'
					}), 
				),
				query('.callout', 
					style({ 
						opacity: '0',
						transform: 'translateY(8px)'
					})
				),
				query('.callout', 
					animate('800ms cubic-bezier(.28,.19,.18,1.15)', 
						style({
							opacity: '0.08',
							transform: 'translateY(0)'
						}), 
					), { delay: '300ms' }
				),
				query('p', 
					stagger('200ms', [
						animate('600ms cubic-bezier(.28,.19,.18,1.15)', 
							style({
								clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
								opacity: '1',
								transform: 'translateY(0)'
							})
						) 
					]), 
				),
			])
		]),
	]
})
export class HeroComponent implements OnInit, AfterViewInit {
	fade: string = 'none';

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	this.fade = 'in';
  	this.ref.detectChanges();
  }


}
