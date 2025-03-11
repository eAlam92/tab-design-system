import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tab-system';

  isTab1: boolean = true; // Default to Tab 1

  toggleTab(tab: number) {
    this.isTab1 = tab === 1; // If tab 1 is clicked, set isTab1 to true; else, false
  }
}
