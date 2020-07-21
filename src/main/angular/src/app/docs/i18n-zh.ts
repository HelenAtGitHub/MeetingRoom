import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-i18n-zh',
  templateUrl  : './i18n-zh.html',
  preserveWhitespaces: false
})
export class NzDocI18nZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
