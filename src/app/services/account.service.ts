import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  bearerToken: string = "";
  constructor(private client: HttpClient){
    let _bearerToken = localStorage.getItem("bearerToken");

    if(_bearerToken != null){
      this.bearerToken = _bearerToken;
    }
  }
  //TODO: Change post request to use httpClient
  register(username: string): void{
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symbol: username,
        faction: "COSMIC",
      }),
    };

    fetch('https://api.spacetraders.io/v2/register', options)
      .then(response => response.json())
      .then(response => this.bearerToken = response.data.token)
      .catch(err => console.error(err));

    localStorage.setItem('bearerToken',this.bearerToken);

    console.log("Trader created with token: " + this.bearerToken);
  }
}
