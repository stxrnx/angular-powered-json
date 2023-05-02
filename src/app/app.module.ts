import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';

import { UserService } from './user.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormlyBootstrapModule, FormlyModule.forRoot()],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [UserService],
})
export class AppModule {}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */