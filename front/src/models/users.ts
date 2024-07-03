// Define the user session interface
export interface UserSession {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    dni: string | null;
    address: string | null;
    city: string | null;
    postalCode: string | null;
    phone: string | null;
    fullName: string;
    role: UserType;
}


export interface UserRegister{
    
}

export type UserType = 'ADMIN' | 'USER' | 'SELLER';