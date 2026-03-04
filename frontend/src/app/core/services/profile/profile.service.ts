import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../auth/auth.service';

export interface Profile {
    name: string;
    title: string;
    homeDescription: string;
    aboutDescriptions: string[];
    skills: string[];
    email: string;
    phone: string;
}

export interface ProfileApiResponse {
    success: boolean;
    data: Profile;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private apiUrl = `${environment.apiUrl}/profile`;

    constructor(private http: HttpClient, private authService: AuthService) { }

    getProfile(): Observable<ProfileApiResponse> {
        return this.http.get<ProfileApiResponse>(this.apiUrl);
    }

    updateProfile(profile: Profile): Observable<ProfileApiResponse> {
        const token = this.authService.currentAdminValue?.token;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post<ProfileApiResponse>(this.apiUrl, profile, { headers });
    }
}
