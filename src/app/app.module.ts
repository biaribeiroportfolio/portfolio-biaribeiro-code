import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PtBrComponent } from './pt-br/pt-br.component';
import { EnUsComponent } from './en-us/en-us.component';
import { BrazilFlagComponent } from './flags/brazil-flag/brazil-flag.component';
import { UsaFlagComponent } from './flags/usa-flag/usa-flag.component';

@NgModule({
  declarations: [
    AppComponent,
    PtBrComponent,
    EnUsComponent,
    BrazilFlagComponent,
    UsaFlagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
