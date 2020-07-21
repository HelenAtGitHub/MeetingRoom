import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-contributing-zh',
  templateUrl  : './contributing-zh.html',
  preserveWhitespaces: false
})
export class NzDocContributingZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
