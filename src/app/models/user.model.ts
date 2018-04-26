export class User {

    constructor(
        public username: string,
        public email: string,
        public password: string,
        public avatar?: string,
        public role?: string,
        public _id?: string
    ) { }

}
