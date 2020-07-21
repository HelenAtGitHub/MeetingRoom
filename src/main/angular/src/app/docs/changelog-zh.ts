import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-changelog-zh',
  templateUrl  : './changelog-zh.html',
  preserveWhitespaces: false
})
export class NzDocChangelogZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
