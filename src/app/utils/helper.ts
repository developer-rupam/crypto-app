import { Component } from "@angular/core";
import Swal from 'sweetalert2'

@Component({
  selector: "app-helper",
  templateUrl: "./helper.html",
  styleUrls: ["./helper.css"]
})
export class Helper {


  constructor() {}

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

  /*** function defination for showing ***/
  /* showToastMessage(type: string, text: string): void {
    type = type.toUpperCase();
    if (type === "SUCCESS") {
      this._snotifyService.success(`${text}`, {
        showProgressBar: false,
        timeout: 3000,
        pauseOnHover: true,
        position: SnotifyPosition.rightBottom
      });
    }
    if (type === "ERROR") {
      this._snotifyService.error(`${text}`, {
        showProgressBar: false,
        timeout: 3000,
        pauseOnHover: true,
        position: SnotifyPosition.rightBottom
      });
    }
    if (type === "INFO") {
      this._snotifyService.info(`${text}`, {
        showProgressBar: false,
        timeout: 3000,
        pauseOnHover: true,
        position: SnotifyPosition.rightBottom
      });
    }
    if (type === "WARNING") {
      this._snotifyService.warning(`${text}`, {
        showProgressBar: false,
        timeout: 3000,
        pauseOnHover: true,
        position: SnotifyPosition.rightBottom
      });
    }
  }*/

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