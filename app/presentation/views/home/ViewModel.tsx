import {useState} from "react";
import {EventInterface} from "../../../domain/entities/Event";
import {getEventsByDateUseCase, getEventsByTitleUseCase} from "../../../domain/useCases/events/GetEvents";

export const EventViewModel = () => {
    const [events, setEvents] = useState<EventInterface[]>([]);

    const getEventsByTitle = async (title: string) => {
        try{
            const response = await getEventsByTitleUseCase(title);
            console.log("Respuesta: ", response);
            setEvents(response)
        } catch (error) {
            console.error("Error mostrando los eventos: ", error)
        }
    }

    const getEventsByDate = async (date: string) => {
        try{
            const response = await getEventsByDateUseCase(date);
            console.log("Respuesta: ", response);
            setEvents(response);
        } catch (error) {
            console.error("Error mostrando los eventos: ", error)
        }
    }

    return{
        events,
        getEventsByTitle,
        getEventsByDate
    }
}