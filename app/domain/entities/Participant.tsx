<<<<<<< HEAD

export interface Participant {
    id?: number,
    name: string,
    email: string,
    phone: string,
    password: string,
    slug: string,
    is_active: boolean,
    is_staff: boolean,
    is_superuser: boolean,
}

export type ParticipantRequest = Pick<Participant, 'email'>

export type ParticipantResponse = Pick<Participant, 'email' | 'name'>

export interface ParticipantsList{
    users: ParticipantResponse[]
=======
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
>>>>>>> origin/grupo-1
}