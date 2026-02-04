import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-fees',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './fees.component.html',
    styleUrl: './fees.component.css'
})
export class FeesComponent implements OnInit {
    feeDetails = [
        { type: 'Tuition Fee', amount: 5000, paid: 5000, status: 'Paid', date: 'Jan 10, 2024' },
        { type: 'Library Fee', amount: 500, paid: 500, status: 'Paid', date: 'Jan 12, 2024' },
        { type: 'Exam Fee', amount: 1000, paid: 0, status: 'Pending', date: '-' },
        { type: 'Transportation', amount: 1200, paid: 600, status: 'Partial', date: 'Feb 05, 2024' }
    ];

    totalAmount = 7700;
    totalPaid = 6100;

    ngOnInit(): void { }
}
