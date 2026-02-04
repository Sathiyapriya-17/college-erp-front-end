import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { CreateCourseRequest, Course, Subject } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'courses/';

    private mockCourses: Course[] = [
        { id: 101, code: 'BSC-CS', name: 'B.Sc Computer Science', departmentId: 101, durationYears: 3, isActive: true },
        { id: 102, code: 'BCOM', name: 'Bachelor of Commerce', departmentId: 102, durationYears: 3, isActive: true },
        { id: 103, code: 'BA-ENG', name: 'B.A English Literature', departmentId: 103, durationYears: 3, isActive: false },
        { id: 104, code: 'MSC-IT', name: 'M.Sc Information Tech', departmentId: 101, durationYears: 2, isActive: true }
    ];

    getAllCourses(): Observable<Course[]> {
        return of(this.mockCourses);
    }

    createCourse(data: CreateCourseRequest): Observable<ApiResponse> {
        const newCourse: Course = {
            id: Math.floor(Math.random() * 1000),
            code: data.code,
            name: data.name,
            departmentId: data.departmentId,
            durationYears: data.durationYears,
            isActive: true
        };
        this.mockCourses.push(newCourse);
        return of({ success: true, message: 'Course created successfully' });
    }

    getCourseSubjects(courseId: number): Observable<Subject[]> {
        return of([]);
    }
}
