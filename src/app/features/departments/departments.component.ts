import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-departments',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './departments.component.html',
    styleUrl: './departments.component.css'
})
export class DepartmentsComponent implements OnInit {
    departments = [
        { name: 'Computer Science', hod: 'Dr. Robert Fox', facultyCount: 25, studentCount: 450 },
        { name: 'Information Technology', hod: 'Dr. Sarah Wilson', facultyCount: 18, studentCount: 320 },
        { name: 'Mechanical Engineering', hod: 'John Miller', facultyCount: 22, studentCount: 380 },
        { name: 'Electronics', hod: 'Dr. Emily Davis', facultyCount: 20, studentCount: 350 }
    ];

    ngOnInit(): void { }
}
