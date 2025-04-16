import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './component/helloworld.component';

@Component({
  selector: 'app-root',
  imports: [HelloworldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorldApp';

  constructor() {
  }
}
