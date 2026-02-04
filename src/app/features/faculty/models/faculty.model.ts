export interface Faculty {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    departmentId: number;
    designation: string;
    qualification: string;
    joiningDate: string;
    phone?: string;
    address?: string;
}

export interface CreateFacultyRequest {
    firstName: string;
    lastName: string;
    email: string;
    departmentId: number;
    designation: string;
    qualification: string;
    joiningDate: string;
    phone?: string;
    address?: string;
}

export interface UpdateFacultyRequest {
    firstName?: string;
    lastName?: string;
    email?: string;
    departmentId?: number;
    designation?: string;
    qualification?: string;
    joiningDate?: string;
    phone?: string;
    address?: string;
}
