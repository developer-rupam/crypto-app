import { HttpHeaders } from '@angular/common/http';


const PRODUCTIONURL = {"siteUrl":"https://devbetahost.000webhostapp.com","apiEndPoint":"https://devbetahost.000webhostapp.com/api/exchange"};
const DEVELOPMENTURL = {"siteUrl":"http://localhost:4200","apiEndPoint":"http://localhost/crypto-app/api/exchange"};

export const rangeMinValue = 0;
export const rangeMaxValue = 500;

export const WEBSERVICE = PRODUCTIONURL.apiEndPoint;
export const ADDR = PRODUCTIONURL.siteUrl;


/* export const APPLICATION_TYPE_JSON = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; */

export const PROJECTNAMEALIAS = 'crypto';