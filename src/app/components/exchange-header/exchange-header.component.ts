import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router, Route } from "@angular/router";
import { Helper } from "../../utils/helper";
import { PROJECTNAMEALIAS } from '../../utils/init';

@Component({
  selector: 'app-exchange-header',
  templateUrl: './exchange-header.component.html',
  styleUrls: ['./exchange-header.component.css']
})
export class ExchangeHeaderComponent implements OnInit {

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

  ngOnInit() {
  }

}
