import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoStatisticBasicComponent } from './basic';
import { NzDemoStatisticCardComponent } from './card';
import { NzDemoStatisticCountdownComponent } from './countdown';
import { NzDemoStatisticUnitComponent } from './unit';
import { NzDemoStatisticZhComponent } from './zh.component';
import { NzDemoStatisticEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoStatisticEnComponent },
      { path: 'zh', component: NzDemoStatisticZhComponent }
    ])
  ],
  declarations: [
		NzDemoStatisticBasicComponent,
		NzDemoStatisticCardComponent,
		NzDemoStatisticCountdownComponent,
		NzDemoStatisticUnitComponent,
		NzDemoStatisticZhComponent,
		NzDemoStatisticEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoStatisticModule {

}
