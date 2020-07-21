import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoSliderBasicComponent } from './basic';
import { NzDemoSliderEventComponent } from './event';
import { NzDemoSliderIconSliderComponent } from './icon-slider';
import { NzDemoSliderInputNumberComponent } from './input-number';
import { NzDemoSliderMarkComponent } from './mark';
import { NzDemoSliderReverseComponent } from './reverse';
import { NzDemoSliderTipFormatterComponent } from './tip-formatter';
import { NzDemoSliderTooltipComponent } from './tooltip';
import { NzDemoSliderVerticalComponent } from './vertical';
import { NzDemoSliderZhComponent } from './zh.component';
import { NzDemoSliderEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSliderEnComponent },
      { path: 'zh', component: NzDemoSliderZhComponent }
    ])
  ],
  declarations: [
		NzDemoSliderBasicComponent,
		NzDemoSliderEventComponent,
		NzDemoSliderIconSliderComponent,
		NzDemoSliderInputNumberComponent,
		NzDemoSliderMarkComponent,
		NzDemoSliderReverseComponent,
		NzDemoSliderTipFormatterComponent,
		NzDemoSliderTooltipComponent,
		NzDemoSliderVerticalComponent,
		NzDemoSliderZhComponent,
		NzDemoSliderEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoSliderModule {

}
