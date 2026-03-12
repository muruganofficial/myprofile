import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../core/services/profile/profile.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    profile: Profile | null = null;

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
        this.profileService.getProfile().subscribe({
            next: (res) => {
                if (res.success) {
                    this.profile = res.data;
                }
            },
            error: (err) => {
                console.error('Error loading profile:', err);
            }
        });
    }
}
