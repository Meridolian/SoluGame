/* import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppComponent } from "~/app/app.component"
import { Observable } from 'tns-core-modules/ui/page/page';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private app: AppComponent) { }

	canActivate(): Observable<boolean> | Promise<boolean> |  boolean {

		
		return new Promise(
			(resolve, reject) => {
				this.authState(
					(this.app.auth) => {
						if(auth) {
							resolve(true);
						}
						else {
							this.router.navigate(['/auth']);
							resolve(false);
						}
					},
					(error) => {
						reject(error);
					}
				)
			}
		);

		/* return new Promise(
			(resolve, reject) => {
				firebase.auth().onAuthStateChanged(
					(user) => {
						if (user) {
							resolve(true);
						}
						else {
							this.router.navigate(['/auth']);
							resolve(false);
						}
					},
					(error) => {
						reject(error);
					}
				)
			}
		) 
	}

	authState(auth, error){
		if (auth) {
			return true;
		}
		else {
			this.router.navigate(['/auth']);
			return false;
		}
	}
}
 */