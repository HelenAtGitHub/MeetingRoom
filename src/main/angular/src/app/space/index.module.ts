import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoSpaceBasicComponent } from './basic';
import { NzDemoSpaceCustomizeComponent } from './customize';
import { NzDemoSpaceSizeComponent } from './size';
import { NzDemoSpaceVerticalComponent } from './vertical';
import { NzDemoSpaceZhComponent } from './zh.component';
import { NzDemoSpaceEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSpaceEnComponent },
      { path: 'zh', component: NzDemoSpaceZhComponent }
    ])
  ],
  declarations: [
		NzDemoSpaceBasicComponent,
		NzDemoSpaceCustomizeComponent,
		NzDemoSpaceSizeComponent,
		NzDemoSpaceVerticalComponent,
		NzDemoSpaceZhComponent,
		NzDemoSpaceEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoSpaceModule {

}
