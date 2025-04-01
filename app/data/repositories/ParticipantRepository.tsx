import {ParticipantInterface} from "../../domain/entities/Participant";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {ParticipantRepository} from "../../domain/repositories/ParticipantRepository";

export class ParticipantRepositoryImpl implements ParticipantRepository{
    async getParticipantByEmail(email: string): Promise<ParticipantInterface[]> {
        try{
            const response = await ApiDelivery.post('/v1/find/participant/email', { email });
            return Promise.resolve(response.data.events);
        } catch(error){
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

}