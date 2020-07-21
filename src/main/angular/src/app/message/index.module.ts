import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoMessageCloseComponent } from './close';
import { NzDemoMessageDurationComponent } from './duration';
import { NzDemoMessageInfoComponent } from './info';
import { NzDemoMessageLoadingComponent } from './loading';
import { NzDemoMessageOtherComponent } from './other';
import { NzDemoMessageZhComponent } from './zh.component';
import { NzDemoMessageEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoMessageEnComponent },
      { path: 'zh', component: NzDemoMessageZhComponent }
    ])
  ],
  declarations: [
		NzDemoMessageCloseComponent,
		NzDemoMessageDurationComponent,
		NzDemoMessageInfoComponent,
		NzDemoMessageLoadingComponent,
		NzDemoMessageOtherComponent,
		NzDemoMessageZhComponent,
		NzDemoMessageEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoMessageModule {

}
