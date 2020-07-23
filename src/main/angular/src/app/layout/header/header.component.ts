import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { VERSION } from 'ng-zorro-antd/version';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnChanges {
  @Input() language: 'zh' | 'en' = 'zh';
  @Input() windowWidth = 1400;
  @Input() page: 'docs' | 'components' | 'experimental' | string = 'docs';
  @Output() versionChange = new EventEmitter<string>();
  @Output() languageChange = new EventEmitter<'zh' | 'en'>();

  searching = false;
  isMobile = false;
  mode = 'horizontal';
  responsive: null | 'narrow' | 'crowded' = null;
  oldVersionList = ['8.5.x', '7.5.x', '1.8.x', '0.7.x', '0.5.x'];
  currentVersion = VERSION.full;

  onChangeVersion(version: string): void {
    this.versionChange.emit(version);
  }

  onFocusChange(focus: boolean): void {
    this.searching = focus;
  }

  onChangeLanguage(language: 'en' | 'zh'): void {
    this.languageChange.emit(language);
  }

  updateResponsive(): void {
    this.responsive = null;
    this.isMobile = this.windowWidth <= 768;
    if (this.windowWidth < RESPONSIVE_XS) {
      this.responsive = 'crowded';
    } else if (this.windowWidth < RESPONSIVE_SM) {
      this.responsive = 'narrow';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { windowWidth } = changes;
    if (windowWidth) {
      this.updateResponsive();
    }
  }
}
