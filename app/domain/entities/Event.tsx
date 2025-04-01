export interface EventInterface{
    id: number;
    title: string;
    description: string;
    date: string;
    host: string | null;
    users: string[];
    location: string;
    type: string;
    stars?: number;
    slug: string;
}