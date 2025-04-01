
import {useState} from "react";
import {ParticipantResponse} from "../../../domain/entities/Participant";
import {GetParticipantListUseCase} from "../../../domain/useCases/participants/GetParticipantList";

<<<<<<< HEAD
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

=======
export const ParticipantViewModel = (slug:string) => {
    const [participant, setParticipant] = useState<ParticipantInterface[]>([]);

    const getParticipantByEmail = async (slug: string) => {
        try{
            const response = await getParticipantByEmailUseCase(slug);
            console.log(response);
            setParticipant(response)
        } catch (error) {
            console.error("Error mostrando el participante: ", error)
>>>>>>> origin/grupo-1
        }
    }

    return{

        participants,
        errorMessage,
        getParticipantsList,
    }

}