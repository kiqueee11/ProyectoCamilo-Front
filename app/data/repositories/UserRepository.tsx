import { ApiDelivery } from "../sources/remote/api/ApiDelivery";

import { AxiosError } from "axios";
import Toast from "react-native-toast-message";
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
            const e = error as AxiosError<{ error?: string }>;
            console.log("Error: " + JSON.stringify(e.response?.data));
            Toast.show({
                type: "error",
                text1: e.response?.data.error,
                position: "bottom",
            })
            throw new Error(e.response?.data?.message || "Error al verificar el usuario");
        }
    }
}