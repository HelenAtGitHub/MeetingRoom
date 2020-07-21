import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoNotificationBasicComponent } from './basic';
import { NzDemoNotificationCustomIconComponent } from './custom-icon';
import { NzDemoNotificationCustomStyleComponent } from './custom-style';
import { NzDemoNotificationDurationComponent } from './duration';
import { NzDemoNotificationPlacementComponent } from './placement';
import { NzDemoNotificationTemplateComponent } from './template';
import { NzDemoNotificationUpdateComponent } from './update';
import { NzDemoNotificationWithBtnComponent } from './with-btn';
import { NzDemoNotificationWithIconComponent } from './with-icon';
import { NzDemoNotificationZhComponent } from './zh.component';
import { NzDemoNotificationEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoNotificationEnComponent },
      { path: 'zh', component: NzDemoNotificationZhComponent }
    ])
  ],
  declarations: [
		NzDemoNotificationBasicComponent,
		NzDemoNotificationCustomIconComponent,
		NzDemoNotificationCustomStyleComponent,
		NzDemoNotificationDurationComponent,
		NzDemoNotificationPlacementComponent,
		NzDemoNotificationTemplateComponent,
		NzDemoNotificationUpdateComponent,
		NzDemoNotificationWithBtnComponent,
		NzDemoNotificationWithIconComponent,
		NzDemoNotificationZhComponent,
		NzDemoNotificationEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoNotificationModule {

}
