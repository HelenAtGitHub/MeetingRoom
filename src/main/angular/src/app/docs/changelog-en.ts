import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-changelog-en',
  templateUrl  : './changelog-en.html',
  preserveWhitespaces: false
})
export class NzDocChangelogEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
