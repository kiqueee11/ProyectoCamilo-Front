import {EventRepositoryImpl} from "../../../data/repositories/EventRepository";
import {EventInterface} from "../../entities/Event";
import {ApiResponse} from "../../../data/sources/remote/models/ResponseApiDelivery";

const {deleteEvent} = new EventRepositoryImpl()

export const DeleteEventUseCase = async (evento: EventInterface, id: number): Promise<ApiResponse> => {
    return await deleteEvent(evento, id);
};