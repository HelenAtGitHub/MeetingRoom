import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-migration-v9-en',
  templateUrl  : './migration-v9-en.html',
  preserveWhitespaces: false
})
export class NzDocMigrationV9EnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
