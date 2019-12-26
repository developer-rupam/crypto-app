import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../utils/service";
import { PROJECTNAMEALIAS } from "../../utils/init"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string;
  public password : string;
  public showLoader: boolean = false;


  constructor(public helper:Helper, public router:Router,public service:Service) { }

  /*** function defination for Login ***/
  login(){
    if(this.username!=undefined && this.password!=undefined){
     this.showLoader = true; 
     this.service.login(this.username,this.password).subscribe(data=>{
      this.showLoader = false;
      if(data['error'].error_status){
        this.helper.showAlert(data['error'].error_msg,'error');
      }else{
       
        var user = data['user'];
        localStorage.setItem(PROJECTNAMEALIAS + '_user_id',user.user_id);
        localStorage.setItem(PROJECTNAMEALIAS + '_user_firstname',user.first_name);
        localStorage.setItem(PROJECTNAMEALIAS + '_user_lastname',user.last_name);
        localStorage.setItem(PROJECTNAMEALIAS + '_user_email',user.email);
        localStorage.setItem(PROJECTNAMEALIAS + '_user_status',user.status);
        //TODO: redirect to dashboard page 
         //this.router.navigate(["/login"]);
      }
     },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
     })
    }else{
      this.helper.showAlert('Please Provide Valid Email & Password','error')
    }
  }
  ngOnInit() {
  }

}
