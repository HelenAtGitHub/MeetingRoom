import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoLayoutBasicComponent } from './basic';
import { NzDemoLayoutCustomTriggerComponent } from './custom-trigger';
import { NzDemoLayoutFixedSiderComponent } from './fixed-sider';
import { NzDemoLayoutFixedComponent } from './fixed';
import { NzDemoLayoutResponsiveComponent } from './responsive';
import { NzDemoLayoutSideComponent } from './side';
import { NzDemoLayoutTopSide2Component } from './top-side-2';
import { NzDemoLayoutTopSideComponent } from './top-side';
import { NzDemoLayoutTopComponent } from './top';
import { NzDemoLayoutZhComponent } from './zh.component';
import { NzDemoLayoutEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoLayoutEnComponent },
      { path: 'zh', component: NzDemoLayoutZhComponent }
    ])
  ],
  declarations: [
		NzDemoLayoutBasicComponent,
		NzDemoLayoutCustomTriggerComponent,
		NzDemoLayoutFixedSiderComponent,
		NzDemoLayoutFixedComponent,
		NzDemoLayoutResponsiveComponent,
		NzDemoLayoutSideComponent,
		NzDemoLayoutTopSide2Component,
		NzDemoLayoutTopSideComponent,
		NzDemoLayoutTopComponent,
		NzDemoLayoutZhComponent,
		NzDemoLayoutEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoLayoutModule {

}
