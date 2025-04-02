import {AttendancesRepository} from "../../../data/repositories/AttendancesRepository";
import {CreateUpdateAttendance} from "../../entities/Attendance";


const {createUpdateAttendance} = new AttendancesRepository()

export const createUpdateAttendanceUseCase = async (attendance: CreateUpdateAttendance) => {
    return await createUpdateAttendance(attendance);
}