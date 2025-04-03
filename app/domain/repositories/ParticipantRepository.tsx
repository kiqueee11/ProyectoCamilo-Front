import {ParticipantRequest, ParticipantsList} from "../entities/Participant";
import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

export interface ParticipantRepository {
    add_user_event(user: ParticipantRequest, slug:string): Promise<ApiResponse>;
    delete_user_event(user: ParticipantRequest, slug:string): Promise<ApiResponse>
    get_users(slug:string): Promise<ParticipantsList>;

}