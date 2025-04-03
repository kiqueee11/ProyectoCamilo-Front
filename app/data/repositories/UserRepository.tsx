import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

import { AxiosError } from "axios";
import { UserInterface } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
export class UserRepositoryImpl implements UserRepository{
    async checkUsers(mail: string, password: string): Promise<{ data: UserInterface[]; status: number }> {
        try {
            console.log("UserRepositoryImpl: ", mail, password);
            const response = await ApiDelivery.post('/v1/check/user/', {
                email: mail,
                password: password,
            });
            return { data: response.data, status: response.status }; // Devuelve los datos y el status
        } catch (error) {
            const e = error as AxiosError<{ message?: string }>;
            console.log("Error: " + JSON.stringify(e.response?.data));
            throw new Error(e.response?.data?.message || "Error al verificar el usuario");
        }
    }
}