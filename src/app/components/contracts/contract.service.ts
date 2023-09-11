import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  bearerToken: string;

  constructor() {
    this.bearerToken = localStorage.getItem('bearerToken') || "";
  }

  getContracts(): Contract[] {
    let contracts: Contract[] = [];
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.bearerToken
      },
    };

    fetch('https://api.spacetraders.io/v2/my/contracts', options)
      .then(response => response.json())
      .then(response => {
        for (let i: number = response.data.length; i >= 0; i--) {
          let contract: Contract = <Contract>{
            id: response.data[i].id,
            type: response.data[i].type,
            accepted: response.data[i].accepted,
            fulfilled: response.data[i].fulfilled,
            deadlineToAccept: response.data[i].deadlineToAccept,
            deadlineToComplete: response.data[i].terms.deadline,
            expirationDate: response.data[i].expiration,
            payment: response.data[i].terms.payment.onFulfilled,
            assignments: response.data[i].deliver,
          };
          contracts.push(contract);
        }
      })
      .catch(err => console.error(err))
    return contracts;
  }

  acceptContract(contractID: string) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.bearerToken
      },
    };
    fetch('https://api.spacetraders.io/v2/my/contracts/' + contractID + '/accept', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(err => console.log(err));
  }
}

type Contract = {
  id: string,
  type: string;
  accepted: boolean,
  fulfilled: boolean,
  deadlineToComplete: Date,
  deadlineToAccept: Date,
  expirationDate: Date,
  payment: number,
  assignments: Assignment[],
}
type Assignment = {
  destination: string,
  units: number,
  unitsDelivered: number
}
