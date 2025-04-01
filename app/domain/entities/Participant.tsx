export interface ParticipantInterface{
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    slug: string;
}