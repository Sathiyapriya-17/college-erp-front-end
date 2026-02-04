import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { StoragesService } from '../../../core/services/storages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private storageService: StoragesService) {
    const savedUser = this.storageService.get<any>('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(savedUser);
    }
  }


  login(username: string, password: string, role: string): Observable<any> {
    // Mocking an API call
    return of({ username, role, token: 'fake-jwt-token' }).pipe(
      delay(1000),
      tap(user => {
        this.storageService.set('currentUser', user);
        this.currentUserSubject.next(user);
      })
    );
  }

  logout() {
    this.storageService.remove('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
