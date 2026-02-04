export interface AttendanceRecord {
    id: number;
    studentId: number;
    subjectId: number;
    date: string;
    status: 'Present' | 'Absent' | 'Late';
    remarks?: string;
}

export interface RecordAttendanceRequest {
    subjectId: number;
    date: string;
    attendanceData: { studentId: number; status: 'Present' | 'Absent' | 'Late' }[];
}

export interface AttendanceSummary {
    totalClasses: number;
    totalPresent: number;
    totalAbsent: number;
    percentage: number;
    records: AttendanceRecord[];
}
