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
  public showLoader : boolean = false;
  public userGivenAmount : number = 0.00;
  public usdRate : any = ''; 
  public btcRate : any = ''; 
  public ethRate : any = ''; 
  public selectedCrypto : string = 'BCH';

  constructor(public helper:Helper, public router:Router,public service:Service) { }
  
  /*** function defination for getting all market cap price for defined crypto ***/
  getDefinedMarketPrice = (arr) =>{
    var marketCapArr = JSON.parse(localStorage.getItem( PROJECTNAMEALIAS +'_market_cap_json'));
    //console.log(marketCapArr);
    console.log('called')
    for(var i=0;i<marketCapArr.length;i++){
      if(marketCapArr[i].symbol == arr[i]){
        var obj = {'name':marketCapArr[i].name,'symbol':marketCapArr[i].symbol,'price':marketCapArr[i].quote.USD.price};
        
        this.definedCryptoPrice.push(obj)
      }
    }
    console.log(this.definedCryptoPrice);
  }

  /*** function defination for getting market rate ***/
  getMarketRate = () => {
    var marketCapArr = JSON.parse(localStorage.getItem( PROJECTNAMEALIAS +'_market_cap_json'));

    for(var i=0;i<marketCapArr.length;i++){
     
      if(marketCapArr[i].symbol == this.selectedCrypto){
          this.usdRate = (parseFloat(marketCapArr[i].quote.USD.price)*(this.userGivenAmount)).toFixed(2);
          for(var j=0;j<marketCapArr.length;j++){

            if(marketCapArr[j].symbol == 'BTC'){
              console.log( '1/ ' + parseFloat(marketCapArr[j].quote.USD.price) + ' * ' + parseFloat(this.usdRate) + ' * ' + (this.userGivenAmount) )
                this.btcRate =  (((1/parseFloat(marketCapArr[j].quote.USD.price))*parseFloat(this.usdRate))*(this.userGivenAmount)).toFixed(8);
            }
            if(marketCapArr[j].symbol == 'ETH'){
              this.ethRate =  (((1/parseFloat(marketCapArr[j].quote.USD.price))*parseFloat(this.usdRate))*(this.userGivenAmount)).toFixed(6);
            }

          }  
      } 
      
      console.log(this.btcRate)
    }

    if(isNaN(parseFloat(this.usdRate))){
      this.usdRate = '';
    }
     if(isNaN(parseFloat(this.btcRate))){
      this.btcRate = '';
    }
     if(isNaN(parseFloat(this.ethRate))){
      this.ethRate = '';
    }
     if(isNaN(this.userGivenAmount)){
      console.log('here')
      this.ethRate = '';
      this.usdRate = '';
      this.btcRate = '';
    }

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /***  calling market cap price for defined crypto ***/
    this.getDefinedMarketPrice(DEFINEDCRYPTOARR);
  }

}
