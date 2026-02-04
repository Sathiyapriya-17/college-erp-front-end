import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { AttendanceRecord, AttendanceSummary, RecordAttendanceRequest } from '../models/attendance.model';

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'attendance/';

    recordAttendance(data: RecordAttendanceRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}record/`, data);
    }

    getAttendanceBySubject(studentId: number, subjectId: number): Observable<AttendanceRecord[]> {
        return this.apiService.get<AttendanceRecord[]>(`${this.endpoint}student/${studentId}/subject/${subjectId}`);
    }

    getAttendanceReport(classId: number, startDate: string, endDate: string): Observable<AttendanceSummary> {
        return this.apiService.get<AttendanceSummary>(`${this.endpoint}report/`, { classId, startDate, endDate });
    }
}
