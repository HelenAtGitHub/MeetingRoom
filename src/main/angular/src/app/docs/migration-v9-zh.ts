import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-migration-v9-zh',
  templateUrl  : './migration-v9-zh.html',
  preserveWhitespaces: false
})
export class NzDocMigrationV9ZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
