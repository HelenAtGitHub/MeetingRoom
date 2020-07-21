import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-animations-en',
  templateUrl  : './animations-en.html',
  preserveWhitespaces: false
})
export class NzDocAnimationsEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
