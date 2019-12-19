import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utils/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username : string;
  public password : string;
  constructor(public helper:Helper) { }

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
