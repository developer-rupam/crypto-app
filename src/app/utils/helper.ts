import { Component } from "@angular/core";
import Swal from 'sweetalert2'
import { PROJECTNAMEALIAS,ADDR } from "../utils/init"
import { Router } from "@angular/router";

@Component({
  selector: "app-helper",
  templateUrl: "./helper.html",
  styleUrls: ["./helper.css"]
})
export class Helper {


  constructor(public router:Router) {}

  /*** function defination for showing swal ***/
  showAlert(alertText:string,alertType:string,){
    if(alertType=='success'){
      Swal.fire('Success',alertText,'success');
    }else if(alertType=='error'){
      Swal.fire('Error',alertText,'error');
    }else{
      Swal.fire('Info',alertText,'info');
    }
    
  }

  /*** function defination for logout ***/
  logout=()=>{
    localStorage.removeItem(PROJECTNAMEALIAS + '_user_id');
    localStorage.removeItem(PROJECTNAMEALIAS + '_user_status');
    localStorage.removeItem(PROJECTNAMEALIAS + '_current_route');
    localStorage.removeItem(PROJECTNAMEALIAS + '_market_cap_json');
    localStorage.removeItem(PROJECTNAMEALIAS + '_login_status');
    localStorage.removeItem(PROJECTNAMEALIAS + '_user_firstname');
    localStorage.removeItem(PROJECTNAMEALIAS + '_user_email');
    localStorage.removeItem(PROJECTNAMEALIAS + '_user_lastname');
    localStorage.setItem(PROJECTNAMEALIAS + '_reload_page','true');
    this.router.navigate(["/login"]);
   //location.href=ADDR + "/login"

  }

 

  /*** function defination for confirm box ***/

  /*showConfirmMessage(text: string, cb): void {
    this._snotifyService.confirm(`${text}`, "Confirm", {
      timeout: 1500,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {
          text: "Yes",
          action: () => {
            cb();
          },
          bold: false
        },
        {
          text: "Close",
          action: toast => {
            this._snotifyService.remove(toast.id);
          },
          bold: true
        }
      ]
    });
  } */
}