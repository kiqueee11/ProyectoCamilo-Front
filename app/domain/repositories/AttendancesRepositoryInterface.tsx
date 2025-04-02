import {Attendance} from "../entities/Attendance";


export interface AttendancesRepositoryInterface {
    getEventAttenders: (eventSlug: string) => Promise<Attendance[]>;
}