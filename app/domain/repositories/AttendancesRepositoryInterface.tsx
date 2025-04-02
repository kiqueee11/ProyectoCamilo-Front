import {Attendance, AttendanceStadistics, CreateUpdateAttendance} from "../entities/Attendance";


export interface AttendancesRepositoryInterface {
    getEventAttenders: (eventSlug: string) => Promise<Attendance[]>;
    createUpdateAttendance: (attendance: CreateUpdateAttendance) => Promise<string>;
    getEventAttendancesStadistics: (eventSlug: string) => Promise<AttendanceStadistics>
}