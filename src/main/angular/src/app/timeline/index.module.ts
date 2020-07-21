import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoTimelineAlternateComponent } from './alternate';
import { NzDemoTimelineBasicComponent } from './basic';
import { NzDemoTimelineColorComponent } from './color';
import { NzDemoTimelineCustomComponent } from './custom';
import { NzDemoTimelinePendingComponent } from './pending';
import { NzDemoTimelinePositionComponent } from './position';
import { NzDemoTimelineRightComponent } from './right';
import { NzDemoTimelineZhComponent } from './zh.component';
import { NzDemoTimelineEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTimelineEnComponent },
      { path: 'zh', component: NzDemoTimelineZhComponent }
    ])
  ],
  declarations: [
		NzDemoTimelineAlternateComponent,
		NzDemoTimelineBasicComponent,
		NzDemoTimelineColorComponent,
		NzDemoTimelineCustomComponent,
		NzDemoTimelinePendingComponent,
		NzDemoTimelinePositionComponent,
		NzDemoTimelineRightComponent,
		NzDemoTimelineZhComponent,
		NzDemoTimelineEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoTimelineModule {

}
