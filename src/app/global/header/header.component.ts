import { Component, OnInit, HostListener, Directive, NgModule, Input, OnDestroy, Renderer2 } from '@angular/core';
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
  private mobileMenu: boolean = false;;
  private mobileBreakpoint: number = 1024

  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}

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
    if(window.innerWidth <= this.mobileBreakpoint) {
      this.isMobile = true;
    }
  }

}
