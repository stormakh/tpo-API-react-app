// Define the user session interface
export interface UserSession {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dni: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
    orders: [];
    role: string;
    enabled: boolean;
    username: string;
    type: UserType;
    authorities: {
        authority: string
    }
}


export interface UserRegister{
    
}

export type UserType = 'ADMIN' | 'CUSTOMER' | 'SELLER';