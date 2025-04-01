import React, {useState} from "react";
import {ParticipantInterface} from "../../../domain/entities/Participant";
import {getParticipantByEmailUseCase} from "../../../domain/useCases/participants/GetParticipant";


export const ParticipantViewModel = (slug:string) => {
    const [participant, setParticipant] = useState<ParticipantInterface[]>([]);

    const getParticipantByEmail = async (slug: string) => {
        try{
            const response = await getParticipantByEmailUseCase(slug);
            console.log(response);
            setParticipant(response)
        } catch (error) {
            console.error("Error mostrando el participante: ", error)
        }
    }

    return{
        participant,
        getParticipantByEmail
    }
}