import {EventRepositoryImpl} from "../../../data/repositories/EventRepository";
import {EventInterface} from "../../entities/Event";

const {getEventsByTitle} = new EventRepositoryImpl();
const {getEventsByDate} = new EventRepositoryImpl();

export const getEventsByTitleUseCase = async (title: string): Promise<EventInterface[]>  => {
    return await getEventsByTitle(title);
}

export const getEventsByDateUseCase = async (date: string): Promise<EventInterface[]>  => {
    return await getEventsByDate(date);
}