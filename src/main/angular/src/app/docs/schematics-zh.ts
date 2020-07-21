import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-schematics-zh',
  templateUrl  : './schematics-zh.html',
  preserveWhitespaces: false
})
export class NzDocSchematicsZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
