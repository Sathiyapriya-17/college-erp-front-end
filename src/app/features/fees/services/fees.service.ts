import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ApiResponse } from '../../../core/models/api-response.interface';
import { FeeStructure, PaymentTransaction, FeeReceipt, RecordPaymentRequest } from '../models/fee.model';

@Injectable({
    providedIn: 'root'
})
export class FeesService {
    private apiService = inject(ApiService);
    private readonly endpoint = 'fees/';

    getStudentFees(studentId: number): Observable<PaymentTransaction[]> {
        return this.apiService.get<PaymentTransaction[]>(`${this.endpoint}student/${studentId}`);
    }

    getFeeStructure(): Observable<FeeStructure[]> {
        return this.apiService.get<FeeStructure[]>(`${this.endpoint}structure/`);
    }

    recordPayment(data: RecordPaymentRequest): Observable<ApiResponse> {
        return this.apiService.post<ApiResponse>(`${this.endpoint}payment/record/`, data);
    }

    generateReceipt(transactionId: number): Observable<FeeReceipt> {
        return this.apiService.get<FeeReceipt>(`${this.endpoint}receipt/${transactionId}`);
    }
}
