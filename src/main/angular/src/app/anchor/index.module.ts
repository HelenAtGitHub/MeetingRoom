import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoAnchorBasicComponent } from './basic';
import { NzDemoAnchorStaticComponent } from './static';
import { NzDemoAnchorZhComponent } from './zh.component';
import { NzDemoAnchorEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAnchorEnComponent },
      { path: 'zh', component: NzDemoAnchorZhComponent }
    ])
  ],
  declarations: [
		NzDemoAnchorBasicComponent,
		NzDemoAnchorStaticComponent,
		NzDemoAnchorZhComponent,
		NzDemoAnchorEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoAnchorModule {

}
