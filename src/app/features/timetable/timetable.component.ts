import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-timetable',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './timetable.component.html',
    styleUrl: './timetable.component.css'
})
export class TimetableComponent implements OnInit {
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    timeSlots = ['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 01:00', '02:00 - 03:00'];

    schedule: any = {
        'Monday': ['Math', 'Physics', 'Lab', 'Lunch', 'English'],
        'Tuesday': ['CS', 'Math', 'Physics', 'Lunch', 'Lab'],
        'Wednesday': ['English', 'CS', 'Math', 'Lunch', 'CS'],
        'Thursday': ['Physics', 'Lab', 'English', 'Lunch', 'Math'],
        'Friday': ['CS', 'Math', 'CS', 'Lunch', 'English']
    };

    ngOnInit(): void { }
}
