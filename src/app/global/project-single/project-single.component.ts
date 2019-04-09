import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PostServiceService } from './../post-service.service';
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

  constructor(private postService: PostServiceService, private activatedRoute: ActivatedRoute) { }

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
  }

}
