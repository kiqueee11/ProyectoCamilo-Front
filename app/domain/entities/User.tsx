export interface User{
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

export type ParticipantRequest = Pick<User, 'email'>

export type ParticipantResponse = Pick<User, 'email' | 'name'>