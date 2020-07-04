import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PostServiceService } from './../post-service.service';
import { Title, Meta } from "@angular/platform-browser";
import { Post } from '../../post';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss']
})

export class ProjectSingleComponent implements OnInit {
	currentProject: Post;
  primaryColor: String;
  secondaryColor: String;
  linkColor: String;
  bodyFontColor: String;
  categories: String;
  subtext: String;
  clientWebsite: String;
  solutionOverview: String;
	slug: string;
  showOverviewScroll: boolean = true;
  pageTitle : String;
  CTAPanel: any;

  constructor(private postService: PostServiceService, private activatedRoute: ActivatedRoute, private title:Title, private meta:Meta, private cdRef:ChangeDetectorRef) { }

  scroll(el) {
    el.scrollIntoView({behavior: "smooth"});
  }

  ngOnInit() {
   this.currentProject = this.activatedRoute.snapshot.data.currentProject;
   this.primaryColor = this.currentProject.acf.custom_primary_color;
   this.secondaryColor = this.currentProject.acf.custom_secondary_color;
   this.bodyFontColor = this.currentProject.acf.body_text_color;
   this.categories = this.currentProject.acf.categories;
   this.subtext = this.currentProject.acf.subtext;
   this.clientWebsite = this.currentProject.acf.website;
   this.solutionOverview = this.currentProject.acf.solution_overview;
   this.linkColor = this.currentProject.acf.link_color;
   this.pageTitle = this.currentProject.title.rendered;
   this.title.setTitle('[ '+this.pageTitle+' ] — '+this.categories +' by Vanessa\'s Ink');
   this.meta.removeTag('name="description"');
   this.meta.removeTag('name="keywords"');
   this.meta.removeTag('name="title"');
   this.meta.addTags([
      {name: 'title', content: this.pageTitle.toString() + ' - a portfolio project by Vanessa\'s Ink'},
      {name: 'keywords', content: this.categories.toString() + ', brand studio, branding for startups, graphic design, design studio, creative studio, Vancouver, Ontario, Burnaby, Waterloo, Kitchener'},
      {name: 'description', content: this.subtext.toString()},
      {name: 'robots', content: 'index, follow'}
    ]);

   this.postService.getSinglePost(535).subscribe((data) => {
     this.CTAPanel = data;
     return this.cdRef.detectChanges();
   });
  }

}
