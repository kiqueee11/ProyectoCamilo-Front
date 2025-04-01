export interface EventInterface{
    id: number;
    title: string;
    description: string;
    date: string;
    host: number;
    users: number;
    location: string;
    type: string;
    stars?: number;
    slug: string;
}