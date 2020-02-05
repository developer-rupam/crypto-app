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
  public noOfItemsPerPage:number = 1;
  public transactionList:any = [];
  public showLoader:boolean = false;
  public totalCount:number = 0;
  public enablePrevBtn:boolean = false;
  public enableNextBtn:boolean = false;
  public maxPageLimitArray:any = [];

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
       this.totalCount = data['total_count'];

       if(this.pageNo!=1){
         this.enablePrevBtn = true;
       }else{
         this.enablePrevBtn = false;
       }

       if(this.totalCount>this.noOfItemsPerPage && this.pageNo != this.totalCount){
         this.enableNextBtn = true;
       }else{
         this.enableNextBtn = false;
       }

       var maxPageLimit = Math.ceil(this.totalCount/this.noOfItemsPerPage)
       this.maxPageLimitArray = [];
       console.log(maxPageLimit)
       for(var i=1; i<=maxPageLimit;i++){
         this.maxPageLimitArray.push(i)
       }
       console.log(this.maxPageLimitArray)

      }
    },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
    })
  }

  /*** function defination for pagination ***/
  paginate=(pageNo)=>{
    this.pageNo = pageNo;
    this.getTransactionList(this.pageNo,this.noOfItemsPerPage);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /***  calling function for getting transaction list ***/
    this.getTransactionList(this.pageNo,this.noOfItemsPerPage);
  }

}
