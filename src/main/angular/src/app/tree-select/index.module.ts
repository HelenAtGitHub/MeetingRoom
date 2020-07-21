import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoTreeSelectAsyncComponent } from './async';
import { NzDemoTreeSelectBasicComponent } from './basic';
import { NzDemoTreeSelectCheckableComponent } from './checkable';
import { NzDemoTreeSelectCustomizedIconComponent } from './customized-icon';
import { NzDemoTreeSelectMultipleComponent } from './multiple';
import { NzDemoTreeSelectZhComponent } from './zh.component';
import { NzDemoTreeSelectEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTreeSelectEnComponent },
      { path: 'zh', component: NzDemoTreeSelectZhComponent }
    ])
  ],
  declarations: [
		NzDemoTreeSelectAsyncComponent,
		NzDemoTreeSelectBasicComponent,
		NzDemoTreeSelectCheckableComponent,
		NzDemoTreeSelectCustomizedIconComponent,
		NzDemoTreeSelectMultipleComponent,
		NzDemoTreeSelectZhComponent,
		NzDemoTreeSelectEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoTreeSelectModule {

}
