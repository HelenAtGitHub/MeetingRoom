import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoCalendarBasicComponent } from './basic';
import { NzDemoCalendarCardComponent } from './card';
import { NzDemoCalendarNoticeCalendarComponent } from './notice-calendar';
import { NzDemoCalendarSelectComponent } from './select';
import { NzDemoCalendarZhComponent } from './zh.component';
import { NzDemoCalendarEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCalendarEnComponent },
      { path: 'zh', component: NzDemoCalendarZhComponent }
    ])
  ],
  declarations: [
		NzDemoCalendarBasicComponent,
		NzDemoCalendarCardComponent,
		NzDemoCalendarNoticeCalendarComponent,
		NzDemoCalendarSelectComponent,
		NzDemoCalendarZhComponent,
		NzDemoCalendarEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoCalendarModule {

}
