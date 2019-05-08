import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-cta',
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent implements OnInit {
	public showSuccess: boolean = false;
	public hideForm: boolean = false;

  constructor() { }
  submitToggle() {
  	 this.showSuccess = true;
  	 this.hideForm = true;
  }

  ngOnInit() {
  }

}
