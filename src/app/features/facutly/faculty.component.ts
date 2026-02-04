import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-faculty',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './faculty.component.html',
    styleUrl: './faculty.component.css'
})
export class FacultyComponent implements OnInit {
    faculty = [
        { id: 'F001', name: 'Dr. John Doe', department: 'Computer Science', designation: 'Professor', email: 'john.doe@college.edu' },
        { id: 'F002', name: 'Jane Smith', department: 'Physics', designation: 'Associate Professor', email: 'jane.smith@college.edu' }
    ];

    ngOnInit(): void { }
}
