interface RegisterUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

interface LoginUser {
    email: string;
    password: string;
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    id?: string;
}

export type { RegisterUser, LoginUser, User };
