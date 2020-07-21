import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoPopoverArrowPointAtCenterComponent } from './arrow-point-at-center';
import { NzDemoPopoverBasicComponent } from './basic';
import { NzDemoPopoverControlComponent } from './control';
import { NzDemoPopoverPlacementComponent } from './placement';
import { NzDemoPopoverTemplateComponent } from './template';
import { NzDemoPopoverTriggerTypeComponent } from './trigger-type';
import { NzDemoPopoverZhComponent } from './zh.component';
import { NzDemoPopoverEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoPopoverEnComponent },
      { path: 'zh', component: NzDemoPopoverZhComponent }
    ])
  ],
  declarations: [
		NzDemoPopoverArrowPointAtCenterComponent,
		NzDemoPopoverBasicComponent,
		NzDemoPopoverControlComponent,
		NzDemoPopoverPlacementComponent,
		NzDemoPopoverTemplateComponent,
		NzDemoPopoverTriggerTypeComponent,
		NzDemoPopoverZhComponent,
		NzDemoPopoverEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoPopoverModule {

}
