import {Participant} from "./Participant";

export interface EventInterface{
    id: number;
    title: string;
    description: string;
    date: string;
    host: Participant;
    users: number;
    location: string;
    type: string;
    stars?: number;
    slug: string;
}