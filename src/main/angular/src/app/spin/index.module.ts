import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoSpinBasicComponent } from './basic';
import { NzDemoSpinCustomIndicatorComponent } from './custom-indicator';
import { NzDemoSpinDelayAndDebounceComponent } from './delay-and-debounce';
import { NzDemoSpinInsideComponent } from './inside';
import { NzDemoSpinNestedComponent } from './nested';
import { NzDemoSpinSizeComponent } from './size';
import { NzDemoSpinTipComponent } from './tip';
import { NzDemoSpinZhComponent } from './zh.component';
import { NzDemoSpinEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSpinEnComponent },
      { path: 'zh', component: NzDemoSpinZhComponent }
    ])
  ],
  declarations: [
		NzDemoSpinBasicComponent,
		NzDemoSpinCustomIndicatorComponent,
		NzDemoSpinDelayAndDebounceComponent,
		NzDemoSpinInsideComponent,
		NzDemoSpinNestedComponent,
		NzDemoSpinSizeComponent,
		NzDemoSpinTipComponent,
		NzDemoSpinZhComponent,
		NzDemoSpinEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoSpinModule {

}
