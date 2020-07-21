import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoSwitchBasicComponent } from './basic';
import { NzDemoSwitchControlComponent } from './control';
import { NzDemoSwitchDisabledComponent } from './disabled';
import { NzDemoSwitchLoadingComponent } from './loading';
import { NzDemoSwitchSizeComponent } from './size';
import { NzDemoSwitchTextComponent } from './text';
import { NzDemoSwitchZhComponent } from './zh.component';
import { NzDemoSwitchEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSwitchEnComponent },
      { path: 'zh', component: NzDemoSwitchZhComponent }
    ])
  ],
  declarations: [
		NzDemoSwitchBasicComponent,
		NzDemoSwitchControlComponent,
		NzDemoSwitchDisabledComponent,
		NzDemoSwitchLoadingComponent,
		NzDemoSwitchSizeComponent,
		NzDemoSwitchTextComponent,
		NzDemoSwitchZhComponent,
		NzDemoSwitchEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoSwitchModule {

}
