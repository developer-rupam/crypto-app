import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { PROJECTNAMEALIAS } from '../app/utils/init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main-app';
  public showHeader:boolean = true;
  public showExchangeHeaderSidebar:boolean = true;
  public showFooter:boolean = true;
  public showExchangeFooter:boolean = true;
  public loggedInStatus:boolean = false;
  public isExchangeSidebarCollapsed:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       // console.log(event.url);
        localStorage.setItem(PROJECTNAMEALIAS+'_current_route',event.url);
        if(
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/login' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/signup' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/purchase' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/withdraw' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/profile' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/dashboard' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/transaction' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/admin/login' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/admin' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/admin/dashboard' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/admin/user-lists' &&
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/admin/user-details' 
        ){
          this.showHeader = true;
          this.showFooter = true;
          this.showExchangeHeaderSidebar = false;
          this.showExchangeFooter = false;
          this.loggedInStatus = false;

        }else if(
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') == '/login' ||
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') == '/signup'
        ){
          this.showHeader = true;
          this.showFooter = true;
          this.showExchangeHeaderSidebar = false;
          this.showExchangeFooter = false;
          this.loggedInStatus = false;

        }else if(localStorage.getItem(PROJECTNAMEALIAS+'_current_route').indexOf('admin') != -1 ){
          this.showHeader = false;
          this.showFooter = false;
          this.showExchangeHeaderSidebar = false;
          this.showExchangeFooter = false;
          this.loggedInStatus = false;
        }else{
          this.showHeader = false;
          this.showFooter = false;
          this.showExchangeHeaderSidebar = true;
          this.showExchangeFooter = true;
          this.loggedInStatus = true;

        }

        /*** checking for login status ***/
        /* if(localStorage.getItem(PROJECTNAMEALIAS + '_login_status') == '1'){
          this.loggedInStatus = true;
        }else{
          this.loggedInStatus = false
        } */
        
        
      }
    });
  }
}


