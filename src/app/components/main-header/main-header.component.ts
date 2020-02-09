import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router";
import { Helper } from "../../utils/helper";
import { PROJECTNAMEALIAS } from '../../utils/init';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public isCollapsed : boolean = true;
  public isUserLoggedIn : boolean = false;

  constructor(private router:Router,private helper:Helper) { 
    
  }

  
  ngOnInit() {
    if(localStorage.getItem(PROJECTNAMEALIAS+'_user_id') != undefined){
      this.isUserLoggedIn=true;
    }else{
      this.isUserLoggedIn=false;
    }
    
  }


}
