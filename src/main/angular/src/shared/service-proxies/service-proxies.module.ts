import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import * as UserService from './user-service';

@NgModule({
    providers: [
        UserService.UserServiceProxy
    ]
})
export class ServiceProxyModule { }
