import { HttpHeaders } from '@angular/common/http';


const PRODUCTIONURL = {"siteUrl":"https://devbetahost.000webhostapp.com","apiEndPoint":"https://devbetahost.000webhostapp.com/api/exchange" ,"adminApiEndPoint" : "https://devbetahost.000webhostapp.com/api/admin"};
const DEVELOPMENTURL = {"siteUrl":"http://localhost:4200","apiEndPoint":"http://localhost/crypto-app/api/exchange","adminApiEndPoint" : "http://localhost/crypto-app/api/admin"};

export const rangeMinValue = 0;
export const rangeMaxValue = 500;

export const WEBSERVICE = PRODUCTIONURL.apiEndPoint;
export const ADDR = PRODUCTIONURL.siteUrl;
export const ADMINWEBSERVICE = PRODUCTIONURL.adminApiEndPoint;


/* export const APPLICATION_TYPE_JSON = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; */

export const PROJECTNAMEALIAS = 'crypto';

export const FIATPRICE = {'symbol':'USD','name':'US Dollar','price':0.00}

export const DEFINEDCRYPTOARR = ['BTC','ETH','XRP'];

export const COUNTRYLIST = [{'name':'India','alias':'IN','currency':'INR'},{'name':'United State','alias':'US','currency':'USD'},{'name':'Bangladesh','alias':'BD','currency':'TK'},{'name':'Brazil','alias':'BR','currency':'BRL'},{'name':'Denmark','alias':'DN','currency':'KR'}]

export const MARKETCAPENDPOINT = 'https://api.binance.com'