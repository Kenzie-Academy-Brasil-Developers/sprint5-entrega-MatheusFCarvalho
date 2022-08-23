import { IUser } from "../interfaces/IUser"
import { userRepository } from "../userRepository/userRepository"

const patchUserService = async (id:string, oldUser:IUser, data:any) => {

    let newUser = {...oldUser,...data, updated_at:new Date()}

    await userRepository.createQueryBuilder()
    .update().set(newUser).where("id = :id", {id:id}).execute()
    return {message:data}
}

export default patchUserService