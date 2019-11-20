import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '~/app/services/user.service';
import { Router } from '@angular/router';;

@Component({
	selector: 'ns-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	errorMessage: string;
	username: string;
	password: string;

	constructor(private userService: UserService, private router: Router) {
	}

	ngOnInit() {
	}

	onSignIn() {
		if ((this.username === '' || this.username === undefined)
			|| (this.password === '' || this.password === undefined)) {
			this.errorMessage = "Veuillez entrer un pseudo et un mot de passe.";
		}
		else {
			if (this.userService.signInUser(this.username, this.password) === 'true') {
				delete this.errorMessage;
				delete this.username;
        delete this.password;
				this.router.navigate(['/home']);
			}
			else {
				this.errorMessage = this.userService.signInUser(this.username, this.password);
			}
			/* this.userService.signInUser(this.username, this.password).then(
				() => {
					delete this.errorMessage;
					delete this.username;
					delete this.password;
					this.app.auth = true;
					this.router.navigate(['/home']);
				},
				(error) => {
					this.errorMessage = error;
				}
			); */
		}
	}

}
