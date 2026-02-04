import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { StoragesService } from './storages.service';
import { environment } from '../../environments/environment';

export type HttpParamValue = string | number | boolean | readonly (string | number | boolean)[];

export type HttpParamsRecord = Record<string, HttpParamValue>;

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly storageService: StoragesService = inject(StoragesService);

    private readonly baseUrl: string = environment.apiBaseUrl;

    public get<T>(url: string, params?: HttpParamsRecord): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${url}`, {
            headers: this.getPrivateHeaders(),
            params: new HttpParams({ fromObject: params ?? {} }),
        });
    }

    public post<T>(url: string, body: unknown): Observable<T> {
        const jsonHeaders = this.getPrivateHeaders().set('Content-Type', 'application/json');
        return this.http.post<T>(`${this.baseUrl}${url}`, body, { headers: jsonHeaders });
    }

    public put<T>(url: string, body: unknown): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${url}`, body, { headers: this.getPrivateHeaders() });
    }

    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${url}`, { headers: this.getPrivateHeaders() });
    }

    public handleError(error: unknown): Observable<never> {
        let errorMessage = 'Server Error';

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return throwError(() => new Error(errorMessage));
    }
    private getPrivateHeaders(): HttpHeaders {
        return new HttpHeaders().set('X-Domain', 'localhost')
            .set('X-Subdomain', 'saneforce')
            .set('Authorization', 'Bearer ' + this.storageService.getToken());
    }
}
