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
	form;
  

  constructor(private postService: PostServiceService, private title:Title) {
		this.title.setTitle('Connect - Vanessa\'s Ink / a creative studio');

  }

  ngOnInit() {}
  submitForm() {
  	this.submitted = true;

  	let formData: FormData = new FormData();
  	formData.append('your-email', this.model.email);
  	formData.append('your-name', this.model.name);
  	formData.append('your-message', this.model.message);
  	formData.append('your-subject', 'Website Form Submission: '+this.model.intent);
  	this.form = this.postService.getForm(324, formData).subscribe((res) => {
  		return res;
  	});
  }



}
