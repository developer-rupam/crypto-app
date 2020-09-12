import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../../utils/service";
import { PROJECTNAMEALIAS } from "../../../utils/init"
import { NgLocalization } from '@angular/common'; 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public username : string;
  public password : string;
  public showLoader: boolean = false;

  constructor(public helper:Helper, public router:Router,public service:Service) { }

  /*** function defination for Login ***/
  login(){
    if(this.username!=undefined && this.password!=undefined){
     this.showLoader = true; 
     this.service.adminLogin(this.username,this.password).subscribe(data=>{
      this.showLoader = false;
      if(data['error'].error_status){
        this.helper.showAlert(data['error'].error_msg,'error');
      }else{
       
        var user = data['user'];
        localStorage.setItem(PROJECTNAMEALIAS + '_admin_id',user.admin_id);
        localStorage.setItem(PROJECTNAMEALIAS + '_admin_name',user.admin_name);
        localStorage.setItem(PROJECTNAMEALIAS + '_admin_email',user.admin_email);
        
        this.router.navigate(["/admin/dashboard"]);
      }
     },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
     })
    }else{
      this.helper.showAlert('Please Provide Valid Email & Password','error')
    }
  }

  /*** function defination for show hide placeholder ***/
  showHidePlaceholder = (event : any) =>{
    const value = event.target.value;
    if(value==''){
      event.target.previousSibling.style.display = 'block';
    }else{
      event.target.previousSibling.style.display = 'none';
    }
  }
  ngOnInit() {
  }

}
