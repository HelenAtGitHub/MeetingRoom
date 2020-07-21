import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoTooltipArrowPointAtCenterComponent } from './arrow-point-at-center';
import { NzDemoTooltipBasicComponent } from './basic';
import { NzDemoTooltipOriginComponent } from './origin';
import { NzDemoTooltipPlacementComponent } from './placement';
import { NzDemoTooltipTemplateComponent } from './template';
import { NzDemoTooltipZhComponent } from './zh.component';
import { NzDemoTooltipEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTooltipEnComponent },
      { path: 'zh', component: NzDemoTooltipZhComponent }
    ])
  ],
  declarations: [
		NzDemoTooltipArrowPointAtCenterComponent,
		NzDemoTooltipBasicComponent,
		NzDemoTooltipOriginComponent,
		NzDemoTooltipPlacementComponent,
		NzDemoTooltipTemplateComponent,
		NzDemoTooltipZhComponent,
		NzDemoTooltipEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoTooltipModule {

}
