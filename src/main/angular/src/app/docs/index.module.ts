import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';

import { NzDocAnimationsEnComponent } from './animations-en';
import { NzDocAnimationsZhComponent } from './animations-zh';
import { NzDocChangelogEnComponent } from './changelog-en';
import { NzDocChangelogZhComponent } from './changelog-zh';
import { NzDocContributingEnComponent } from './contributing-en';
import { NzDocContributingZhComponent } from './contributing-zh';
import { NzDocCustomizeThemeEnComponent } from './customize-theme-en';
import { NzDocCustomizeThemeZhComponent } from './customize-theme-zh';
import { NzDocFaqEnComponent } from './faq-en';
import { NzDocFaqZhComponent } from './faq-zh';
import { NzDocGettingStartedEnComponent } from './getting-started-en';
import { NzDocGettingStartedZhComponent } from './getting-started-zh';
import { NzDocGlobalConfigEnComponent } from './global-config-en';
import { NzDocGlobalConfigZhComponent } from './global-config-zh';
import { NzDocI18nEnComponent } from './i18n-en';
import { NzDocI18nZhComponent } from './i18n-zh';
import { NzDocIntroduceEnComponent } from './introduce-en';
import { NzDocIntroduceZhComponent } from './introduce-zh';
import { NzDocMigrationV9EnComponent } from './migration-v9-en';
import { NzDocMigrationV9ZhComponent } from './migration-v9-zh';
import { NzDocRecommendationEnComponent } from './recommendation-en';
import { NzDocRecommendationZhComponent } from './recommendation-zh';
import { NzDocSchematicsEnComponent } from './schematics-en';
import { NzDocSchematicsZhComponent } from './schematics-zh';
import { NzDocUniversalEnComponent } from './universal-en';
import { NzDocUniversalZhComponent } from './universal-zh';


@NgModule({
  imports     : [
    ShareModule,
    RouterModule.forChild([
			{ path: 'animations/zh', component: NzDocAnimationsZhComponent },
			{ path: 'animations/en', component: NzDocAnimationsEnComponent },
			{ path: 'changelog/zh', component: NzDocChangelogZhComponent },
			{ path: 'changelog/en', component: NzDocChangelogEnComponent },
			{ path: 'contributing/zh', component: NzDocContributingZhComponent },
			{ path: 'contributing/en', component: NzDocContributingEnComponent },
			{ path: 'customize-theme/zh', component: NzDocCustomizeThemeZhComponent },
			{ path: 'customize-theme/en', component: NzDocCustomizeThemeEnComponent },
			{ path: 'faq/zh', component: NzDocFaqZhComponent },
			{ path: 'faq/en', component: NzDocFaqEnComponent },
			{ path: 'getting-started/zh', component: NzDocGettingStartedZhComponent },
			{ path: 'getting-started/en', component: NzDocGettingStartedEnComponent },
			{ path: 'global-config/zh', component: NzDocGlobalConfigZhComponent },
			{ path: 'global-config/en', component: NzDocGlobalConfigEnComponent },
			{ path: 'i18n/zh', component: NzDocI18nZhComponent },
			{ path: 'i18n/en', component: NzDocI18nEnComponent },
			{ path: 'introduce/zh', component: NzDocIntroduceZhComponent },
			{ path: 'introduce/en', component: NzDocIntroduceEnComponent },
			{ path: 'migration-v9/zh', component: NzDocMigrationV9ZhComponent },
			{ path: 'migration-v9/en', component: NzDocMigrationV9EnComponent },
			{ path: 'recommendation/zh', component: NzDocRecommendationZhComponent },
			{ path: 'recommendation/en', component: NzDocRecommendationEnComponent },
			{ path: 'schematics/zh', component: NzDocSchematicsZhComponent },
			{ path: 'schematics/en', component: NzDocSchematicsEnComponent },
			{ path: 'universal/zh', component: NzDocUniversalZhComponent },
			{ path: 'universal/en', component: NzDocUniversalEnComponent },

    ])
  ],
  declarations: [
		NzDocAnimationsZhComponent,
		NzDocAnimationsEnComponent,
		NzDocChangelogZhComponent,
		NzDocChangelogEnComponent,
		NzDocContributingZhComponent,
		NzDocContributingEnComponent,
		NzDocCustomizeThemeZhComponent,
		NzDocCustomizeThemeEnComponent,
		NzDocFaqZhComponent,
		NzDocFaqEnComponent,
		NzDocGettingStartedZhComponent,
		NzDocGettingStartedEnComponent,
		NzDocGlobalConfigZhComponent,
		NzDocGlobalConfigEnComponent,
		NzDocI18nZhComponent,
		NzDocI18nEnComponent,
		NzDocIntroduceZhComponent,
		NzDocIntroduceEnComponent,
		NzDocMigrationV9ZhComponent,
		NzDocMigrationV9EnComponent,
		NzDocRecommendationZhComponent,
		NzDocRecommendationEnComponent,
		NzDocSchematicsZhComponent,
		NzDocSchematicsEnComponent,
		NzDocUniversalZhComponent,
		NzDocUniversalEnComponent,

  ]
})
export class NzDocsModule {

}
