import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-schematics-en',
  templateUrl  : './schematics-en.html',
  preserveWhitespaces: false
})
export class NzDocSchematicsEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
