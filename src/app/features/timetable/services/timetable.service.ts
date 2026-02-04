import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { TimetableEntry, DaySchedule, CreateTimetableEntryRequest } from '../models/timetable.model';

@Injectable({
    providedIn: 'root'
})
export class TimetableService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'timetable/';

    getClassTimetable(classId: number): Observable<DaySchedule[]> {
        return this.apiService.get<DaySchedule[]>(`${this.endpoint}class/${classId}`);
    }

    getFacultyTimetable(facultyId: number): Observable<DaySchedule[]> {
        return this.apiService.get<DaySchedule[]>(`${this.endpoint}faculty/${facultyId}`);
    }

    createTimetableEntry(data: CreateTimetableEntryRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}entry/create/`, data);
    }

    checkConflicts(data: CreateTimetableEntryRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}check-conflicts/`, data);
    }
}
