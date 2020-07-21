import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoEmptyBasicComponent } from './basic';
import { NzDemoEmptyConfigComponent } from './config';
import { NzDemoEmptyCustomizeComponent } from './customize';
import { NzDemoEmptyDescriptionComponent } from './description';
import { NzDemoEmptySimpleComponent } from './simple';
import { NzDemoEmptyZhComponent } from './zh.component';
import { NzDemoEmptyEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoEmptyEnComponent },
      { path: 'zh', component: NzDemoEmptyZhComponent }
    ])
  ],
  declarations: [
		NzDemoEmptyBasicComponent,
		NzDemoEmptyConfigComponent,
		NzDemoEmptyCustomizeComponent,
		NzDemoEmptyDescriptionComponent,
		NzDemoEmptySimpleComponent,
		NzDemoEmptyZhComponent,
		NzDemoEmptyEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoEmptyModule {

}
