import { Routes } from "@angular/router";
import { AppListingTableComponent } from './app-listing-table/app-listing-table.component';

export const routes: Routes = [
    {path: ':entity', component: AppListingTableComponent}
]