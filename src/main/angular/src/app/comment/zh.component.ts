import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../share/codebox/codebox.component';

@Component({
  selector     : 'nz-demo-comment',
  preserveWhitespaces: false,
  templateUrl  : './zh.html'
})
export class NzDemoCommentZhComponent {
  expanded = false;
  @ViewChildren(NzCodeBoxComponent) codeBoxes!: QueryList<NzCodeBoxComponent>;

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  expandAllCode(): void {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => {
      code.nzExpanded = this.expanded;
      code.expandCode(this.expanded);
      code.check();
    });
  }

}
