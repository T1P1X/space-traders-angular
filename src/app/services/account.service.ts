import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService{
  bearerToken: string = "";
  constructor(private client: HttpClient){
    let _bearerToken = localStorage.getItem("bearerToken");

    if(_bearerToken != null){
      this.bearerToken = _bearerToken;
    }
  }
  register(username: string): void {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let registrationObservable = this.client.post<RegistrationResponse>('https://api.spacetraders.io/v2/register', JSON.stringify({
      symbol: username,
      faction: "COSMIC",
    }),options);

    registrationObservable.subscribe((data: RegistrationResponse) => localStorage.setItem("bearerToken",data.data.token));
  }
}
interface RegistrationResponse {
  data: {
    agent: {},
    contract: {},
    faction: {},
    ship: {},
    token: string
  }
}
