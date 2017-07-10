import { AppFormComponentComponent } from './app-form-component/app-form-component.component';
import { AppShowEntityComponent } from './app-show-entity/app-show-entity.component';
import { Routes } from "@angular/router";
import { AppListingTableComponent } from './app-listing-table/app-listing-table.component';

export const routes: Routes = [
    {path: ':entity', component: AppListingTableComponent},
    {path: ':entity/new', component: AppFormComponentComponent},
    {path: ':entity/:id/show', component: AppShowEntityComponent}
]