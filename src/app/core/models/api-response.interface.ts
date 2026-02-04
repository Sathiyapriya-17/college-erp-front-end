export type ServerErrors = Record<string, string | string[]>;

export interface ApiResponse<T = unknown> {
    success: boolean;
    message?: string;
    data?: T;
    errors?: ServerErrors;
}
