import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoPopconfirmBasicComponent } from './basic';
import { NzDemoPopconfirmCustomIconComponent } from './custom-icon';
import { NzDemoPopconfirmDynamicTriggerComponent } from './dynamic-trigger';
import { NzDemoPopconfirmHideArrowComponent } from './hide-arrow';
import { NzDemoPopconfirmLocaleComponent } from './locale';
import { NzDemoPopconfirmPlacementComponent } from './placement';
import { NzDemoPopconfirmZhComponent } from './zh.component';
import { NzDemoPopconfirmEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoPopconfirmEnComponent },
      { path: 'zh', component: NzDemoPopconfirmZhComponent }
    ])
  ],
  declarations: [
		NzDemoPopconfirmBasicComponent,
		NzDemoPopconfirmCustomIconComponent,
		NzDemoPopconfirmDynamicTriggerComponent,
		NzDemoPopconfirmHideArrowComponent,
		NzDemoPopconfirmLocaleComponent,
		NzDemoPopconfirmPlacementComponent,
		NzDemoPopconfirmZhComponent,
		NzDemoPopconfirmEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoPopconfirmModule {

}
