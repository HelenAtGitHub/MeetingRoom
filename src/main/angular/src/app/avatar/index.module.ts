import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoAvatarBadgeComponent } from './badge';
import { NzDemoAvatarBasicComponent } from './basic';
import { NzDemoAvatarDynamicComponent } from './dynamic';
import { NzDemoAvatarTypeComponent } from './type';
import { NzDemoAvatarZhComponent } from './zh.component';
import { NzDemoAvatarEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAvatarEnComponent },
      { path: 'zh', component: NzDemoAvatarZhComponent }
    ])
  ],
  declarations: [
		NzDemoAvatarBadgeComponent,
		NzDemoAvatarBasicComponent,
		NzDemoAvatarDynamicComponent,
		NzDemoAvatarTypeComponent,
		NzDemoAvatarZhComponent,
		NzDemoAvatarEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoAvatarModule {

}
