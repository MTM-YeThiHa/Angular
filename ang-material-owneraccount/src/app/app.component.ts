import { Component } from '@angular/core';
import OwnersJson from './owner/owners.json';
import { Owner } from './interface/owner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   Owners: any[] = OwnersJson;
  constructor() {
    console.log(this.Owners)
  }
}
