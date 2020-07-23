import { Component } from '@angular/core';
import { ROUTER_LIST } from './router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  routerList = ROUTER_LIST;
  title = 'angular';
}
