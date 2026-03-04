import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth/auth.service';

export interface Project {
    _id?: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface ProjectsResponse {
    success: boolean;
    count: number;
    data: Project[];
}

export interface ProjectResponse {
    success: boolean;
    data: Project;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private apiUrl = `${environment.apiUrl}/projects`;

    constructor(private http: HttpClient, private authService: AuthService) { }

    private getHeaders(): HttpHeaders {
        const token = this.authService.currentAdminValue?.token;
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

    getFeaturedProjects(): Observable<ProjectsResponse> {
        return this.http.get<ProjectsResponse>(`${this.apiUrl}/featured`);
    }

    getProjects(): Observable<ProjectsResponse> {
        return this.http.get<ProjectsResponse>(this.apiUrl);
    }

    createProject(project: Project): Observable<ProjectResponse> {
        return this.http.post<ProjectResponse>(this.apiUrl, project, { headers: this.getHeaders() });
    }

    updateProject(id: string, project: Project): Observable<ProjectResponse> {
        return this.http.put<ProjectResponse>(`${this.apiUrl}/${id}`, project, { headers: this.getHeaders() });
    }

    deleteProject(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
    }
}
