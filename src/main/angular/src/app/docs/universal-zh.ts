import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-universal-zh',
  templateUrl  : './universal-zh.html',
  preserveWhitespaces: false
})
export class NzDocUniversalZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
