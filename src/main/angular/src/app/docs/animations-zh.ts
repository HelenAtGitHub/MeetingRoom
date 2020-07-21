import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-animations-zh',
  templateUrl  : './animations-zh.html',
  preserveWhitespaces: false
})
export class NzDocAnimationsZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
