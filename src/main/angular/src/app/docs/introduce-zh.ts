import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-introduce-zh',
  templateUrl  : './introduce-zh.html',
  preserveWhitespaces: false
})
export class NzDocIntroduceZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
