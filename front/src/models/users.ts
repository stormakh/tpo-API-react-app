// Define the user session interface
export interface UserSession {
    id: number;
    firstname: string;
    lastname: string;
    type: UserType;
    password: string;
    email: string;
    dni?: string;
}

export interface UserRegister{
    
}

export type UserType = 'admin' | 'customer' | 'seller';