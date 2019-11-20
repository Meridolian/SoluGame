import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component"
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';
import { UserService } from "./services/user.service";
import { SoluceListComponent } from './components/soluce/soluce-list/soluce-list.component';
import { SingleSoluceComponent } from './components/soluce/single-soluce/single-soluce.component';
import { SoluceFormComponent } from './components/soluce/soluce-form/soluce-form.component';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule 
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        SignInComponent,
        SignUpComponent,
        AuthComponent,
        SoluceListComponent,
        SingleSoluceComponent,
        SoluceFormComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
