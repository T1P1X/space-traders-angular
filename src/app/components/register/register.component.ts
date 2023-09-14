import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = "";
  constructor(private spacetrader: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.spacetrader.register(this.username);
    setTimeout(
      () => this.router.navigate(["../"], {relativeTo: this.activatedRoute} )
    ,1000);
  }
}
