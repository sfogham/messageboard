import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `<h1>Message Board</h1>
              <new-message></new-message>
              <messages></messages>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
