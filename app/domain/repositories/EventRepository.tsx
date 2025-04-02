import { ApiResponse } from "../../data/sources/remote/models/ResponseApiDelivery";
import {EventInterface} from "../entities/Event";

export interface EventRepository{
    getEventsByTitle: (title: string) => Promise<EventInterface[]>;
    getEventsByDate: (date: string) => Promise<EventInterface[]>;
    deleteEvent(evento: EventInterface, id: number): Promise<ApiResponse>;
}

