import { Component } from '@angular/core';

@Component({
  selector     : 'nz-doc-recommendation-en',
  templateUrl  : './recommendation-en.html',
  preserveWhitespaces: false
})
export class NzDocRecommendationEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
