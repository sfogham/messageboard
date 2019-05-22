import { Component, ViewChild } from '@angular/core';
import { NavComponent } from "./nav.component";

@Component({
  selector: 'app-root',
  template: `
              <nav></nav>
              <new-message></new-message>
              <messages></messages>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
