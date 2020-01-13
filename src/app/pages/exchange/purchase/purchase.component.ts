import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../utils/helper';
import { Router } from "@angular/router";
import { Service } from "../../../utils/service";
import { PROJECTNAMEALIAS,DEFINEDCRYPTOARR,FIATPRICE } from "../../../utils/init"

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  public definedCryptoPrice :any = [];
  public fiatObj : any = FIATPRICE;
  public showLoader: boolean = false;
  
  constructor(public helper:Helper, public router:Router,public service:Service) { }
  
  /*** function defination for getting all market cap price for defined crypto ***/
  getDefinedMarketPrice = (arr) =>{
    var marketCapArr = JSON.parse(localStorage.getItem( PROJECTNAMEALIAS +'_market_cap_json'));
    //console.log(marketCapArr);
    
    for(var i=0;i<marketCapArr.length;i++){
      if(marketCapArr[i].symbol == arr[i]){
        var obj = {'name':marketCapArr[i].name,'symbol':marketCapArr[i].symbol,'price':marketCapArr[i].quote.USD.price};
        
        this.definedCryptoPrice.push(obj)
      }
    }
    console.log(this.definedCryptoPrice);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /***  calling market cap price for defined crypto ***/
    this.getDefinedMarketPrice(DEFINEDCRYPTOARR);
  }

}
