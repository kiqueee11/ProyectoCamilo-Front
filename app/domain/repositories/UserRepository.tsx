import {UserInterface} from "../entities/User";

export interface UserRepository{
    checkUsers: (mail: string, password:string) => Promise<UserInterface[]>;
}