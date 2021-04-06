import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './api.http.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

import { FilterPipe } from './pipes/filter.pipe';
import { NoRumDirective } from './directives/noRum.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FilterPipe,
    NoRumDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    ToastrModule.forRoot(),
    DragDropModule,
  ],
  providers: [ AppComponent,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
