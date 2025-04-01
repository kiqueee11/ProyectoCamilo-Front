import {EventInterface} from "../../domain/entities/Event";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {EventRepository} from "../../domain/repositories/EventRepository";

export class EventRepositoryImpl implements EventRepository{
    async getEventsByTitle(title: string): Promise<EventInterface[]> {
        try {
            console.log("🔵 Enviando solicitud a la API...");
            const response = await ApiDelivery.post('/v1/find/event/title', { title });
            console.log("🟢 Respuesta recibida: ", response.data);
            return Promise.resolve(response.data.events);
        } catch (error) {
            let e = error as AxiosError;

            console.log("🔴 Error en la petición:");
            console.log("👉 Error completo:", e);
            console.log("👉 Código de estado:", e.response?.status);
            console.log("👉 Datos de error:", e.response?.data);

            return Promise.resolve([]);
        }
    }


}