import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-faq-en',
  templateUrl  : './faq-en.html',
  preserveWhitespaces: false
})
export class NzDocFaqEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
