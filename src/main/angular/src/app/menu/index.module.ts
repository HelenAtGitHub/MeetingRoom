import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoMenuHorizontalComponent } from './horizontal';
import { NzDemoMenuInlineCollapsedComponent } from './inline-collapsed';
import { NzDemoMenuInlineComponent } from './inline';
import { NzDemoMenuRecursiveComponent } from './recursive';
import { NzDemoMenuRouterComponent } from './router';
import { NzDemoMenuSiderCurrentComponent } from './sider-current';
import { NzDemoMenuSwitchModeComponent } from './switch-mode';
import { NzDemoMenuThemeComponent } from './theme';
import { NzDemoMenuVerticalComponent } from './vertical';
import { NzDemoMenuZhComponent } from './zh.component';
import { NzDemoMenuEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoMenuEnComponent },
      { path: 'zh', component: NzDemoMenuZhComponent }
    ])
  ],
  declarations: [
		NzDemoMenuHorizontalComponent,
		NzDemoMenuInlineCollapsedComponent,
		NzDemoMenuInlineComponent,
		NzDemoMenuRecursiveComponent,
		NzDemoMenuRouterComponent,
		NzDemoMenuSiderCurrentComponent,
		NzDemoMenuSwitchModeComponent,
		NzDemoMenuThemeComponent,
		NzDemoMenuVerticalComponent,
		NzDemoMenuZhComponent,
		NzDemoMenuEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoMenuModule {

}
