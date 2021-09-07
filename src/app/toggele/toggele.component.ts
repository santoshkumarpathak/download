import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggele',
  templateUrl: './toggele.component.html',
  styleUrls: ['./toggele.component.css']
})
export class ToggeleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch(e, element) {
    var status
    if (e.checked) {
      status = 'active'
    } else {
      status = 'inactive'
    }
    console.log(e, element)
    var obj = {
      user_id: element,
      status: status
    }
    this.service.serviceName(obj).subscribe(res => {
      // this.service is like variable which hold the http connection between class file to servie  file  
      console.log("res", res);
      this._snackBar.open('Status Changed', 'OK');// show the status of the toggle active or inactive after response
      this.getUsersClientPagination();//after that toggle action need to show new changes show that we call main function 
      // which show the data with new status of the toggle
    }, err => {
      console.log("Error: ", err);
    })
  }


}
