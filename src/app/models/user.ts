export default class User {

    id: number;
    userName: string;
    email: string;
    password: string;
    birthday: Date;

    constructor(id: number, userName: string, email: string, password: string, birthday: Date) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
    }
    
}