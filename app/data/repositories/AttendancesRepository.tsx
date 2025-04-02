import {Attendance} from "../../domain/entities/Attendance";
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
            console.error(e);
            return Promise.reject(e);
        }
    }
}