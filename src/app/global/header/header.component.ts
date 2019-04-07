import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, HostListener, Directive, NgModule, Input, OnDestroy, Renderer2 , Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@NgModule({
  imports: [ BrowserModule ],
})


export class HeaderComponent implements OnInit {
	public navIsFixed: boolean = false;
	public state : string = 'inactive';

	private isActive: boolean = false;
	private isMobile: boolean = false;
  public mobileMenu: boolean = false;;
  private mobileBreakpoint: number = 1024

  constructor(@Inject(WINDOW) private window: Window, private renderer: Renderer2, private route: ActivatedRoute) {}

@HostListener('window:resize', ['$event'])
 onResize(event) {
   if(event.target.innerWidth >= this.mobileBreakpoint) {
     this.mobileMenu = false;
     this.isMobile = false;
   }
   else {
     this.isMobile = true;
   }
 }

  toggleMenu() {
    if(this.isMobile) {
        this.mobileMenu = !this.mobileMenu;
        if(this.mobileMenu) {
          this.renderer.addClass(document.body, 'modal-open');
        }
        else {
          this.renderer.removeClass(document.body, 'modal-open');
        }
      return this.mobileMenu;
    }
  }

  goTo(id:string) {
    document.querySelector("#brandAudit").scrollIntoView();
  }



  ngOnInit() {
    if(this.window.innerWidth <= this.mobileBreakpoint) {
      this.isMobile = true;
    }
    console.log('%c \u00A9 2019 Vanessa\'s Ink. hello@vanessasink.com :) ', 'font-size: 16px; color: #ffb100; padding: 20px;');
  }

}
