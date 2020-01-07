import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../../utils/service";
import { PROJECTNAMEALIAS } from "../../../utils/init"
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public firstName : string = '';
  public lastName : string = '';
  public emailAddress : string = '';
  public phone : number ;
  public dayOfDob : string = '';
  public monthOfDob : string = '';
  public yearOfDob : string = '';
  public country : string = '';
  public citizenship : string = '';
  public fiatAmount : string = '';

  constructor(public helper:Helper, public router:Router,public service:Service) { }

  /*** function for saving profile data ***/
  saveProfileData = () => {
    if(
      this.firstName !='' && this.lastName != '' &&
      this.emailAddress != '' && this.phone != undefined 
    ){
      //TODO: call webservice here
    }else{
      this.helper.showAlert('Please Provide firstname,lastname,email and phone','error')
    }
  }

  ngOnInit() {
  }

}
