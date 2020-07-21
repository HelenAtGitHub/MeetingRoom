import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoPaginationBasicComponent } from './basic';
import { NzDemoPaginationChangerComponent } from './changer';
import { NzDemoPaginationControlledComponent } from './controlled';
import { NzDemoPaginationItemRenderComponent } from './item-render';
import { NzDemoPaginationJumpComponent } from './jump';
import { NzDemoPaginationMiniComponent } from './mini';
import { NzDemoPaginationMoreComponent } from './more';
import { NzDemoPaginationSimpleComponent } from './simple';
import { NzDemoPaginationTotalComponent } from './total';
import { NzDemoPaginationZhComponent } from './zh.component';
import { NzDemoPaginationEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoPaginationEnComponent },
      { path: 'zh', component: NzDemoPaginationZhComponent }
    ])
  ],
  declarations: [
		NzDemoPaginationBasicComponent,
		NzDemoPaginationChangerComponent,
		NzDemoPaginationControlledComponent,
		NzDemoPaginationItemRenderComponent,
		NzDemoPaginationJumpComponent,
		NzDemoPaginationMiniComponent,
		NzDemoPaginationMoreComponent,
		NzDemoPaginationSimpleComponent,
		NzDemoPaginationTotalComponent,
		NzDemoPaginationZhComponent,
		NzDemoPaginationEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoPaginationModule {

}
