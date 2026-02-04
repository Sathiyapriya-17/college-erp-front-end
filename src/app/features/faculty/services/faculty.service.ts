import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { CreateFacultyRequest, UpdateFacultyRequest, Faculty } from '../models/faculty.model';

@Injectable({
    providedIn: 'root'
})
export class FacultyService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'faculty/';

    private mockFaculty: Faculty[] = [
        { id: 1, firstName: 'Dr. Vikram', lastName: 'Sarabhai', email: 'vikram@college.edu', departmentId: 101, designation: 'Professor', qualification: 'PhD Physics', joiningDate: '2015-06-01' },
        { id: 2, firstName: 'Prof. C.V.', lastName: 'Raman', email: 'raman@college.edu', departmentId: 102, designation: 'HOD', qualification: 'PhD Science', joiningDate: '2010-01-15' },
        { id: 3, firstName: 'Srinivasa', lastName: 'Ramanujan', email: 'srinivasa@college.edu', departmentId: 103, designation: 'Senior Lecturer', qualification: 'M.Sc Maths', joiningDate: '2018-08-20' }
    ];

    getAllFaculty(): Observable<Faculty[]> {
        // return this.apiService.get<Faculty[]>(this.endpoint);
        return of(this.mockFaculty);
    }

    getFacultyById(id: number): Observable<Faculty> {
        // return this.apiService.get<Faculty>(`${this.endpoint}${id}/`);
        const faculty = this.mockFaculty.find(f => f.id === id);
        return of(faculty as Faculty);
    }

    createFaculty(data: CreateFacultyRequest): Observable<ApiResponse> {
        // return this.apiService.post<ApiResponse>(`${this.endpoint}create/`, data);
        const newId = this.mockFaculty.length > 0 ? Math.max(...this.mockFaculty.map(f => f.id)) + 1 : 1;
        const newFaculty: Faculty = {
            id: newId,
            ...data
        };
        this.mockFaculty.push(newFaculty);
        return of({ success: true, message: 'Faculty created successfully', data: newFaculty });
    }

    updateFaculty(id: number, data: UpdateFacultyRequest): Observable<ApiResponse> {
        // return this.apiService.put<ApiResponse>(`${this.endpoint}${id}/update/`, data);
        const index = this.mockFaculty.findIndex(f => f.id === id);
        if (index !== -1) {
            this.mockFaculty[index] = { ...this.mockFaculty[index], ...data };
            return of({ success: true, message: 'Faculty updated successfully' });
        }
        return of({ success: false, message: 'Faculty not found' });
    }

    deleteFaculty(id: number): Observable<ApiResponse> {
        // return this.apiService.delete<ApiResponse>(`${this.endpoint}${id}/delete/`);
        this.mockFaculty = this.mockFaculty.filter(f => f.id !== id);
        return of({ success: true, message: 'Faculty deleted successfully' });
    }
}
