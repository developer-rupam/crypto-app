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
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/dashboard'
        ){

          this.showHeader = true;
          this.showFooter = true;
          this.showExchangeHeaderSidebar = false;
          this.showExchangeFooter = false;

        }else if(
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') == '/login' ||
          localStorage.getItem(PROJECTNAMEALIAS+'_current_route') == '/signup'
        ){

          //this.showHeader = true;
          //this.showFooter = true;
          this.showExchangeHeaderSidebar = false;
          this.showExchangeFooter = false;

        }else{

          this.showHeader = false;
          this.showFooter = false;
          this.showExchangeHeaderSidebar = true;
          this.showExchangeFooter = true;

        }
        
      }
    });
  }
}


