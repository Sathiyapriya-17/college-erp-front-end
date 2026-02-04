export interface TimetableEntry {
    id: number;
    subjectId: number;
    subjectName: string;
    facultyId: number;
    facultyName: string;
    roomId: string; // or number depending on backend
    startTime: string; // HH:mm
    endTime: string; // HH:mm
}

export interface DaySchedule {
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
    entries: TimetableEntry[];
}

export interface CreateTimetableEntryRequest {
    classId: number;
    subjectId: number;
    facultyId: number;
    day: string;
    startTime: string;
    endTime: string;
    roomId: string;
}
