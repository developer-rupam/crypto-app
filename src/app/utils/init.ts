import { HttpHeaders } from '@angular/common/http';


const PRODUCTIONURL = {"siteUrl":"","apiEndPoint":""};
const DEVELOPMENTURL = {"siteUrl":"http://localhost:4200","apiEndPoint":"http://localhost/crypto-app/api/exchange"};

export const rangeMinValue = 0;
export const rangeMaxValue = 500;

export const WEBSERVICE = DEVELOPMENTURL.apiEndPoint;
export const ADDR = DEVELOPMENTURL.siteUrl;


/* export const APPLICATION_TYPE_JSON = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; */

export const PROJECTNAMEALIAS = 'crypto';