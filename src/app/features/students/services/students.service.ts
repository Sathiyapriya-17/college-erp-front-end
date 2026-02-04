import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { CreateStudentRequest, UpdateStudentRequest, Student } from '../models/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'students/';

    // Mock Data (Static) for Testing UI
    private mockStudents: Student[] = [
        { id: 1, firstName: 'Aarav', lastName: 'Sharma', email: 'aarav.s@college.edu', enrollmentNo: '2023001', departmentId: 101, batch: '2023', phone: '9876543210', address: 'Mumbai' },
        { id: 2, firstName: 'Priya', lastName: 'Patel', email: 'priya.p@college.edu', enrollmentNo: '2023002', departmentId: 102, batch: '2023', phone: '9876543211' },
        { id: 3, firstName: 'Rahul', lastName: 'Verma', email: 'rahul.v@college.edu', enrollmentNo: '2023003', departmentId: 101, batch: '2024', phone: '9876543212' },
        { id: 4, firstName: 'Ananya', lastName: 'Reddy', email: 'ananya.r@college.edu', enrollmentNo: '2023004', departmentId: 103, batch: '2024', phone: '9876543213' },
    ];

    getAllStudents(): Observable<Student[]> {
        // return this.apiService.get<Student[]>(this.endpoint);
        return of(this.mockStudents);
    }

    getStudentById(id: number): Observable<Student> {
        // return this.apiService.get<Student>(`${this.endpoint}${id}/`);
        const student = this.mockStudents.find(s => s.id === id);
        return of(student as Student);
    }

    createStudent(data: CreateStudentRequest): Observable<ApiResponse> {
        // return this.apiService.post<ApiResponse>(`${this.endpoint}create/`, data);

        const newId = this.mockStudents.length > 0 ? Math.max(...this.mockStudents.map(s => s.id)) + 1 : 1;
        const newStudent: Student = {
            id: newId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            enrollmentNo: data.enrollmentNo,
            departmentId: data.departmentId,
            batch: data.batch,
            dateOfBirth: data.dateOfBirth,
            address: data.address,
            phone: data.phone
        };
        this.mockStudents.push(newStudent);
        return of({ success: true, message: 'Student created successfully', data: newStudent });
    }

    updateStudent(id: number, data: UpdateStudentRequest): Observable<ApiResponse> {
        // return this.apiService.put<ApiResponse>(`${this.endpoint}${id}/update/`, data);

        const index = this.mockStudents.findIndex(s => s.id === id);
        if (index !== -1) {
            this.mockStudents[index] = { ...this.mockStudents[index], ...data };
            return of({ success: true, message: 'Student updated successfully' });
        }
        return of({ success: false, message: 'Student not found' });
    }

    deleteStudent(id: number): Observable<ApiResponse> {
        // return this.apiService.delete<ApiResponse>(`${this.endpoint}${id}/delete/`);

        this.mockStudents = this.mockStudents.filter(s => s.id !== id);
        return of({ success: true, message: 'Student deleted successfully' });
    }
}
