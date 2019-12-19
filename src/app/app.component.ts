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
  public showFooter:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       // console.log(event.url);
        localStorage.setItem(PROJECTNAMEALIAS+'_current_route',event.url);
        if(localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/login' &&  localStorage.getItem(PROJECTNAMEALIAS+'_current_route') != '/signup'){
          this.showHeader = true;
          this.showFooter = true;
        }else{
          this.showHeader = false;
          this.showFooter = false;
        }
      }
    });
  }
}


