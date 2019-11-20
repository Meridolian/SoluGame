import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ns-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	signType: string = 'signIn';

	constructor() { }

	ngOnInit() {
	}

	onSignChoice(type){
		this.signType = type;
	}

}
