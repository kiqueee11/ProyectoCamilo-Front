import {ParticipantRepositoryImpl} from "../../../data/repositories/ParticipantRepository";
import {ParticipantInterface} from "../../entities/Participant";

const {getParticipantByEmail} = new ParticipantRepositoryImpl();

export const getParticipantByEmailUseCase = async (email: string): Promise<ParticipantInterface[]>  => {
    return await getParticipantByEmail(email);
}