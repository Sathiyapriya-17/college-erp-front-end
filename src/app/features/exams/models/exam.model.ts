export interface Exam {
    id: number;
    name: string;
    type: 'Internal' | 'semester' | 'Other';
    startDate: string;
    endDate: string;
    batch: string;
}

export interface ScheduleExamRequest {
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    subjects: { subjectId: number; date: string; time: string }[];
}

export interface ExamMark {
    studentId: number;
    marksObtained: number;
    maxMarks: number;
}

export interface RecordMarksRequest {
    examId: number;
    subjectId: number;
    marks: ExamMark[];
}

export interface ExamResult {
    examId: number;
    examName: string;
    subjectId: number;
    subjectName: string;
    marksObtained: number;
    maxMarks: number;
    grade: string;
    status: 'Pass' | 'Fail';
}
