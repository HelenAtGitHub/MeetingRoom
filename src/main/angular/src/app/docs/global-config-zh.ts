import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-global-config-zh',
  templateUrl  : './global-config-zh.html',
  preserveWhitespaces: false
})
export class NzDocGlobalConfigZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
