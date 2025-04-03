
import { UserRepositoryImpl } from "../../../data/repositories/UserRepository";
import { UserInterface } from "../../entities/User";

const {checkUsers} = new UserRepositoryImpl();

export const checkUser = async (
    email: string,
    password: string
): Promise<{ data: UserInterface[]; status: number }> => {
    console.log("CheckUserUseCase: ", email, password);
    
    const result = await checkUsers(email, password);
    return result;
};