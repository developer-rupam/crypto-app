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

    /*** service function defination for market capital value ***/
    getMarketCap = (userId) => {
        const payload = JSON.stringify({'user_id':userId});
        const response = this.http.post<any>(WEBSERVICE + '/getMarketCap.php',payload,this.serviceheaders);
        return response;
    }

    /*** service function defination for user details ***/
    getUserDetails = (userId) => {
        const payload = JSON.stringify({'user_id':userId});
        const response = this.http.post<any>(WEBSERVICE + '/getUserDetails.php',payload,this.serviceheaders);
        return response;
    }

     /*** service function defination for update user details ***/
     updateUser = (userId,firstname,lastname,email,phone,dob,country,citizenship,investment_amount) => {
        const payload = JSON.stringify({'user_id':userId,'firstname':firstname,'lastname':lastname,'email':email,'phone':phone,'date_of_birth':dob,'country':country,'citizenship':citizenship,'investment_amount':investment_amount});
        const response = this.http.post<any>(WEBSERVICE + '/updateUser.php',payload,this.serviceheaders);
        return response;
    }

    /*** service function defination for get transaction details ***/
    getTransactionList = (userId,pageNo,noOfItemsPerPage) => {
        const payload = JSON.stringify({'user_id':userId,'page_no':pageNo,'no_of_items_per_page':noOfItemsPerPage});
        const response = this.http.post<any>(WEBSERVICE + '/getTransactionHistory.php',payload,this.serviceheaders);
        return response;
    }


  
  }