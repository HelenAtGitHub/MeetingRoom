import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoAffixBasicComponent } from './basic';
import { NzDemoAffixOnChangeComponent } from './on-change';
import { NzDemoAffixTargetComponent } from './target';
import { NzDemoAffixZhComponent } from './zh.component';
import { NzDemoAffixEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAffixEnComponent },
      { path: 'zh', component: NzDemoAffixZhComponent }
    ])
  ],
  declarations: [
		NzDemoAffixBasicComponent,
		NzDemoAffixOnChangeComponent,
		NzDemoAffixTargetComponent,
		NzDemoAffixZhComponent,
		NzDemoAffixEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoAffixModule {

}
