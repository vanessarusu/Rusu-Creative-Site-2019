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


const routes: Routes = [
	{ 
		path: "",
		component: HomeComponent,
		resolve : {
			feed: InstagramResolverService,
			posts: WorkResolverService
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
			projectCategoryId: 4
		}
	},
	{
		path: "services",
		component: ServicesComponent,
		resolve: {
			services: ServicesResolverService
		},
		data: {
			servicesCategoryId: 7
		}
	},
	{
		path: "connect",
		component: FormComponent,
	},
	{
		path: "free-brand-audit-guide",
		component: BrandAuditComponent,
	}

];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
