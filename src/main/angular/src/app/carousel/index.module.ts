import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { moduleList } from './module';

import { NzDemoCarouselAutoplayComponent } from './autoplay';
import { NzDemoCarouselBasicComponent } from './basic';
import { NzDemoCarouselFadeComponent } from './fade';
import { NzDemoCarouselPositionComponent } from './position';
import { NzDemoCarouselZhComponent } from './zh.component';
import { NzDemoCarouselEnComponent } from './en.component';


@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCarouselEnComponent },
      { path: 'zh', component: NzDemoCarouselZhComponent }
    ])
  ],
  declarations: [
		NzDemoCarouselAutoplayComponent,
		NzDemoCarouselBasicComponent,
		NzDemoCarouselFadeComponent,
		NzDemoCarouselPositionComponent,
		NzDemoCarouselZhComponent,
		NzDemoCarouselEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoCarouselModule {

}
