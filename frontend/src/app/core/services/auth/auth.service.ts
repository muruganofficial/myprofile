import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Admin {
    _id: string;
    username: string;
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private currentAdminSubject = new BehaviorSubject<Admin | null>(null);

    public currentAdmin$ = this.currentAdminSubject.asObservable();

    constructor(private http: HttpClient) {
        this.initAuth();
    }

    private initAuth() {
        const stored = localStorage.getItem('adminToken');
        if (stored) {
            this.currentAdminSubject.next(JSON.parse(stored));
        }
    }

    get currentAdminValue(): Admin | null {
        return this.currentAdminSubject.value;
    }

    login(username: string, password: string): Observable<Admin> {
        return this.http.post<Admin>(`${this.apiUrl}/login`, { username, password })
            .pipe(
                tap(admin => {
                    localStorage.setItem('adminToken', JSON.stringify(admin));
                    this.currentAdminSubject.next(admin);
                })
            );
    }

    logout() {
        localStorage.removeItem('adminToken');
        this.currentAdminSubject.next(null);
    }
}
