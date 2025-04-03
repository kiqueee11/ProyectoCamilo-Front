import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

import { AxiosError } from "axios";
import { UserInterface } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
export class UserRepositoryImpl implements UserRepository{
    async checkUsers(mail: string,password: string): Promise<UserInterface[]> {
        try{
            console.log("UserRepositoryImpl: ", mail, password);
            const response = await ApiDelivery.post('/v1/check/user/', {"email" : mail,
  "password" : password});
            return Promise.resolve(response.data.events);
        } catch(error){
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}