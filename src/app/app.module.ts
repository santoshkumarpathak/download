import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ToggeleComponent } from './toggele/toggele.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadsComponent,
    ToggeleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
