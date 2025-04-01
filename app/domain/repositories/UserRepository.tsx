import {ParticipantRequest} from "../entities/User";

export interface UserRepository {
    add_user_event(user: ParticipantRequest, slug:string): Promise<void>;
}