export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    enrollmentNo: string;
    departmentId: number;
    batch: string;
    dateOfBirth?: string;
    address?: string;
    phone?: string;
}

export interface CreateStudentRequest {
    firstName: string;
    lastName: string;
    email: string;
    enrollmentNo: string;
    departmentId: number;
    batch: string;
    dateOfBirth?: string;
    address?: string;
    phone?: string;
}

export interface UpdateStudentRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
    enrollmentNo?: string;
    departmentId?: number;
    batch?: string;
    dateOfBirth?: string;
    address?: string;
    phone?: string;
}
