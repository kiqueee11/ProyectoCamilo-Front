import {Attendance} from "../entities/Attendance";


export interface AttendancesRepositoryInterface {
    getEventAttenders: (eventId: number) => Promise<Attendance[]>;
}