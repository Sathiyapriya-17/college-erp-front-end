import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

import { StudentsComponent } from './features/students/students.component';
import { AttendanceComponent } from './features/attendance/attendance.component';
import { FacultyComponent } from './features/faculty/faculty.component';
import { ExamsComponent } from './features/exams/exams.component';
import { TimetableComponent } from './features/timetable/timetable.component';
import { NoticesComponent } from './features/notices/notices.component';
import { FeesComponent } from './features/fees/fees.component';
import { CoursesComponent } from './features/courses/courses.component';
import { DepartmentsComponent } from './features/departments/departments.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'students', component: StudentsComponent },
            { path: 'faculty', component: FacultyComponent },
            { path: 'attendance', component: AttendanceComponent },
            { path: 'exams', component: ExamsComponent },
            { path: 'timetable', component: TimetableComponent },
            { path: 'notices', component: NoticesComponent },
            { path: 'fees', component: FeesComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'departments', component: DepartmentsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '/login' }
];
