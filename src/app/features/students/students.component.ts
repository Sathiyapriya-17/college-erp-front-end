import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from './services/students.service';
import { Student } from './models/student.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-students',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
    students$: Observable<Student[]> | undefined;

    constructor(private studentsService: StudentsService) { }

    ngOnInit(): void {
        this.students$ = this.studentsService.getAllStudents();
    }

    openAddModal() {
        alert('Add Student Modal (Mock Implementation)');
        // In real implementation, open a dialog
        // Then call this.studentsService.createStudent({...}).subscribe(...)
    }

    onEdit(student: Student) {
        alert('Edit Student: ' + student.firstName);
    }

    onDelete(id: number) {
        if (confirm('Are you sure you want to dismiss this student?')) {
            this.studentsService.deleteStudent(id).subscribe(() => {
                // Refresh list
                this.students$ = this.studentsService.getAllStudents();
            });
        }
    }
}
