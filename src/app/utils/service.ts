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

    checkEmail = (email) => {
        const payload = JSON.stringify({'email':email});
        const response = this.http.post<any>(WEBSERVICE + "/checkEmail.php", payload, this.serviceheaders);
        return response;
    }

  
  }