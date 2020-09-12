import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router, Route } from "@angular/router";
import { Helper } from "../../../utils/helper";
import { PROJECTNAMEALIAS } from '../../../utils/init';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  public loggedInUserName:string = localStorage.getItem(PROJECTNAMEALIAS + '_admin_name');
  public isCollapsed : boolean = false;
  @Output() public isCollapsedButtonClicked = new EventEmitter();

  constructor(private router:Router,private helper:Helper) { }

  /*** function defination for collapse sidebar ***/
  collapseSidebar = () => {
    if(this.isCollapsed == true){
      this.isCollapsed = false;
      this.isCollapsedButtonClicked.emit(false);
     
    }else{
      this.isCollapsed = true;
      this.isCollapsedButtonClicked.emit(true);
      
    }
  }

  /***  function defination for logout functionality ***/
  clickLogout = () => { this.helper.adminLogout(); }

  ngOnInit() {
  }

}
