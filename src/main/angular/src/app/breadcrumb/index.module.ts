import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoBreadcrumbAutoComponent } from './auto';
import { NzDemoBreadcrumbBasicComponent } from './basic';
import { NzDemoBreadcrumbDropdownComponent } from './dropdown';
import { NzDemoBreadcrumbRouterComponent } from './router';
import { NzDemoBreadcrumbSeparatorIndependentComponent } from './separator-independent';
import { NzDemoBreadcrumbSeparatorComponent } from './separator';
import { NzDemoBreadcrumbWithIconComponent } from './with-icon';
import { NzDemoBreadcrumbZhComponent } from './zh.component';
import { NzDemoBreadcrumbEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoBreadcrumbEnComponent },
      { path: 'zh', component: NzDemoBreadcrumbZhComponent }
    ])
  ],
  declarations: [
		NzDemoBreadcrumbAutoComponent,
		NzDemoBreadcrumbBasicComponent,
		NzDemoBreadcrumbDropdownComponent,
		NzDemoBreadcrumbRouterComponent,
		NzDemoBreadcrumbSeparatorIndependentComponent,
		NzDemoBreadcrumbSeparatorComponent,
		NzDemoBreadcrumbWithIconComponent,
		NzDemoBreadcrumbZhComponent,
		NzDemoBreadcrumbEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoBreadcrumbModule {

}
