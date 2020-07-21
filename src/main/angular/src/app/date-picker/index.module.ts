import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoDatePickerBasicComponent } from './basic';
import { NzDemoDatePickerDateRenderComponent } from './date-render';
import { NzDemoDatePickerDisabledDateComponent } from './disabled-date';
import { NzDemoDatePickerDisabledComponent } from './disabled';
import { NzDemoDatePickerExtraFooterComponent } from './extra-footer';
import { NzDemoDatePickerFormatComponent } from './format';
import { NzDemoDatePickerModeComponent } from './mode';
import { NzDemoDatePickerPresettedRangesComponent } from './presetted-ranges';
import { NzDemoDatePickerSizeComponent } from './size';
import { NzDemoDatePickerStartEndComponent } from './start-end';
import { NzDemoDatePickerTimeComponent } from './time';
import { NzDemoDatePickerZhComponent } from './zh.component';
import { NzDemoDatePickerEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDatePickerEnComponent },
      { path: 'zh', component: NzDemoDatePickerZhComponent }
    ])
  ],
  declarations: [
		NzDemoDatePickerBasicComponent,
		NzDemoDatePickerDateRenderComponent,
		NzDemoDatePickerDisabledDateComponent,
		NzDemoDatePickerDisabledComponent,
		NzDemoDatePickerExtraFooterComponent,
		NzDemoDatePickerFormatComponent,
		NzDemoDatePickerModeComponent,
		NzDemoDatePickerPresettedRangesComponent,
		NzDemoDatePickerSizeComponent,
		NzDemoDatePickerStartEndComponent,
		NzDemoDatePickerTimeComponent,
		NzDemoDatePickerZhComponent,
		NzDemoDatePickerEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoDatePickerModule {

}
