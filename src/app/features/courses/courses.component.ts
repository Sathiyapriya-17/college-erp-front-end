import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
    courses = [
        { code: 'CS101', name: 'Intro to Computer Science', credits: 4, type: 'Core' },
        { code: 'MA201', name: 'Advanced Mathematics', credits: 3, type: 'Core' },
        { code: 'PH102', name: 'Engineering Physics', credits: 4, type: 'Core' },
        { code: 'HU301', name: 'Professional Ethics', credits: 2, type: 'Elective' }
    ];

    ngOnInit(): void { }
}
