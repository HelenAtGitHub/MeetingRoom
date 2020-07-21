import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoCodeEditorBasicComponent } from './basic';
import { NzDemoCodeEditorComplexComponent } from './complex';
import { NzDemoCodeEditorConfigComponent } from './config';
import { NzDemoCodeEditorDiffComponent } from './diff';
import { NzDemoCodeEditorFullControlComponent } from './full-control';
import { NzDemoCodeEditorZhComponent } from './zh.component';
import { NzDemoCodeEditorEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCodeEditorEnComponent },
      { path: 'zh', component: NzDemoCodeEditorZhComponent }
    ])
  ],
  declarations: [
		NzDemoCodeEditorBasicComponent,
		NzDemoCodeEditorComplexComponent,
		NzDemoCodeEditorConfigComponent,
		NzDemoCodeEditorDiffComponent,
		NzDemoCodeEditorFullControlComponent,
		NzDemoCodeEditorZhComponent,
		NzDemoCodeEditorEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoCodeEditorModule {

}
