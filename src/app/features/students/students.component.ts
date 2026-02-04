import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-students',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
    students = [
        { id: 'STU001', name: 'John Doe', course: 'Computer Science', year: '3rd Year', email: 'john.doe@example.com', status: 'Active' },
        { id: 'STU002', name: 'Jane Smith', course: 'Information Technology', year: '2nd Year', email: 'jane.smith@example.com', status: 'Active' },
        { id: 'STU003', name: 'Michael Brown', course: 'Electronics', year: '4th Year', email: 'michael.b@example.com', status: 'Inactive' },
        { id: 'STU004', name: 'Emily Davis', course: 'Mechanical', year: '1st Year', email: 'emily.d@example.com', status: 'Active' },
        { id: 'STU005', name: 'Chris Wilson', course: 'Civil Engineering', year: '3rd Year', email: 'chris.w@example.com', status: 'Active' }
    ];

    filteredStudents = [...this.students];

    ngOnInit(): void { }

    onSearch(event: any) {
        const query = event.target.value.toLowerCase();
        this.filteredStudents = this.students.filter(student =>
            student.name.toLowerCase().includes(query) ||
            student.id.toLowerCase().includes(query)
        );
    }
}
