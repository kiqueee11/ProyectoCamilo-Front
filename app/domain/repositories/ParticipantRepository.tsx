import {ParticipantInterface} from "../entities/Participant";

export interface ParticipantRepository{
    getParticipantByEmail: (title: string) => Promise<ParticipantInterface[]>;
}