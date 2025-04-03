
import { UserRepositoryImpl } from "../../../data/repositories/UserRepository";
import { UserInterface } from "../../entities/User";

const {checkUsers} = new UserRepositoryImpl();

export const checkUser = async (email: string, password: string): Promise<UserInterface[]> => {
    console.log("CheckUserUseCase: ", email, password);
    return await checkUsers(email, password);
}