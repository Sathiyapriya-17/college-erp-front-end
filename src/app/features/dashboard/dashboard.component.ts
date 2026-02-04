import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/services/auth.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    user: any;
    stats: any[] = [];
    topPerformers: any[] = [];
    paymentRequests: any[] = [];
    attendanceHistory: any[] = [];

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.user = this.authService.getCurrentUser();
        this.loadStats();
        this.loadMockData();
    }

    loadMockData() {
        this.topPerformers = [
            { name: 'Marke Angel', id: '245690', year: '2019', marks: '1440', rank: '98.95%', status: 'up' },
            { name: 'Angel Korrea', id: '245690', year: '2020', marks: '1225', rank: '98.95%', status: 'up' },
            { name: 'Lucifer Zen', id: '245690', year: '2018', marks: '0875', rank: '98.95%', status: 'down' },
            { name: 'Trent Boult', id: '245690', year: '2019', marks: '1230', rank: '98.95%', status: 'up' },
            { name: 'Droid Man', id: '245690', year: '2021', marks: '1160', rank: '98.95%', status: 'up' }
        ];

        this.paymentRequests = [
            { id: '#323512', desc: 'Payment Request sent to #45678 (Mark Angel)', status: 'sent', date: 'Today' },
            { id: '#323512', desc: 'Payment Due of #45678 (Atlain Chopel)', status: 'due', date: 'Yesterday' },
            { id: '#323512', desc: 'Payment Received from #45678 (Roger Federa)', status: 'received', date: '2 days ago' },
            { id: '#323512', desc: 'Payment Pending of #45678 (Angelina K.)', status: 'pending', date: '3 days ago' }
        ];

        this.attendanceHistory = [40, 60, 42, 80, 50, 70, 90, 85, 75, 80, 85, 95];
    }

    loadStats() {
        if (this.user.role === 'admin') {
            this.stats = [
                { label: 'Total Students', value: '1,250', icon: 'fas fa-user-graduate', color: '#4e73df' },
                { label: 'Total Faculty', value: '85', icon: 'fas fa-chalkboard-teacher', color: '#1cc88a' },
                { label: 'Total Departments', value: '12', icon: 'fas fa-building', color: '#36b9cc' },
                { label: 'Pending Fees', value: '$15,400', icon: 'fas fa-dollar-sign', color: '#f6c23e' }
            ];
        } else if (this.user.role === 'faculty') {
            this.stats = [
                { label: 'Assigned Courses', value: '4', icon: 'fas fa-book', color: '#4e73df' },
                { label: 'Total Students', value: '180', icon: 'fas fa-user-graduate', color: '#1cc88a' },
                { label: 'Attendance Average', value: '92%', icon: 'fas fa-clipboard-check', color: '#36b9cc' },
                { label: 'Upcoming Exams', value: '2', icon: 'fas fa-file-invoice', color: '#f6c23e' }
            ];
        } else {
            this.stats = [
                { label: 'Current CGPA', value: '3.8', icon: 'fas fa-star', color: '#4e73df' },
                { label: 'Attendance', value: '95%', icon: 'fas fa-clipboard-check', color: '#1cc88a' },
                { label: 'Completed Credits', value: '64', icon: 'fas fa-book', color: '#36b9cc' },
                { label: 'Due Fees', value: '$0', icon: 'fas fa-check-circle', color: '#f6c23e' }
            ];
        }
    }
}
