export interface Course {
    id: number;
    name: string;
    code: string;
    durationYears: number;
    departmentId: number;
    description?: string;
    isActive?: boolean;
}

export interface Subject {
    id: number;
    name: string;
    code: string;
    courseId: number;
    semester: number; // 1 to 8 usually
    credits: number;
    type: 'Core' | 'Elective';
}

export interface CreateCourseRequest {
    name: string;
    code: string;
    durationYears: number;
    departmentId: number;
    description?: string;
}
