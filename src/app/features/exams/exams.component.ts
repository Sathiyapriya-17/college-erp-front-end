import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-exams',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './exams.component.html',
    styleUrl: './exams.component.css'
})
export class ExamsComponent implements OnInit {
    examResults = [
        { subject: 'Mathematics', internal: 25, external: 65, total: 90, grade: 'A+' },
        { subject: 'Physics', internal: 22, external: 58, total: 80, grade: 'A' },
        { subject: 'Computer Science', internal: 24, external: 68, total: 92, grade: 'O' },
        { subject: 'English', internal: 20, external: 60, total: 80, grade: 'A' }
    ];

    gpa = 3.85;
    cgpa = 3.75;

    ngOnInit(): void { }
}
