import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { API_BASE_URL } from './shared/service-proxies/user-service';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {AppModule} from './app/app.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RootRoutingModule,
        HttpClientModule,
        AppModule
    ],
    declarations: [
        RootComponent
    ],
    providers: [
        { provide: API_BASE_URL, useValue: "/" }
    ],
    bootstrap: [RootComponent]
})

export class RootModule { }