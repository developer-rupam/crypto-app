import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utils/helper';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName:string;
  public lastName:string;
  public email:string;
  public password:string;
  public showLoader: boolean = false;

  constructor(public helper:Helper, public router:Router) { }

  /** Function defination for signup **/
  signup = () => {
    if(
      this.firstName != undefined && this.firstName!='' &&
      this.lastName != undefined && this.lastName!='' &&
      this.email != undefined && this.email!='' &&
      this.password != undefined && this.password!='' 
    ){

    }else{
      this.helper.showAlert('Please Provide All Valid Details','error')
    }
  }
  ngOnInit() {
  }

}
