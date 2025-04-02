
import {AttendancesRepository} from "../../../data/repositories/AttendancesRepository";


const {getEventAttendancesStadistics} = new AttendancesRepository()

export const getEventAttendancesStatsUseCase = async (eventSlug: string) => {
    return await getEventAttendancesStadistics(eventSlug);
}