
// Define the user session interface
export interface UserSession {
    id: number;
    username: string;
    type: UserType;
    password: string;
    email: string;
    
}

export type UserType = 'admin' | 'customer' | 'seller';