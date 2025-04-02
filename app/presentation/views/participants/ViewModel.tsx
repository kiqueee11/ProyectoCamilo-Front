
import {useState} from "react";
import {ParticipantRequest, ParticipantResponse} from "../../../domain/entities/Participant";
import {GetParticipantListUseCase} from "../../../domain/useCases/participants/GetParticipantList";
import {DeleteParticipantUseCase} from "../../../domain/useCases/participants/DeleteParticipantUseCase";
import participants from "./Participants";
import {AddParticipantUseCase} from "../../../domain/useCases/participants/AddParticipantUseCase";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamlist} from "../../../../App";
import {createUpdateAttendanceUseCase} from "../../../domain/useCases/attendances/CreateUpdateAttendance";
import {attendanceViewModel} from "../attendance/AttendanceViewModel";

type ParticipantsRouteProp = RouteProp<RootStackParamlist, 'Participants'>

export const ParticipantViewModel= () => {
    const [participants, setParticipants] = useState<ParticipantResponse[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const route = useRoute<ParticipantsRouteProp>();
    const {slug} = route.params;

    const {
        createAttendanceDTO,
    } = attendanceViewModel()

    const getParticipantsList = async (slug: string) => {
        try {
            const response = await GetParticipantListUseCase(slug)
            console.log("RESULT" + JSON.stringify(response))
            setParticipants(response.users)
        } catch (error) {

            console.log("error" + error)

        }
    }

    const deleteParticipant = async (email:string, slug:string) =>{
        const data : ParticipantRequest = {
            email: email,
        }
        try{
            const response = await DeleteParticipantUseCase(data, slug)
            console.log("RESULT" + JSON.stringify(response))
        }catch (error){
            console.log("error" + JSON.stringify(error))
        }
    }

    const addParticipant = async (email:string, slug:string) =>{
        const data : ParticipantRequest = {
            email: email,
        }
        try{
            const response = await AddParticipantUseCase(data, slug)
            await createUpdateAttendanceUseCase(createAttendanceDTO(false, email, slug));
            console.log("RESULT" + JSON.stringify(response))
        }catch (error){
            console.log("error" + JSON.stringify(error))
        }
    }
    return {
        participants,
        errorMessage,
        getParticipantsList,
        deleteParticipant,
        addParticipant,
        slug
    }
}