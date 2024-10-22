import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyResourcesComponent } from './pages/my-resources/my-resources.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "home", component: HomeComponent},
    {path: "my-resources", component: MyResourcesComponent}
];
