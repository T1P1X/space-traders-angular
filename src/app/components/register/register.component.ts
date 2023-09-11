import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = "";
  constructor(private spacetrader: AccountService) {
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.spacetrader.register(this.username);
  }
}
