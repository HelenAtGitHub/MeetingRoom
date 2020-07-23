import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { UsersComponent } from './administrator/users.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/header/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    NzButtonModule,
    NzSelectModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzMenuModule,
    NzDropDownModule,
    NzPopoverModule,
    NzAffixModule,
    NzI18nModule,
    NzMessageModule,
    NzBadgeModule,
    HttpClientModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzCardModule,
    NzTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
