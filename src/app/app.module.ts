import { routes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularmModule, AngularmService } from 'angularm';

import { AppComponent } from './app.component';
import { AppListingTableComponent } from './app-listing-table/app-listing-table.component';
import { RouterModule } from "@angular/router";
import { AppShowEntityComponent } from './app-show-entity/app-show-entity.component';
import { LinePropertyComponent } from './app-show-entity/line-property/line-property.component';
import { AppFormComponentComponent } from './app-form-component/app-form-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppListingTableComponent,
    AppShowEntityComponent,
    LinePropertyComponent,
    AppFormComponentComponent
  ],
  imports: [
    BrowserModule, AngularmModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [AngularmService],
  bootstrap: [AppComponent],
  entryComponents: [LinePropertyComponent]
})
export class AppModule { }
