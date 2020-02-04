import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../../utils/service";
import { PROJECTNAMEALIAS } from "../../../utils/init"

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public pageNo:number = 1;
  public noOfItemsPerPage:number = 10;
  public transactionList:any = [];
  public showLoader:boolean = false;

  constructor(public helper:Helper, public router:Router,public service:Service) { }

  /*** function defination for getting user transaction ***/
  getTransactionList=(pageNo,noOfItemsPerPage)=>{
    this.showLoader = true;
    this.service.getTransactionList(localStorage.getItem(PROJECTNAMEALIAS+'_user_id'),this.pageNo,this.noOfItemsPerPage).subscribe(data=>{
      this.showLoader = false;
      if(data['error'].error_status){
        this.helper.showAlert(data['error'].error_msg,'error');
      }else{
       this.transactionList = data['transaction'];
      }
    },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /***  calling function for getting transaction list ***/
    this.getTransactionList(this.pageNo,this.noOfItemsPerPage);
  }

}
