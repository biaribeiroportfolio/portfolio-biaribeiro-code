import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PtBrComponent } from './pt-br/pt-br.component';
import { EnUsComponent } from './en-us/en-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PtBrComponent,
    EnUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
