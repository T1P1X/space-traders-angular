import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsListComponent } from './contracts-list/contracts-list.component';
import {ContractComponent} from "./contract/contract.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContractsListComponent,
    ContractComponent
  ],
  exports:[
    ContractsListComponent
  ]
})
export class ContractsModule { }
