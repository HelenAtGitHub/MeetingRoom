import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-introduce-en',
  templateUrl  : './introduce-en.html',
  preserveWhitespaces: false
})
export class NzDocIntroduceEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
