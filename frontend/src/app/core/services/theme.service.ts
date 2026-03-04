import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isDarkTheme = new BehaviorSubject<boolean>(true);
    isDarkTheme$ = this.isDarkTheme.asObservable();

    private currentPrimary = new BehaviorSubject<string>('emerald');
    currentPrimary$ = this.currentPrimary.asObservable();

    constructor() {
        this.initializeTheme();
    }

    private initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const savedPrimary = localStorage.getItem('primary');

        if (savedTheme) {
            this.isDarkTheme.next(savedTheme === 'dark');
            this.applyTheme(savedTheme === 'dark');
        } else {
            this.applyTheme(true); // Default dark
        }

        if (savedPrimary) {
            this.currentPrimary.next(savedPrimary);
            this.applyPrimary(savedPrimary);
        } else {
            this.applyPrimary('emerald'); // Default emerald
        }
    }

    toggleTheme() {
        const isDark = !this.isDarkTheme.value;
        this.isDarkTheme.next(isDark);
        this.applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    setPrimaryColor(color: string) {
        this.currentPrimary.next(color);
        this.applyPrimary(color);
        localStorage.setItem('primary', color);
    }

    private applyTheme(isDark: boolean) {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }

    private applyPrimary(color: string) {
        document.body.setAttribute('data-primary', color);
    }
}
