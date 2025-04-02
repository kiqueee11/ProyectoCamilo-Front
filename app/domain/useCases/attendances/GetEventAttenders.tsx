import {Attendance} from "../../entities/Attendance";
import {AttendancesRepository} from "../../../data/repositories/AttendancesRepository"


const {getEventAttenders} = new AttendancesRepository()

export const getEventAttendersUseCase = async (eventSlug: string) => {
    return await getEventAttenders(eventSlug)
}