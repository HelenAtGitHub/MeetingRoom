import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoDescriptionsBasicComponent } from './basic';
import { NzDemoDescriptionsBorderComponent } from './border';
import { NzDemoDescriptionsCustomSizeComponent } from './custom-size';
import { NzDemoDescriptionsResponsiveComponent } from './responsive';
import { NzDemoDescriptionsVerticalBorderComponent } from './vertical-border';
import { NzDemoDescriptionsVerticalComponent } from './vertical';
import { NzDemoDescriptionsZhComponent } from './zh.component';
import { NzDemoDescriptionsEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDescriptionsEnComponent },
      { path: 'zh', component: NzDemoDescriptionsZhComponent }
    ])
  ],
  declarations: [
		NzDemoDescriptionsBasicComponent,
		NzDemoDescriptionsBorderComponent,
		NzDemoDescriptionsCustomSizeComponent,
		NzDemoDescriptionsResponsiveComponent,
		NzDemoDescriptionsVerticalBorderComponent,
		NzDemoDescriptionsVerticalComponent,
		NzDemoDescriptionsZhComponent,
		NzDemoDescriptionsEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoDescriptionsModule {

}
