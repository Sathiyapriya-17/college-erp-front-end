import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoragesService {

    setToken(token: string, rememberMe: boolean): void {
        if (rememberMe) {
            this.set<string>('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }
    }
    getToken(): string | null {
        return this.get<string>('token') ?? sessionStorage.getItem('token');
    }
    clearToken(): void {
        this.remove('token');
        sessionStorage.removeItem('token');
    }

    private set<T>(key: string, value: T): void {
        try {
            let storeValue: string;

            if (value === null || value === undefined) {
                storeValue = '';
            } else if (typeof value === 'object') {
                storeValue = JSON.stringify(value);
            } else {
                storeValue = String(value);
            }

            localStorage.setItem(key, storeValue);
        } catch (error) {
            console.error('LocalStorage Set Error:', error);
        }
    }

    private get<T>(key: string): T | null {
        try {
            const item = localStorage.getItem(key);
            if (!item) {
                return null;
            }
            try {
                return JSON.parse(item) as T;
            } catch {
                return item as unknown as T;
            }

        } catch (error) {
            console.error('LocalStorage Get Error:', error);
            return null;
        }
    }
    private remove(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`LocalStorage REMOVE Error for key "${key}":`, error);
        }
    }
}
