import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { Department, CreateDepartmentRequest } from '../models/department.model';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'departments/';

    getAllDepartments(): Observable<Department[]> {
        return this.apiService.get<Department[]>(this.endpoint);
    }

    createDepartment(data: CreateDepartmentRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}create/`, data);
    }

    deleteDepartment(id: number): Observable<ApiResponse> {
        return this.apiService.delete<ApiResponse>(`${this.endpoint}${id}/delete/`);
    }
}
