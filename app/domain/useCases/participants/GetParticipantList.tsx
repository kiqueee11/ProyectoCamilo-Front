import {ParticipantRepositoryImpl} from "../../../data/repositories/ParticipantRepository";

const {get_users} = new ParticipantRepositoryImpl()

export const GetParticipantListUseCase = async (slug:string) => {
    return await get_users(slug)
}