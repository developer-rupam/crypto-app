import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router";
import { Helper } from "../../utils/helper";
import { PROJECTNAMEALIAS } from '../../utils/init';

@Component({
  selector: 'app-exchange-header-sidebar',
  templateUrl: './exchange-header-sidebar.component.html',
  styleUrls: ['./exchange-header-sidebar.component.css']
})
export class ExchangeHeaderSidebarComponent implements OnInit {

  public isCollapsed : boolean = false;
  

  constructor(private router:Router,private helper:Helper) { }

  /*** function defination for collapse sidebar ***/
  collapseSidebar = () => {
    if(this.isCollapsed == true){
      this.isCollapsed = false;
     
    }else{
      this.isCollapsed = true;
      
    }
  }
  ngOnInit() {
  }

}
