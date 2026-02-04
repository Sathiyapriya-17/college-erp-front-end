import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from './services/courses.service';
import { Course } from './models/course.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
    courses$: Observable<Course[]> | undefined;

    constructor(private coursesService: CoursesService) { }

    ngOnInit(): void {
        this.courses$ = this.coursesService.getAllCourses();
    }
}
