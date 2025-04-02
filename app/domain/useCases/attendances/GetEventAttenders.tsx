import {Attendance} from "../../entities/Attendance";
import {AttendancesRepository} from "../../../data/repositories/AttendancesRepository"


const {getEventAttenders} = new AttendancesRepository()

export const getEventAttendersUseCase = async (eventId: number) => {
    return await getEventAttenders(eventId)
}