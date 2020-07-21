import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-contributing-en',
  templateUrl  : './contributing-en.html',
  preserveWhitespaces: false
})
export class NzDocContributingEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
