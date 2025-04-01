import React, {useState} from "react";
import {EventInterface} from "../../../domain/entities/Event";
import {getEventsByTitleUseCase} from "../../../domain/useCases/events/GetEvents";

export const EventViewModel = (title:string) => {
    const [events, setEvents] = useState<EventInterface[]>([]);

    const getEventsByTitle = async (title: string) => {
        try{
            const response = await getEventsByTitleUseCase(title);
            console.log(response);
            setEvents(response)
        } catch (error) {
            console.error("Error mostrando los eventos: ", error)
        }
    }

    return{
        events,
        getEventsByTitle
    }
}