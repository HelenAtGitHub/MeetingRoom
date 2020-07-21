import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-universal-en',
  templateUrl  : './universal-en.html',
  preserveWhitespaces: false
})
export class NzDocUniversalEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
