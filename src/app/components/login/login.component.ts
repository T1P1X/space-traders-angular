import { Component } from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  bearerToken = "";
  constructor(private accountService: AccountService){}
  onSubmit(){
    if(this.accountService.bearerToken == this.bearerToken){
      //TODO: Redirect to main dashboard
    }
  }
}
