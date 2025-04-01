import {ParticipantRepositoryImpl} from "../../../data/repositories/ParticipantRepository";
import {ParticipantRequest} from "../../entities/Participant";

const {add_user_event} = new ParticipantRepositoryImpl()

export const AddParticipantUseCase = async (user: ParticipantRequest, slug:string) => {
    return await add_user_event(user, slug)
}