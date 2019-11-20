import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '~/app/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'ns-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	minDate: Date = new Date(1900, 1, 1);
	maxDate: Date = new Date(2019, 12, 31);

	errorMessage: string;
	username: string;
	email: string;
	password: string;
	birthday: Date;

	constructor(private userService: UserService, private router: Router) {
	}

	ngOnInit() {
	}

	test(){
		console.log(this.birthday)
	}

	onSignUp() {
		if ((this.username === '' || this.username === undefined)
			|| (this.email === '' || this.email === undefined)
			|| (this.password === '' || this.password === undefined)
			|| (this.birthday === undefined)) {
			this.errorMessage = "Veuillez rentrer tous les champs pour vous inscrire.";
		}
		else {
			if (this.userService.createUser(this.username, this.email, this.password, this.birthday) === 'true') {
				delete this.errorMessage;
				delete this.username;
				delete this.email;
				delete this.password;
				delete this.birthday;
				this.router.navigate(['/home']);
			}
			else {
				this.errorMessage = this.userService.createUser(this.username, this.email, this.password, this.birthday);
			}
			/* this.userService.createUser(this.username, this.email, this.password, this.birthday).then(
				() => {
					this.app.auth = true;
					delete this.errorMessage;
					delete this.username;
					delete this.email;
					delete this.password;
					delete this.birthday;
					this.router.navigate(['/home']);
				},
				(error) => {
					this.errorMessage = error;
				}
			); */
		}
	}

}
