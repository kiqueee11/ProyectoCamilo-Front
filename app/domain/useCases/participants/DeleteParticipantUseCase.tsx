import {ParticipantRepositoryImpl} from "../../../data/repositories/ParticipantRepository";
import {ParticipantRequest} from "../../entities/Participant";

const {delete_user_event} = new ParticipantRepositoryImpl()

export const DeleteParticipantUseCase = async (user: ParticipantRequest, slug:string) => {
    return await delete_user_event(user, slug)
}