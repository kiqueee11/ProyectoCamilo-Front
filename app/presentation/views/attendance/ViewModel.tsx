import {Attendance, CreateUpdateAttendance} from "../../../domain/entities/Attendance";
import {useState} from "react";
import {getEventAttendersUseCase} from "../../../domain/useCases/attendances/GetEventAttenders";
import {createUpdateAttendanceUseCase} from "../../../domain/useCases/attendances/CreateUpdateAttendance";


export const viewModel = () => {
    const [attenders, setAttenders] = useState<Attendance[]>([])

    const loadAttenders= async (eventSlug: string) => {
        const response = await getEventAttendersUseCase(eventSlug);
        console.log(response)
        setAttenders(response);
    }

    const addAttendanceParticipant = async (attendance: CreateUpdateAttendance) => {
        const response = await createUpdateAttendanceUseCase(attendance)
        console.log(response)
    }

    const createAttendanceDTO = (attendance: boolean, userEmail: string, eventSlug: string) => {
        const attendanceDTO: CreateUpdateAttendance = {
            attendance: attendance,
            user: userEmail,
            event: eventSlug
        }
        return attendanceDTO
    }

    const createUpdateAttendanceDTO = (attendance: boolean, userEmail: string, eventSlug: string) => {
        const attendanceDTO: CreateUpdateAttendance = {
            attendance: attendance,
            user: userEmail,
            event: eventSlug,
            update: true
        }
        return attendanceDTO
    }

    return {
        attenders,
        loadAttenders,
        createAttendanceDTO,
        createUpdateAttendanceDTO,
        addAttendanceParticipant,
    }
}
export default {attendanceViewModel: viewModel};