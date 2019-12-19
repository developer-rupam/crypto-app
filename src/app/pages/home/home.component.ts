import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public reviewMeta: OwlOptions = {
    loop: true,
		nav: false,
		dots: true,
		items: 3,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
  }
  public reviewText: OwlOptions = {
    loop: true,
		nav: false,
		dots: true,
		items: 1,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
  }



  constructor() { }

  ngOnInit() {
  }

}
