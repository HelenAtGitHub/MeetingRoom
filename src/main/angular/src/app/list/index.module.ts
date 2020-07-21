import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoListBasicComponent } from './basic';
import { NzDemoListGridComponent } from './grid';
import { NzDemoListInfiniteLoadComponent } from './infinite-load';
import { NzDemoListLoadmoreComponent } from './loadmore';
import { NzDemoListResposiveComponent } from './resposive';
import { NzDemoListSimpleComponent } from './simple';
import { NzDemoListVerticalComponent } from './vertical';
import { NzDemoListZhComponent } from './zh.component';
import { NzDemoListEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoListEnComponent },
      { path: 'zh', component: NzDemoListZhComponent }
    ])
  ],
  declarations: [
		NzDemoListBasicComponent,
		NzDemoListGridComponent,
		NzDemoListInfiniteLoadComponent,
		NzDemoListLoadmoreComponent,
		NzDemoListResposiveComponent,
		NzDemoListSimpleComponent,
		NzDemoListVerticalComponent,
		NzDemoListZhComponent,
		NzDemoListEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoListModule {

}
