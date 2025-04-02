export interface ApiDeliveryResponse {
    message: string;
    success: boolean;
    status: number;
    data?: any;
    error?: any;

}

export interface ApiResponse {
    status: number;
    data?: any;

}