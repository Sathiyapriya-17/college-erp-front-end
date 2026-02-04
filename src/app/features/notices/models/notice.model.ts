export interface Notice {
    id: number;
    title: string;
    content: string;
    publishDate: string;
    expiryDate?: string;
    targetRole: 'all' | 'student' | 'faculty';
    departmentId?: number; // Optional, if null implies all departments
}

export interface CreateNoticeRequest {
    title: string;
    content: string;
    expiryDate?: string;
    targetRole: 'all' | 'student' | 'faculty';
    departmentId?: number;
}
