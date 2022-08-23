import { IUser, IUserReq } from "../interfaces/IUser";
import { userRepository } from "../userRepository/userRepository";

const createUserService = async (userReq:IUserReq):Promise<IUser> => {



    const currentDate = new Date()
    const newUser:IUser = userRepository.create({
        ...userReq, 
        created_at: currentDate, 
        updated_at:currentDate})
    await userRepository.save(newUser)
    
    return newUser
}
export default createUserService