
import {useState} from "react";
import {ParticipantResponse} from "../../../domain/entities/Participant";
import {GetParticipantListUseCase} from "../../../domain/useCases/participants/GetParticipantList";

export const ParticipantViewModel= () =>{
    const [participants, setParticipants] = useState<ParticipantResponse[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const getParticipantsList = async (slug:string) => {
        try{
            const response = await GetParticipantListUseCase(slug)
            console.log("RESULT" + JSON.stringify(response))
            setParticipants(response.users)
        }catch (error){

            console.log("error" + error)

        }
    }

    return{

        participants,
        errorMessage,
        getParticipantsList,
    }

}