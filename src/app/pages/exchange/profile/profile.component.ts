import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../../utils/service";
import { PROJECTNAMEALIAS,COUNTRYLIST } from "../../../utils/init"
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public dayOfDobList : any = [];
  public yearOfDobList : any = [];
  public countryList : any  = COUNTRYLIST;

  public firstName : string = '';
  public lastName : string = '';
  public emailAddress : string = '';
  public phone : number ;
  public dob : string ;
  public dayOfDob : string = '';
  public monthOfDob : string = '';
  public yearOfDob : string = '';
  public country : string = '';
  public citizenship : string = '';
  public fiatAmount : string = '';
  public showLoader: boolean = false;

  constructor(public helper:Helper, public router:Router,public service:Service) { }

  /*** function for saving profile data ***/
  saveProfileData = () => {
    if(
      this.firstName !='' && this.lastName != '' &&
      this.emailAddress != '' && this.phone != undefined 
    ){
      this.showLoader = true;
      this.dob = this.dayOfDob + '-' +this.monthOfDob + '-' +this.yearOfDob;
      this.service.updateUser(localStorage.getItem(PROJECTNAMEALIAS + '_user_id'),this.firstName,this.lastName,this.emailAddress,this.phone,this.dob,this.country,this.citizenship,this.fiatAmount).subscribe(data=>{
        this.showLoader = false;
        if(data['error'].error_status){
          this.helper.showAlert(data['error'].error_msg,'error');
        }else{
         
          this.helper.showAlert('User Details Saved','success');
          this.getUserDetails();
         
        }
       },error=>{
        this.showLoader = false;
        this.helper.showAlert('Server Error','error');
       });
    }else{
      this.helper.showAlert('Please Provide firstname,lastname,email and phone','error')
    }
  }

  /*** function defination for getting user details ***/
  getUserDetails = () => {
    this.showLoader = true;
    this.service.getUserDetails(localStorage.getItem(PROJECTNAMEALIAS + '_user_id')).subscribe(data=>{
      this.showLoader = false;
      if(data['error'].error_status){
        this.helper.showAlert(data['error'].error_msg,'error');
      }else{
       
        var user = data['user'];
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.emailAddress = user.email;
        this.phone = user.phone;
        this.country = user.country;
        this.citizenship = user.citizenship;
        this.fiatAmount = user.investment_amount;
        this.dob = user.date_of_birth;
        if(this.dob!=null){
          var dobArr = this.dob.split('-');
          this.dayOfDob = dobArr[0];
          this.monthOfDob = dobArr[1];
          this.yearOfDob = dobArr[2];
        }else{
          this.dayOfDob = '';
          this.monthOfDob = '';
          this.yearOfDob = '';
        }
       
      }
     },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
     })
  }


  /*** function for rendering dropdown List ***/
  renderDropDown = () => {

    var d = new Date();

    for(var i=1;i<=31;i++){
      this.dayOfDobList.push(i);
    }
    console.log(this.dayOfDobList)
    for(var i=1921;i<=d.getFullYear();i++){
      this.yearOfDobList.push(i);
    }

    
     /***  calling market cap price for defined crypto ***/
     this.getUserDetails();
  }
  

  ngOnInit() {
  }

  ngAfterViewInit() {
    /***  calling function for rendering dropdown list ***/
    this.renderDropDown();
  }

}
