import {EventInterface} from "../entities/Event";

export interface EventRepository{
    getEventsByTitle: (title: string) => Promise<EventInterface[]>;
    getEventsByDate: (date: string) => Promise<EventInterface[]>;
}

