export interface ApiDeliveryResponse {
    message: string;
    success: boolean;
    status: number;
    data?: any;
    error?: any;

}

export interface ApiResponse {
    success?: string;
    error?: string;
    message?: string;
}