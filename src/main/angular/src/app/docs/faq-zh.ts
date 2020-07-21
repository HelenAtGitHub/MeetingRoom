import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-faq-zh',
  templateUrl  : './faq-zh.html',
  preserveWhitespaces: false
})
export class NzDocFaqZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
