import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../../utils/service";
import { PROJECTNAMEALIAS } from "../../../utils/init"

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  public pageNo:number = 1;
  public noOfItemsPerPage:number = 10;
  public usersList:any = [];
  public showLoader:boolean = false;
  public totalCount:number = 0;
  public enablePrevBtn:boolean = false;
  public enableNextBtn:boolean = false;
  public maxPageLimitArray:any = [];
  public isExchangeSidebarCollapsed:boolean = false;



  constructor(public helper:Helper, public router:Router,public service:Service) { }


  /*** function defination for getting user list ***/
  getAllUsersList=(pageNo,noOfItemsPerPage)=>{
    this.showLoader = true;
    this.service.getAllUsersForAdmin(this.pageNo,this.noOfItemsPerPage).subscribe(data=>{
      this.showLoader = false;
      if(data['error'].error_status){
        this.helper.showAlert(data['error'].error_msg,'error');
      }else{
       this.usersList = data['user'];
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
    this.getAllUsersList(this.pageNo,this.noOfItemsPerPage);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /***  calling function for getting transaction list ***/
    this.getAllUsersList(this.pageNo,this.noOfItemsPerPage);
  }

}
