import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-global-config-en',
  templateUrl  : './global-config-en.html',
  preserveWhitespaces: false
})
export class NzDocGlobalConfigEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
