import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-exchange-sidebar',
  templateUrl: './exchange-sidebar.component.html',
  styleUrls: ['./exchange-sidebar.component.css']
})
export class ExchangeSidebarComponent implements OnInit {

  @Input() isCollapsed:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
