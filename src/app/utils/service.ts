import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WEBSERVICE } from "../utils/init";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
  })
  export class Service {
    public serviceheaders : any = new HttpHeaders({ "Content-Type": "application/json" });

    constructor(private http: HttpClient) {}

    /*** service function defination for check email ***/
    checkEmail = (email) => {
        const payload = JSON.stringify({'email':email});
        const response = this.http.post<any>(WEBSERVICE + "/checkEmail.php", payload, this.serviceheaders);
        return response;
    }

    
    /*** service function defination for add user ***/
    addUser = (firstname,lastname,email,password) => {
        const payload = JSON.stringify({'firstname':firstname,'lastname':lastname,'email':email,'password':password});
        const response = this.http.post<any>(WEBSERVICE + "/addUser.php", payload, this.serviceheaders);
        return response;
    }


    /*** service function defination for user login ***/
    login = (email,password) => {
        const payload = JSON.stringify({'email':email,'password':password});
        const response = this.http.post<any>(WEBSERVICE + "/login.php", payload, this.serviceheaders);
        return response;
    }

  
  }