import {Attendance, AttendanceStadistics, CreateUpdateAttendance} from "../../domain/entities/Attendance";
import {Axios, AxiosError} from "axios";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AttendancesRepositoryInterface} from "../../domain/repositories/AttendancesRepositoryInterface";


export class AttendancesRepository implements AttendancesRepositoryInterface {
    async getEventAttenders(eventSlug: string): Promise<Attendance[]> {
        try {
            const response = await ApiDelivery.get(`events/${eventSlug}/attenders`)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log(e);
            return Promise.reject(e);
        }
    }

    async createUpdateAttendance(attendance: CreateUpdateAttendance): Promise<string> {
        try {
            const response = await ApiDelivery.post('attendances', attendance);
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log(e)
            return Promise.reject(e);
        }
    }

    async getEventAttendancesStadistics(eventSlug: string): Promise<AttendanceStadistics> {
        try {
            const response = await ApiDelivery.get(`events/${eventSlug}/stadistics`)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log(e)
            return Promise.reject(e)
        }
    }
}