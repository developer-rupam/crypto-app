import { HttpHeaders } from '@angular/common/http';


const PRODUCTION = "";
const DEVELOPMENT = "http://localhost:4200";

export const rangeMinValue = 0;
export const rangeMaxValue = 500;

export const WEBSERVICE = DEVELOPMENT;
export const ADDR = DEVELOPMENT;


export const APPLICATION_TYPE_JSON = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export const PROJECTNAMEALIAS = 'crypto';