import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AuthComponent } from "./components/auth/auth.component";


const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    /* { path: "auth", component: AuthComponent }, */
    { path: "home", component: HomeComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
