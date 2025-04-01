import React, {useState} from "react";
import {ParticipantInterface} from "../../../domain/entities/Participant";
import {getParticipantByEmailUseCase} from "../../../domain/useCases/participants/GetParticipant";


export const ParticipantViewModel = (email:string) => {
    const [participant, setParticipant] = useState<ParticipantInterface[]>([]);

    const getParticipantByEmail = async (email: string) => {
        try{
            const response = await getParticipantByEmailUseCase(email);
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