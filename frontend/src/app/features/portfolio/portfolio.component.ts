import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../core/services/project.service';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getFeaturedProjects().subscribe(res => {
            if (res.success) {
                this.projects = res.data;
            }
        });
    }
}
