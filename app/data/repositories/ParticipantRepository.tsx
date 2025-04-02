import {ParticipantRepository} from "../../domain/repositories/ParticipantRepository";
import {ParticipantRequest, ParticipantsList} from "../../domain/entities/Participant";
import {ApiResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import Toast from "react-native-toast-message";

export class ParticipantRepositoryImpl implements ParticipantRepository{

    async add_user_event(user: ParticipantRequest, slug:string): Promise<ApiResponse>{
        try{
            const response = await ApiDelivery.post(`/v1/events/${slug}/participants/add`, user)
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError<{error:string}>)
            if (e.response?.data) {
                console.log("Error:", e.response.data.error);
                Toast.show({
                    type: "error",
                    text1: e.response.data.error,
                    position: "bottom"
                })
                return e.response.data as ApiResponse;
            } else {
                console.log("Error desconocido:", error);
                return Promise.resolve({ error: "Error desconocido" } as ApiResponse);
            }
        }
    }

    async delete_user_event(user: ParticipantRequest, slug:string): Promise<ApiResponse>{
        try{
            const response = await ApiDelivery.delete(`/v1/participants/${slug}/`, {data:user})
            return Promise.resolve(response.data)
        }catch (err){
            let e = (err as AxiosError<{error:string}>)
            if (e.response?.data) {
                console.log("Error:", e.response.data.error);
                Toast.show({
                    type: "error",
                    text1: e.response.data.error,
                    position: "bottom"
                })
                return e.response.data as ApiResponse;
            } else {
                console.log("Error desconocido:", err);
                return Promise.resolve({ error: "Error desconocido" } as ApiResponse);
            }
        }
    }

    async get_users(slug:string): Promise<ParticipantsList>{
        try{
            const response = await ApiDelivery.get(`/v1/events/${slug}/participants/`)
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ParticipantsList);

        }
    }

}