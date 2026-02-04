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
        // Fallback user if null (for development view)
        if (!this.user) {
            this.user = { name: 'Admin User', role: 'admin' };
        }

        this.loadStats();
        this.loadMockData();
    }

    loadMockData() {
        // Indian Localized Data
        this.topPerformers = [
            { name: 'Aarav Sharma', id: '245690', year: '2023', marks: '1440', rank: '99.5%', status: 'up' },
            { name: 'Priya Patel', id: '245691', year: '2024', marks: '1425', rank: '98.9%', status: 'up' },
            { name: 'Rohan Gupta', id: '245692', year: '2023', marks: '1380', rank: '97.2%', status: 'down' },
            { name: 'Ananya Iyer', id: '245693', year: '2023', marks: '1350', rank: '96.5%', status: 'up' },
            { name: 'Vikram Singh', id: '245694', year: '2024', marks: '1320', rank: '95.8%', status: 'up' }
        ];

        this.paymentRequests = [
            { id: '#323512', desc: 'Tuition Fee paid by Rajesh Kumar', status: 'success', date: 'Today' },
            { id: '#323513', desc: 'Exam Fee due for Sneha Reddy', status: 'pending', date: 'Yesterday' },
            { id: '#323514', desc: 'Hostel Fee paid by Amit Verma', status: 'success', date: '2 days ago' },
            { id: '#323515', desc: 'Library Fine pending for Kavita', status: 'pending', date: '3 days ago' }
        ];

        this.attendanceHistory = [65, 78, 85, 92, 88, 70, 75, 95, 98, 85, 90, 96];
    }

    loadStats() {
        const role = this.user.role || 'admin';

        if (role === 'admin') {
            this.stats = [
                { label: 'Total Students', value: '2,450', icon: 'fas fa-user-graduate', color: '#4cc9f0' },
                { label: 'Total Faculty', value: '120', icon: 'fas fa-chalkboard-teacher', color: '#7209b7' },
                { label: 'Departments', value: '18', icon: 'fas fa-building', color: '#f72585' },
                { label: 'Pending Fees', value: '₹4.5L', icon: 'fas fa-rupee-sign', color: '#ef476f' } // Indian Currency
            ];
        } else if (role === 'faculty') {
            this.stats = [
                { label: 'My Courses', value: '5', icon: 'fas fa-book', color: '#4cc9f0' },
                { label: 'My Students', value: '240', icon: 'fas fa-user-graduate', color: '#7209b7' },
                { label: 'Attendance', value: '94%', icon: 'fas fa-clipboard-check', color: '#f72585' },
                { label: 'Assignments', value: '12', icon: 'fas fa-file-alt', color: '#ef476f' }
            ];
        } else {
            this.stats = [
                { label: 'CGPA', value: '8.9', icon: 'fas fa-star', color: '#4cc9f0' },
                { label: 'Attendance', value: '96%', icon: 'fas fa-check-circle', color: '#7209b7' },
                { label: 'Credits', value: '42', icon: 'fas fa-award', color: '#f72585' },
                { label: 'Fee Due', value: '₹0', icon: 'fas fa-rupee-sign', color: '#ef476f' }
            ];
        }
    }
}
