import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoCommentBasicComponent } from './basic';
import { NzDemoCommentEditorComponent } from './editor';
import { NzDemoCommentListComponent } from './list';
import { NzDemoCommentNestedComponent } from './nested';
import { NzDemoCommentZhComponent } from './zh.component';
import { NzDemoCommentEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCommentEnComponent },
      { path: 'zh', component: NzDemoCommentZhComponent }
    ])
  ],
  declarations: [
		NzDemoCommentBasicComponent,
		NzDemoCommentEditorComponent,
		NzDemoCommentListComponent,
		NzDemoCommentNestedComponent,
		NzDemoCommentZhComponent,
		NzDemoCommentEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoCommentModule {

}
