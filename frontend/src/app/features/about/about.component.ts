import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../core/services/profile/profile.service';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
