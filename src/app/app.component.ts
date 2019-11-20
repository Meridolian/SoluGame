import { Component, OnInit } from "@angular/core";
/* const firebase = require("nativescript-plugin-firebase");  */

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    auth: boolean = false;

    constructor() {
    }

    ngOnInit() {
        /* firebase.init({
            onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when they re-visit your app
              console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
              if (data.loggedIn) {
                console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
              }
            }
          }); */
      }

}