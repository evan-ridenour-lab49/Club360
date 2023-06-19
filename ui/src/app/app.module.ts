import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailRowComponent } from './components/detail-row/detail-row.component';
import { DetailObjectComponent } from './components/detail-object/detail-object.component';
import { DetailTreeComponent } from './components/detail-tree/detail-tree.component';
import { DetailListComponent } from './components/detail-list/detail-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DetailRowComponent,
    DetailObjectComponent,
    DetailTreeComponent,
    DetailListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
