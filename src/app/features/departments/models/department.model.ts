export interface Department {
    id: number;
    name: string;
    code: string;
    headOfDepartmentId?: number; // Faculty ID
    description?: string;
}

export interface CreateDepartmentRequest {
    name: string;
    code: string;
    headOfDepartmentId?: number;
    description?: string;
}
