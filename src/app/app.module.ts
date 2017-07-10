import { routes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularmModule, AngularmService } from 'angularm';

import { AppComponent } from './app.component';
import { AppListingTableComponent } from './app-listing-table/app-listing-table.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AppListingTableComponent
  ],
  imports: [
    BrowserModule, AngularmModule, RouterModule.forRoot(routes)
  ],
  providers: [AngularmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
