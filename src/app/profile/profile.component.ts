import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

interface Claim {
  claim: string;
  value: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idToken: any;
  claims: Array<Claim> = [];

  constructor(public oktaAuth: OktaAuthService) {

  }

  async ngOnInit() {
    const userClaims = await this.oktaAuth.getUser();
    this.claims = Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));
  }

}