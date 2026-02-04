export interface User {
    id: number;
    username: string;
    email: string;
}

export interface UserProfile {
    user: User;
    role: string;
}

export interface CreateUserRequest {
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface UpdateUserRequest {
    username?: string;
    email?: string;
    password?: string;
    role?: string;
}
