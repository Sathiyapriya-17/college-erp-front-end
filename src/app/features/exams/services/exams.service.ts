import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { Exam, ExamMark, ExamResult, ScheduleExamRequest, RecordMarksRequest } from '../models/exam.model';

@Injectable({
    providedIn: 'root'
})
export class ExamsService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'exams/';

    scheduleExam(data: ScheduleExamRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}schedule/`, data);
    }

    recordMarks(data: RecordMarksRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}marks/record/`, data);
    }

    getStudentResults(studentId: number): Observable<ExamResult[]> {
        return this.apiService.get<ExamResult[]>(`${this.endpoint}results/student/${studentId}`);
    }

    getExamDetails(examId: number): Observable<Exam> {
        return this.apiService.get<Exam>(`${this.endpoint}${examId}/`);
    }
}
