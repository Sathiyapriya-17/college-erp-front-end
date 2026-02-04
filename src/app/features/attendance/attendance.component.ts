import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-attendance',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './attendance.component.html',
    styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {
    attendance = [
        { subject: 'Mathematics', total: 40, present: 36, percentage: 90 },
        { subject: 'Physics', total: 35, present: 28, percentage: 80 },
        { subject: 'Computer Science', total: 45, present: 42, percentage: 93 },
        { subject: 'English', total: 30, present: 21, percentage: 70 }
    ];

    ngOnInit(): void { }
}
