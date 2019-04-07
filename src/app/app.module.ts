import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from 'ng-custom-select';


import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { ServicesOverviewComponent } from './home/services-overview/services-overview.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostListComponent } from './global/post-list/post-list.component';
import { PostSingleComponent } from './global/post-single/post-single.component';
import { FeaturedWorkComponent } from './home/featured-work/featured-work.component';
import { BrandsComponent } from './home/brands/brands.component';
import { ProjectSingleComponent } from './global/project-single/project-single.component';
import { ContactCtaComponent } from './global/contact-cta/contact-cta.component';
import { InstagramComponent } from './global/instagram/instagram.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './contact/form/form.component';
import { ValuesBlockComponent } from './global/values-block/values-block.component';
import { SpecificsFlyoutComponent } from './global/specifics-flyout/specifics-flyout.component';
import { BrandAuditComponent } from './brand-audit/brand-audit.component';
import { FooterComponent } from './global/footer/footer.component';
import { NotFoundComponent } from './global/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    AuthenticationComponent,
    PostListComponent,
    PostSingleComponent,
    ServicesOverviewComponent,
    FeaturedWorkComponent,
    BrandsComponent,
    ProjectSingleComponent,
    ContactCtaComponent,
    InstagramComponent,
    AboutComponent,
    WorkComponent,
    ServicesComponent,
    FormComponent,
    ValuesBlockComponent,
    SpecificsFlyoutComponent,
    BrandAuditComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
    
    BrowserAnimationsModule,
    routingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    WpApiModule.forRoot({ // <---
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  providers: [],
})
export class AppModule { }


export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'vanessarusu.com/vanessasink/wp/wp-json/wp/v2/', '');
}