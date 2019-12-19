import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utils/helper';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string;
  public password : string;
  public showLoader: boolean = false;


  constructor(public helper:Helper, public router:Router) { }

  /*** function defination for Login ***/
  login(){
    if(this.username!=undefined && this.password!=undefined){
      //TODO: call login api here
      alert(this.username+'   '+this.password )
    }else{
      this.helper.showAlert('Please Provide Valid Username & Password','error')
    }
  }
  ngOnInit() {
  }

}
