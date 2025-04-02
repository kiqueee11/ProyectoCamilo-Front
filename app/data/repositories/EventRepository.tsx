import {EventInterface} from "../../domain/entities/Event";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {EventRepository} from "../../domain/repositories/EventRepository";

export class EventRepositoryImpl implements EventRepository{
    async getEventsByTitle(title: string): Promise<EventInterface[]> {
        try{
            const response = await ApiDelivery.post('/v1/find/event/title', { title });
            return Promise.resolve(response.data.events);
        } catch(error){
            let e = (error as AxiosError);
            console.log("Error respuesta: ", e.response?.data);
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
    async createEvent(title: string,description: string, date: string, location: string, type: string): Promise<EventInterface[]> {
        try{
            const response = await ApiDelivery.post('/v1/create/event', { title,description, date, location, type });
            return Promise.resolve(response.data.events);
        } catch(error){
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getEventsByDate(date: string): Promise<EventInterface[]> {
        try{
            const response = await ApiDelivery.post('/v1/find/event/date', { date });
            return Promise.resolve(response.data.events);
        } catch(error){
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async updateEvent(eventId: number, title: string, description: string, date: string, location: string, type: string): Promise<EventInterface> {
        try {
            const response = await ApiDelivery.put(`/v1/update/event/{eventId}`, {
                title,
                description,
                date,
                location,
                type,
            });

            return Promise.resolve(response.data.event);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error al actualizar evento: ", e.response?.data);
            return Promise.reject(e.response?.data);
        }
    }

    async deleteEvent(evento: EventInterface, id: number): Promise<ApiResponse> {
        try {
            const response = await ApiDelivery.delete(`v1/delete/event/${id}/`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiResponse);
        }
    }
}