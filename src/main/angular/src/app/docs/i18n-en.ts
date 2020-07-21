import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-i18n-en',
  templateUrl  : './i18n-en.html',
  preserveWhitespaces: false
})
export class NzDocI18nEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
