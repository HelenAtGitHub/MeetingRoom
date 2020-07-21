import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-recommendation-zh',
  templateUrl  : './recommendation-zh.html',
  preserveWhitespaces: false
})
export class NzDocRecommendationZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
