import {Attendance} from "../../../domain/entities/Attendance";
import {useState} from "react";
import {getEventAttendersUseCase} from "../../../domain/useCases/attendances/GetEventAttenders";


export const attendanceViewModel = () => {
    const [attenders, setAttenders] = useState<Attendance[]>([])

    const loadAttenders= async (eventSlug: string) => {

        const response = await getEventAttendersUseCase(eventSlug);
        setAttenders(response)


    }

    return {
        attenders,
        loadAttenders
    }
}
export default {attendanceViewModel};