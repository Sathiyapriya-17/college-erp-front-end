import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';
import { NavItem } from '../../models/nav-item.model';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
    menuItems: NavItem[] = [
        { label: 'Dashboard', icon: 'fas fa-th-large', route: '/dashboard', roles: ['admin', 'faculty', 'student'] },
        { label: 'Students', icon: 'fas fa-user-graduate', route: '/students', roles: ['admin', 'faculty'] },
        { label: 'Faculty', icon: 'fas fa-chalkboard-teacher', route: '/faculty', roles: ['admin'] },
        { label: 'Attendance', icon: 'fas fa-clipboard-check', route: '/attendance', roles: ['admin', 'faculty', 'student'] },
        { label: 'Examinations', icon: 'fas fa-file-invoice', route: '/exams', roles: ['admin', 'faculty', 'student'] },
        { label: 'Timetable', icon: 'fas fa-calendar-alt', route: '/timetable', roles: ['admin', 'faculty', 'student'] },
        { label: 'Notices', icon: 'fas fa-bullhorn', route: '/notices', roles: ['admin', 'faculty', 'student'] },
        { label: 'Fee Processing', icon: 'fas fa-file-alt', route: '/fees', roles: ['admin', 'student'] },
        { label: 'Course & Curriculum', icon: 'fas fa-book', route: '/courses', roles: ['admin', 'faculty'] },
        { label: 'Departments', icon: 'fas fa-building', route: '/departments', roles: ['admin'] }
    ];

    filteredMenuItems: NavItem[] = [];
    userRole: string = '';

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        const user = this.authService.getCurrentUser();
        if (user) {
            this.userRole = user.role;
            this.filteredMenuItems = this.menuItems.filter(item => item.roles.includes(this.userRole));
        }
    }
}
