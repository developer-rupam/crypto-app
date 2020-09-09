import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  @Input() isCollapsed:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
