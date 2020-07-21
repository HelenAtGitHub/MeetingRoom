import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoAlertBannerComponent } from './banner';
import { NzDemoAlertBasicComponent } from './basic';
import { NzDemoAlertClosableComponent } from './closable';
import { NzDemoAlertCloseTextComponent } from './close-text';
import { NzDemoAlertDescriptionComponent } from './description';
import { NzDemoAlertIconComponent } from './icon';
import { NzDemoAlertStyleComponent } from './style';
import { NzDemoAlertZhComponent } from './zh.component';
import { NzDemoAlertEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAlertEnComponent },
      { path: 'zh', component: NzDemoAlertZhComponent }
    ])
  ],
  declarations: [
		NzDemoAlertBannerComponent,
		NzDemoAlertBasicComponent,
		NzDemoAlertClosableComponent,
		NzDemoAlertCloseTextComponent,
		NzDemoAlertDescriptionComponent,
		NzDemoAlertIconComponent,
		NzDemoAlertStyleComponent,
		NzDemoAlertZhComponent,
		NzDemoAlertEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoAlertModule {

}
