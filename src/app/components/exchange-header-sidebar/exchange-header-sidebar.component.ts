import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-header-sidebar',
  templateUrl: './exchange-header-sidebar.component.html',
  styleUrls: ['./exchange-header-sidebar.component.css']
})
export class ExchangeHeaderSidebarComponent implements OnInit {

  public isCollapsed : boolean = false;
  

  constructor() { }

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
