import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { PostSingleComponent } from './global/post-single/post-single.component';
import { PostListComponent } from './global/post-list/post-list.component';
import { ProjectSingleComponent } from './global/project-single/project-single.component';
import { AboutComponent } from './about/about.component'
import { InstagramComponent } from './global/instagram/instagram.component'
import { InstagramResolverService } from './global/instagram-resolver.service';
import { ProjectResolverService } from './global/project-single/project-resolver.service';
import { BrandsResolverService } from './home/brands/brands-resolver.service';
import { WorkResolverService } from './work/work-resolver.service';
import { AboutResolverService } from './about/about-resolver.service';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { ServicesResolverService } from './services/services-resolver.service';
import { FormComponent } from './contact/form/form.component';
import { BrandAuditComponent } from './brand-audit/brand-audit.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { PrivacyPolicyComponent } from './global/privacy-policy/privacy-policy.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes: Routes = [
	{ 
		path: "",
		component: HomeComponent,
		resolve : {
		},
		data: {
			projectCategoryId: 4
		}
	},
	{
		path: "posts",
		component: PostListComponent
	},
	{
		path: "posts/:id",
		component: PostSingleComponent
	},
	{
		path: "blog",
		component: PostListComponent
	},
	{
		path: "work/:slug",
		component: ProjectSingleComponent,
		resolve: {
			currentProject: ProjectResolverService
		}
	}, 
	{
		path: "about",
		component: AboutComponent,
		resolve : {
			feed: InstagramResolverService,
			content: AboutResolverService
		},
		data: {
			postID: 245
		}
	},
	{
		path: "work",
		component: WorkComponent,
		resolve : {
			posts: WorkResolverService,
			brands: BrandsResolverService,
			feed: InstagramResolverService
		},
		data: {
			brandsPageId: 86,
			projectCategoryId: 6
		}
	},
	{
		path: "services",
		component: ServicesComponent,
		resolve: {
			services: ServicesResolverService,
			feed: InstagramResolverService
		},
		data: {
			servicesCategoryId: 7
		}
	},
	{
		path: "connect",
		component: FormComponent,
		resolve: {
			feed: InstagramResolverService
		}
	},
	{
		path: "free-brand-audit-guide",
		component: BrandAuditComponent,
	},
	{	
		path: "news",
		component: NewsComponent
	},
	{
		path: "feedback",
		component: FeedbackComponent
	},
	{
		path: "privacy-policy",
		component: PrivacyPolicyComponent
	},
	{ 
		path: "404", 
		component: NotFoundComponent,
		resolve : {
			feed: InstagramResolverService,
		},
	},
	{ 
		path: "**",
		component: NotFoundComponent,
		resolve : {
			feed: InstagramResolverService,
		}
	},

];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
