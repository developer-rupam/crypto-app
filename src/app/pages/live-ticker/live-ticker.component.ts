import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../utils/service";
import { PROJECTNAMEALIAS } from "../../utils/init"

@Component({
  selector: 'app-live-ticker',
  templateUrl: './live-ticker.component.html',
  styleUrls: ['./live-ticker.component.css']
})
export class LiveTickerComponent implements OnInit {
  public showLoader: boolean = false;
  public marketCapList : any = [];

  constructor(public helper:Helper, public router:Router,public service:Service) { }

  /*** function defination for get market capital ***/
  getMarketCapValue = () =>{
    this.service.getMarketCap().subscribe(data=>{
     /*  if(data['error'].error_status){
        this.helper.showAlert(data['error'].error_msg,'error');
      }else{ */
        let res :any = data;
        /* Uncomment below line for specific assets */
       /*  for(let i=0;i<res.length;i++){
          let symbol = res[i].symbol;
          if(symbol === 'BTCUSDT' || symbol === 'ETHUSDT'){
            this.marketCapList.push(res[i]);
          }
        } */
        for(let i=0;i<10;i++){
          let symbol = res[i].symbol;
         
            this.marketCapList.push(res[i]);
        }
        console.log(this.marketCapList)
      //}
    },error=>{
      this.showLoader = false;
      this.helper.showAlert('Server Error','error');
    })
  }

  ngOnInit() {
    /*** calling method to get market cap price ***/
    this.getMarketCapValue();
  }

}
