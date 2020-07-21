import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-getting-started-zh',
  templateUrl  : './getting-started-zh.html',
  preserveWhitespaces: false
})
export class NzDocGettingStartedZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
