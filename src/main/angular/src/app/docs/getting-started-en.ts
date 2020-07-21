import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-getting-started-en',
  templateUrl  : './getting-started-en.html',
  preserveWhitespaces: false
})
export class NzDocGettingStartedEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
