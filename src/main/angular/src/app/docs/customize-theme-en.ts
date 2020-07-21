import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-customize-theme-en',
  templateUrl  : './customize-theme-en.html',
  preserveWhitespaces: false
})
export class NzDocCustomizeThemeEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
