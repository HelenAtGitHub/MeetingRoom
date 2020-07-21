import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoResizableBasicComponent } from './basic';
import { NzDemoResizableCustomizeComponent } from './customize';
import { NzDemoResizableDrawerComponent } from './drawer';
import { NzDemoResizableGridComponent } from './grid';
import { NzDemoResizableLayoutComponent } from './layout';
import { NzDemoResizableLockAspectRatioComponent } from './lock-aspect-ratio';
import { NzDemoResizablePreviewComponent } from './preview';
import { NzDemoResizableTableComponent } from './table';
import { NzDemoResizableZhComponent } from './zh.component';
import { NzDemoResizableEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoResizableEnComponent },
      { path: 'zh', component: NzDemoResizableZhComponent }
    ])
  ],
  declarations: [
		NzDemoResizableBasicComponent,
		NzDemoResizableCustomizeComponent,
		NzDemoResizableDrawerComponent,
		NzDemoResizableGridComponent,
		NzDemoResizableLayoutComponent,
		NzDemoResizableLockAspectRatioComponent,
		NzDemoResizablePreviewComponent,
		NzDemoResizableTableComponent,
		NzDemoResizableZhComponent,
		NzDemoResizableEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoResizableModule {

}
