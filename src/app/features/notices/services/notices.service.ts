import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { Notice, CreateNoticeRequest } from '../models/notice.model';

@Injectable({
    providedIn: 'root'
})
export class NoticesService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'notices/';

    getAllNotices(): Observable<Notice[]> {
        return this.apiService.get<Notice[]>(this.endpoint);
    }

    createNotice(data: CreateNoticeRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}create/`, data);
    }

    deleteNotice(id: number): Observable<ApiResponse> {
        return this.apiService.delete<ApiResponse>(`${this.endpoint}${id}/delete/`);
    }
}
