import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-customize-theme-zh',
  templateUrl  : './customize-theme-zh.html',
  preserveWhitespaces: false
})
export class NzDocCustomizeThemeZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
