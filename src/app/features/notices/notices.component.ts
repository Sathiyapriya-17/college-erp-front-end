import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-notices',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notices.component.html',
    styleUrl: './notices.component.css'
})
export class NoticesComponent implements OnInit {
    notices = [
        { title: 'Holiday Announcement', content: 'The college will remain closed on Friday due to a public holiday.', date: 'May 20, 2024', category: 'General' },
        { title: 'Registration Deadline', content: 'Last date for semester registration is June 1st.', date: 'May 18, 2024', category: 'Academic' },
        { title: 'Placement Drive', content: 'IT companies visiting for campus placements on May 25th.', date: 'May 15, 2024', category: 'Placement' },
        { title: 'Seminar on AI', content: 'A special seminar on Generative AI will be held in the main auditorium.', date: 'May 10, 2024', category: 'Event' }
    ];

    ngOnInit(): void { }
}
