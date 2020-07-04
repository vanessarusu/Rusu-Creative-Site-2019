import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './../../global/post-service.service';
import { Post } from '../../post';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
	model:any = {
		name : '',
		email: '',
		intent: 'Brand Refinement',
		message: ''
	};
	submitted = false;
	intent:Array<string> = ['Brand Refinement','Web Design & Development','Brand Support', 'Consultation', 'Other'];


	styleGuide: {
		caretClass: 'caret',
		selectBoxClass: 'dropdown-wrapper',
		selectMenuClass: 'dropdown',
		optionsClass: 'option' 
	}
  formData: FormData = new FormData();
	form;
  

  constructor(private postService: PostServiceService, private title:Title) {
		this.title.setTitle('[ connect ] — vanessa\'s ink — a branding and web development studio for start-ups and small businesses');

  }

  ngOnInit() {
    // this.submitted = true; - for testing
  }
  submitForm() {
  	this.submitted = true;

  	this.formData.append('your-email', this.model.email);

  	this.formData.append('your-name', this.model.name);
  	this.formData.append('your-message', this.model.message);
  	this.formData.append('your-subject', 'Website Form Submission: '+this.model.intent);

  	this.form = this.postService.getForm(324, this.formData).subscribe((res) => {
  		return res;
  	});
  }



}
