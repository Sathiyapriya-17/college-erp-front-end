export interface FeeStructure {
    id: number;
    name: string; // e.g., Tuition Fee, Library Fee
    amount: number;
    departmentId?: number; // Specific to department or common
    academicYear: string;
}

export interface PaymentTransaction {
    id: number;
    studentId: number;
    feeStructureId: number;
    amountPaid: number;
    paymentDate: string;
    paymentMethod: 'Cash' | 'Online' | 'Cheque';
    status: 'Pending' | 'Success' | 'Failed';
    transactionReference?: string;
}

export interface RecordPaymentRequest {
    studentId: number;
    feeStructureId: number;
    amountPaid: number;
    paymentMethod: string;
    transactionReference?: string;
}

export interface FeeReceipt {
    receiptNo: string;
    transaction: PaymentTransaction;
    studentName: string;
    feeName: string;
    dateGenerated: string;
}
