import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../utils/service";


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

  constructor(public helper:Helper, public router:Router, public service:Service) { }

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

  /*** Function defination for checking email if exist ***/
  checkEmailIfExist = () => {
    this.showLoader = true;
    this.service.checkEmail(this.email).subscribe(data=>{
      this.showLoader = false;
      if(data.error.error_status){
        this.helper.showAlert(data.error.error_msg,'error');
      }else{
        
      }
    },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
    });
  }

  ngOnInit() {
  }

}
