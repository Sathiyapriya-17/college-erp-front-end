import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyService } from './services/faculty.service';
import { Faculty } from './models/faculty.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-faculty',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './faculty.component.html',
    styleUrl: './faculty.component.css'
})
export class FacultyComponent implements OnInit {
    faculty$: Observable<Faculty[]> | undefined;

    constructor(private facultyService: FacultyService) { }

    ngOnInit(): void {
        this.faculty$ = this.facultyService.getAllFaculty();
    }
}
