import { Injectable } from '@angular/core';
import User from '../models/user';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	users: User[] = [];

	constructor(private router: Router) {
		const firstUser = new User(0, 'Tchoupi', 'mgueribout@gmail.com', 'admin', new Date(1998, 2, 17));
		this.users.push(firstUser);
	}

	createUser(userName: string, email: string, password: string, birthday: Date) {
		let id = this.users.length
		let user = new User(id, userName, email, password, birthday);
		if ((this.users.some(user => user.userName === userName))
			|| (this.users.some(user => user.email === email))) {
			return "L'email ou le pseudo existe déjà.";
		}
		else {
			this.users.push(user);
		}

		/* return new Promise(
			(resolve, reject) => {
				firebase.auth().createUserWithEmailAndPassword(email, password).then(
					() => {
						resolve();
						this.users.push(user);
					},
					(error) => {
						reject(error);
					}
				);
			}
		); */
	}

	signInUser(userName: string, password: string) {
		let temp: boolean = false;
		let userList = this.users;
		for(var i = 0; i < userList.length; i++){
			let currentUser = userList[i];
			if(currentUser.userName === userName && currentUser.password === password){
				temp = true;
			}
		}
		
		if(temp){
			return 'true';
		}
		else {
			return "L'identifiant ou le mot de passe est incorrect";
		}
		/* return new Promise(
			(resolve, reject) => {
				firebase.auth().signInWithEmailAndPassword(email, password).then(
					() => {
						resolve();
					},
					(error) => {
						reject(error);
					}
				);
			}
		)  */
	}

	signOutUser() {
		this.router.navigate(['/auth'])
		/* firebase.auth().signOut(); */
	}

	/* updateUser(updateType){
		switch(updateType){
			case 'email'
		}
	} */

}