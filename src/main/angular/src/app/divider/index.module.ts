import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoDividerHorizontalComponent } from './horizontal';
import { NzDemoDividerOrientationComponent } from './orientation';
import { NzDemoDividerVerticalComponent } from './vertical';
import { NzDemoDividerZhComponent } from './zh.component';
import { NzDemoDividerEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDividerEnComponent },
      { path: 'zh', component: NzDemoDividerZhComponent }
    ])
  ],
  declarations: [
		NzDemoDividerHorizontalComponent,
		NzDemoDividerOrientationComponent,
		NzDemoDividerVerticalComponent,
		NzDemoDividerZhComponent,
		NzDemoDividerEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoDividerModule {

}
