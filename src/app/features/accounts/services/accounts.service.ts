import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { CreateUserRequest, UpdateUserRequest, UserProfile } from '../models/user.model';
import { ApiResponse } from '../../../core/models/api-response.interface';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'users/';

    getAllUsers(): Observable<UserProfile[]> {
        return this.apiService.get<UserProfile[]>(this.endpoint);
    }

    getUserById(userId: number): Observable<UserProfile> {
        return this.apiService.get<UserProfile>(`${this.endpoint}${userId}/`);
    }

    createUser(data: CreateUserRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}create/`, data);
    }

    updateUser(userId: number, data: UpdateUserRequest): Observable<ApiResponse> {
        return this.apiService.put<ApiResponse>(`${this.endpoint}${userId}/update/`, data);
    }

    deleteUser(userId: number): Observable<ApiResponse> {
        return this.apiService.delete<ApiResponse>(`${this.endpoint}${userId}/delete/`);
    }
}
