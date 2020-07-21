import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoInputNumberBasicComponent } from './basic';
import { NzDemoInputNumberDigitComponent } from './digit';
import { NzDemoInputNumberDisabledComponent } from './disabled';
import { NzDemoInputNumberFormatterComponent } from './formatter';
import { NzDemoInputNumberPrecisionComponent } from './precision';
import { NzDemoInputNumberSizeComponent } from './size';
import { NzDemoInputNumberZhComponent } from './zh.component';
import { NzDemoInputNumberEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoInputNumberEnComponent },
      { path: 'zh', component: NzDemoInputNumberZhComponent }
    ])
  ],
  declarations: [
		NzDemoInputNumberBasicComponent,
		NzDemoInputNumberDigitComponent,
		NzDemoInputNumberDisabledComponent,
		NzDemoInputNumberFormatterComponent,
		NzDemoInputNumberPrecisionComponent,
		NzDemoInputNumberSizeComponent,
		NzDemoInputNumberZhComponent,
		NzDemoInputNumberEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoInputNumberModule {

}
