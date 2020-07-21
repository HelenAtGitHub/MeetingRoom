import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoCollapseAccordionComponent } from './accordion';
import { NzDemoCollapseBasicComponent } from './basic';
import { NzDemoCollapseBorderlessComponent } from './borderless';
import { NzDemoCollapseCustomComponent } from './custom';
import { NzDemoCollapseExtraComponent } from './extra';
import { NzDemoCollapseMixComponent } from './mix';
import { NzDemoCollapseNoarrowComponent } from './noarrow';
import { NzDemoCollapseZhComponent } from './zh.component';
import { NzDemoCollapseEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCollapseEnComponent },
      { path: 'zh', component: NzDemoCollapseZhComponent }
    ])
  ],
  declarations: [
		NzDemoCollapseAccordionComponent,
		NzDemoCollapseBasicComponent,
		NzDemoCollapseBorderlessComponent,
		NzDemoCollapseCustomComponent,
		NzDemoCollapseExtraComponent,
		NzDemoCollapseMixComponent,
		NzDemoCollapseNoarrowComponent,
		NzDemoCollapseZhComponent,
		NzDemoCollapseEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoCollapseModule {

}
