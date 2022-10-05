import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-test',
  templateUrl: './badge-test.component.html',
  styleUrls: ['./badge-test.component.css']
})
export class BadgeTestComponent {
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
