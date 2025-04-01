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
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

}